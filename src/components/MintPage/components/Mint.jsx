// Import required modules and components
import React, { useEffect, useState } from "react";
import { Center, Button, Tooltip } from "@chakra-ui/react";
import { checkIfAnyTraitSelected } from "./Selected";
import { NFTStorage, File } from "nft.storage";
import { useAccount } from "wagmi";
import { prepareWriteContract, writeContract } from "wagmi/actions"
import { useConnectModal } from "@rainbow-me/rainbowkit";

// Initialize NFT Storage client
const NFT_STORAGE_TOKEN = import.meta.env.VITE_NFTSTORAGE_API_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

// Smart contract address
const ContractAddress = '0xf81352C5Cdd5665AB735CEf0947e2EF3230F0bC5';

// Define the MintButton component
export default function MintButton({ selectedTraits, stageRef }) {
    // Calculate remaining traits to select and button disable status
    const shouldRenderList = checkIfAnyTraitSelected(selectedTraits);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [numberLeft, setNumberLeft] = useState(5);

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
        const imageBlob = await fetch(imageUrl).then((response) => response.blob());
        const imageFile = new File([imageBlob], 'wanderer.png', { type: 'image/png' });

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

        return config;
    }

    // Write mint contract
    async function writeMintContract(request) {
        const { hash } = await writeContract(request);
        return hash;
    }

    // Open connection modal
    const { openConnectModal } = useConnectModal();

    // Handle mint button click
    const handleMintButtonClick = async () => {
        if (isConnected) {
            const metaDataURL = await uploadMetadataToIPFSAndReturnURI();
            const request = await prepareContractWrite(metaDataURL);
            const hash = await writeMintContract(request);
            console.log(hash);
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
                    onClick={handleMintButtonClick}
                >
                    Mint
                </Button>
            </Tooltip>
        </Center>
    ) : null;
}
