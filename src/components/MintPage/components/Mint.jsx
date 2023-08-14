// Import required modules and components
import React, { useEffect, useState } from "react";
import { Center, Button, Tooltip, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image, VStack } from "@chakra-ui/react";
import { checkIfAnyTraitSelected } from "./Selected";
import { NFTStorage, File } from "nft.storage";
import { useAccount } from "wagmi";
import { prepareWriteContract, writeContract, waitForTransaction } from "wagmi/actions"
import { useConnectModal } from "@rainbow-me/rainbowkit";
import loadingGif from "../../assets/loadingGif.gif"

// Initialize NFT Storage client
const NFT_STORAGE_TOKEN = import.meta.env.VITE_NFTSTORAGE_API_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

// NFT Smart contract address
const ContractAddress = '0xf81352C5Cdd5665AB735CEf0947e2EF3230F0bC5';

// Define the MintButton component
export default function MintButton({ selectedTraits, stageRef }) {
    // Calculate remaining traits to select and button disable status
    const shouldRenderList = checkIfAnyTraitSelected(selectedTraits);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [numberLeft, setNumberLeft] = useState(5);
    const [imageUrl, setImageUrl] = useState("");

    // Update UI when selected traits change
    useEffect(() => {
        let count = 0;
        for (let i = 0; i < selectedTraits.length; i++) {
            if (selectedTraits[i].label && selectedTraits[i].label.trim() !== "") {
                count++;
            }
        }

        setNumberLeft(5 - count);
        setIsButtonDisabled(count !== 5);
    }, [selectedTraits]);

    // Function to get image URL from canvas
    async function getImageUrl() {
        const dataURL = await stageRef.current.toDataURL();
        return dataURL;
    }

    // Function to upload metadata to IPFS and return URI
    async function uploadMetadataToIPFSAndReturnURI() {
        const imageUrl = await getImageUrl();
        setImageUrl(imageUrl);
        const imageBlob = await fetch(imageUrl).then((response) => response.blob());
        setMessage("Collecting Image From Canvas");
        const imageFile = new File([imageBlob], 'wanderer.png', { type: 'image/png' });
        setMessage("Uploading Image");
        const metadata = await client.store({
            name: 'Wanderer',
            description: 'Who says that this isn\'t fun',
            image: imageFile,
            attributes: [
                // Define attributes based on selected traits
                { "trait_type": "Background", "value": `${selectedTraits[0].label}` },
                { "trait_type": "Body", "value": `${selectedTraits[1].label}` },
                { "trait_type": "Head", "value": `${selectedTraits[2].label}` },
                { "trait_type": "Expression", "value": `${selectedTraits[3].label}` },
                { "trait_type": "Pet", "value": `${selectedTraits[4].label}` }
            ]
        });

        const metaDataURL = metadata.url;
        setMessage("Upload Succesful")
        console.log(metaDataURL);
        return metaDataURL;
    }

    // Fetch user account information
    const { isConnected, address } = useAccount();

    // Prepare contract write configuration
    async function prepareContractWrite(metaDataURL) {
        const config = await prepareWriteContract({
            address: ContractAddress,
            abi: [
                {
                    "inputs": [
                        { "internalType": "address", "name": "to", "type": "address" },
                        { "internalType": "string", "name": "uri", "type": "string" }
                    ],
                    "name": "safeMint",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
            ],
            functionName: 'safeMint',
            args: [address, metaDataURL],
        });
        setMessage("Preparing Transaction");

        return config;
    }

    // Write mint contract
    async function writeMintContract(request) {
        setMessage("Awaiting Wallet Confrimation");
        const { hash } = await writeContract(request);
        setMessage("Confirming Transaction");
        return hash;
    }

    const { openConnectModal } = useConnectModal();//start modal work from here
    const [message, setMessage] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const openModalWithMessage = (message) => {
        setMessage(message);
        onOpen();
    }
    const closePopUp = () => {
        onClose();
    }

    const [isMinting, setIsMinting] = useState(false);
    // Handle mint button click
    const handleMintButtonClick = async () => {
        if (isConnected) {
            setIsMinting(true);
            openModalWithMessage();
            const metaDataURL = await uploadMetadataToIPFSAndReturnURI();
            const request = await prepareContractWrite(metaDataURL);
            const hash = await writeMintContract(request);
            const data = await waitForTransaction({ hash });// use this to get the tx status possibly save that in a state and then use that to create some logic for the modal.
            setMessage("Transaction Completed")
            console.log(data);// if data from transaciton is null or status is failed then render something went wrong try again
            setIsMinting(false)
        } else {
            openConnectModal();
        }
    };

    // Render MintButton component
    return shouldRenderList ? (
        <Center>
            <Tooltip
                label={`Select ${numberLeft} more trait${numberLeft === 1 ? "" : "s"} To Proceed`}
                isOpen={isButtonDisabled}
                hasArrow
            >
                <Button
                    width="70%"
                    background="#5FC95D"
                    mb={3}
                    borderRadius="24px"
                    boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
                    isDisabled={isButtonDisabled}
                    // isLoading={isMinting}
                    // loadingText="Minting"
                    onClick={handleMintButtonClick}
                >
                    Mint
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} isCentered onClose={!isMinting ? closePopUp : null}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Center>
                            Minting Status
                        </Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Center>
                            <VStack spacing={4} mb={4}>
                                <Image src={isMinting ? loadingGif : imageUrl} alt={isMinting ? "LOGO ANIMATION" : "Your Wanderer"} w={isMinting ? "40%" : "60%"} h="auto" />
                                <span>{message}{isMinting ? "..." : "."}</span>
                            </VStack>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Center >
    ) : null;
}
