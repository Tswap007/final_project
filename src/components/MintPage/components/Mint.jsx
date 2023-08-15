// Import required modules and components
import React, { useEffect, useState } from "react";
import { Center, Button, Tooltip, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Image, VStack, Link, Icon, useToast } from "@chakra-ui/react";
import { checkIfAnyTraitSelected } from "./Selected";
import { NFTStorage, File } from "nft.storage";
import { useAccount } from "wagmi";
import { prepareWriteContract, writeContract, waitForTransaction, readContract } from "wagmi/actions"
import { useConnectModal } from "@rainbow-me/rainbowkit";
import loadingGif from "../../assets/loadingGif.gif"
import failedImage from "../../assets/failed_image.svg"
import { BsFillCheckCircleFill } from "react-icons/bs";

// Initialize NFT Storage client
const NFT_STORAGE_TOKEN = import.meta.env.VITE_NFTSTORAGE_API_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

// NFT Smart contract address
const ContractAddress = '0xdb1B7dbFcbcd711f8CEBEAb0bb0e0113AA0a631d';

// Define the MintButton component
export default function MintButton({ selectedTraits, stageRef }) {
    // Calculate remaining traits to select and button disable status
    const shouldRenderList = checkIfAnyTraitSelected(selectedTraits);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [numberLeft, setNumberLeft] = useState(5);
    const [imageUrl, setImageUrl] = useState("");
    const [tokenId, setTokenId] = useState(0);

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

    async function getTokenId() {
        const tokenId = await readContract({
            address: ContractAddress,
            abi: [
                {
                    "inputs": [],
                    "name": "getTotalItemCount",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                }
            ],
            functionName: "getTotalItemCount"
        });
        setTokenId(tokenId);
    }

    // Function to upload metadata to IPFS and return URI
    async function uploadMetadataToIPFSAndReturnURI() {
        const imageUrl = await getImageUrl();
        setImageUrl(imageUrl);
        const imageBlob = await fetch(imageUrl).then((response) => response.blob());
        setMessage("Collecting Image From Canvas");
        const imageFile = new File([imageBlob], 'wanderer.png', { type: 'image/png' });
        setMessage("Preparing MetaData");
        await getTokenId();
        const metadata = await client.store({
            name: `Wanderer ${tokenId}`,
            description: 'A Little Wanderer In WonderLand.',
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
        setMessage("Please, confirm transaction in your wallet.");
        const { hash } = await writeContract(request);
        setMessage("Awaiting transaction status");
        return hash;
    }

    async function txStatus(hash) {
        const data = await waitForTransaction({ hash });
        if (data.status === "success") {
            setMessage("Transaction Successful")
            setIsMinting(false);
            setIsSuccess(true);
            return data;
        }
        else {
            setMessage("Something Went Wrong Pls ")
            setIsMinting(false);
            setIsSuccess(false);
        }
    }

    const { openConnectModal } = useConnectModal();
    const [message, setMessage] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const openModalWithMessage = (message) => {
        setMessage(message);
        onOpen();
    }

    const toast = useToast();
    const closePopUp = () => {
        if (isMinting) {
            toast({
                title: "Please wait",
                description: " Minting is in progress...",
                status: "warning",
                duration: 5000,
                isClosable: true,
            });
        } else {
            onClose();
        }
    };

    const [isMinting, setIsMinting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Handle mint button click
    const handleMintButtonClick = async () => {
        if (isConnected) {
            setIsMinting(true);
            openModalWithMessage();
            const metaDataURL = await uploadMetadataToIPFSAndReturnURI();
            const request = await prepareContractWrite(metaDataURL);
            try {
                const hash = await writeMintContract(request);
                if (hash) {
                    const data = await txStatus(hash);
                    console.log(data);
                } else {
                    setMessage("Something Went Wrong Pls ");
                    setIsMinting(false);
                    setIsSuccess(false);
                }
            } catch (error) {
                setMessage("Something Went Wrong Pls ");
                setIsMinting(false);
                setIsSuccess(false);
            }
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
                    isLoading={isMinting}
                    loadingText="Minting..."
                    onClick={handleMintButtonClick}
                >
                    Mint
                </Button>
            </Tooltip>
            <Modal isOpen={isOpen} isCentered onClose={!isMinting ? closePopUp : closePopUp} blockScrollOnMount={false} closeOnOverlayClick={isMinting ? closePopUp : true}>
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
                            <VStack spacing={3} mb={4}>
                                <Image src={isMinting ? loadingGif : isSuccess ? imageUrl : failedImage} alt={isMinting ? "LOGO ANIMATION" : isSuccess ? "Your Wanderer" : "Failed Status Image"}
                                    w={isMinting ? "40%" : isSuccess ? "60%" : "40%"}
                                    h="auto"
                                    borderRadius="10%"
                                    boxShadow={!isMinting && isSuccess ? "6px 5px 10px rgba(0, 0, 0, 0.8)" : null}
                                />
                                <span>{!isMinting && isSuccess ? <Icon as={BsFillCheckCircleFill} color="#5FC95D" boxSize={3} /> : null}{message}{!isMinting && !isSuccess ? <Link onClick={handleMintButtonClick} color={"blue.500"}>Try Again</Link> : null}{isMinting ? "..." : "."}</span>
                                {!isMinting && isSuccess ?
                                    <VStack spacing={3}>
                                        <Link href="/governance">
                                            <Button background="#5FC95D" borderRadius="24px" boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)">Propose/Vote In Governance</Button>
                                        </Link>
                                        <Link href={`https://testnets.opensea.io/assets/sepolia/${ContractAddress}/${tokenId}`} isExternal color={"blue.500"} textDecoration="underline">View Your Wanderer On OpenSea</Link>
                                    </VStack>
                                    : null}
                            </VStack>
                        </Center>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Center >
    ) : null;
}
