import { Center, Button, Tooltip } from "@chakra-ui/react";
import { checkIfAnyTraitSelected } from "./Selected";
import { NFTStorage, File } from "nft.storage";
import { useEffect, useState } from "react";


const NFT_STORAGE_TOKEN = import.meta.env.VITE_NFTSTORAGE_API_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })

export default function MintButton({ selectedTraits, stageRef }) {

    const shouldRenderList = checkIfAnyTraitSelected(selectedTraits);

    async function getImageUrl() {
        const dataURL = await stageRef.current.toDataURL();
        // console.log(dataURL);
        return dataURL;
    };

    async function uploadImageAndGetMetadata() {
        console.log("Getting Image from Canvas")
        const imageUrl = await getImageUrl();

        // Convert the base64 image data to a Blob
        console.log("Converting Image to blob")
        const imageBlob = await fetch(imageUrl).then(response => response.blob());

        // Create a File object from the image Blob
        const imageFile = new File([imageBlob], 'wanderer.png', { type: 'image/png' });

        // Use the NFTStorage client to store the image and generate metadata
        console.log("Uploading Image and getting MetaData")
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
        console.log("Upload Complete")
        console.log(metadata)
        return metadata;
    }

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


    return (
        shouldRenderList ? (
            <Center>
                <Tooltip label={`Select ${numberLeft} more trait${numberLeft === 1 ? "" : "s"}`} isOpen={isButtonDisabled}>
                    <Button
                        width="70%"
                        background="#5FC95D"
                        mb={3}
                        borderRadius="24px"
                        boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
                        isDisabled={isButtonDisabled}
                        onClick={uploadImageAndGetMetadata}
                    >
                        MINT
                    </Button>
                </Tooltip>
            </Center>
        ) : null
    );
}