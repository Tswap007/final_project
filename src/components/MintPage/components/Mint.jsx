import { Center, Button, Tooltip, Box } from "@chakra-ui/react";
import { checkIfAnyTraitSelected } from "./Selected";
import { NFTStorage, File } from "nft.storage";
import { useEffect, useState } from "react";
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";


const NFT_STORAGE_TOKEN = import.meta.env.VITE_NFTSTORAGE_API_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

export default function MintButton({ selectedTraits, stageRef }) {

    const shouldRenderList = checkIfAnyTraitSelected(selectedTraits);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [numberLeft, setNumberLeft] = useState(5);

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


    async function getImageUrl() {
        const dataURL = await stageRef.current.toDataURL();
        // console.log(dataURL);
        return dataURL;
    };

    async function uploadMetadataToIPFSAndReturnURI() {
        console.log("Getting Image from Canvas");
        const imageUrl = await getImageUrl();

        // Convert the base64 image data to a Blob
        console.log("Converting Image to blob");
        const imageBlob = await fetch(imageUrl).then(response => response.blob());

        // Create a File object from the image Blob
        const imageFile = new File([imageBlob], 'wanderer.png', { type: 'image/png' });

        // Use the NFTStorage client to store the image and generate metadata
        console.log("Uploading Image and getting Metadata");
        const metadata = await client.store({
            name: 'Wanderer',
            description: 'Who says that this isn\'t fun',
            image: imageFile,
            attributes: [
                {
                    "trait_type": "Background",
                    "value": `${selectedTraits[0].label}`
                },
                {
                    "trait_type": "Body",
                    "value": `${selectedTraits[1].label}`
                },
                {
                    "trait_type": "Head",
                    "value": `${selectedTraits[2].label}`
                },
                {
                    "trait_type": "Expression",
                    "value": `${selectedTraits[3].label}`
                },
                {
                    "trait_type": "Pet",
                    "value": `${selectedTraits[4].label}`
                }
            ]
        });

        //store metaData to IPFS
        const metaDataUploadResponse = await client.storeBlob(new Blob([JSON.stringify(metadata)]));
        console.log("Metadata Upload Complete");
        const cid = metaDataUploadResponse; // The CID returned from IPFS

        // Construct the metadata URI using the nftStorage gateway URL and the CID
        const metadataUrl = `$https://nftstorage.link/ipfs/${cid}`;
        console.log("Metadata URI:", metadataUrl);

        return metadataUrl;
    }

    // // mint function is giving me a tough time but I shall prevail LOL..
    // const { config } = usePrepareContractWrite({
    //     address: '0x8857244FE8468B0de8826D1e7d7424E8F237A5f7',
    //     abi: [
    //         {
    //             "inputs": [
    //                 {
    //                     "internalType": "string",
    //                     "name": "uri",
    //                     "type": "string"
    //                 }
    //             ],
    //             "name": "safeMint",
    //             "outputs": [],
    //             "stateMutability": "nonpayable",
    //             "type": "function"
    //         },
    //     ],
    //     functionName: 'safeMint',
    //     args: ["ipfs://bafyreihajdxtg2ixvngsizv4wlmrll757bp2a6tfz2yfkijoqljg24gdau/metadata.json"]
    // })
    // const { data, write } = useContractWrite(config);
    // const { isLoading, isSuccess } = useWaitForTransaction({
    //     hash: data?.hash,
    // });
    // if (isLoading) {
    //     console.log("Transaction Loading")
    // }
    // if (isSuccess) {
    //     console.log("TX succesful")
    // }

    // const { isConnected } = useAccount();
    // const { openConnectModal } = useConnectModal();

    // const handleMintButtonClick = async () => {
    //     if (isConnected) {
    //         const metaDataURI = await uploadMetadataToIPFSAndReturnURI();
    //         config.args = [metaDataURI]; // Update the args with the actual URI
    //         console.log(config.args)
    //         write?.();
    //     }
    //     else { openConnectModal() };
    // };


    return (
        shouldRenderList ? (
            <Center>
                <Tooltip label={`Select ${numberLeft} more trait${numberLeft === 1 ? "" : "s"} To Proceed`} isOpen={isButtonDisabled} hasArrow>
                    <Button
                        width="70%"
                        background="#5FC95D"
                        mb={3}
                        borderRadius="24px"
                        boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
                        isDisabled={isButtonDisabled || isLoading}
                    // onClick={write()}
                    >
                        MINT
                    </Button>
                </Tooltip>
            </Center>
        ) : null
    );
}