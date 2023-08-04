import { Center, Button } from "@chakra-ui/react";
import { checkIfAnyTraitSelected } from "./Selected";




export default function MintButton({ selectedTraits, stageRef }) {

    const shouldRenderList = checkIfAnyTraitSelected(selectedTraits);

    async function getImageUrl() {
        const dataURL = await stageRef.current.toDataURL();
        console.log(dataURL);
        return dataURL;

    };

    return (
        shouldRenderList ? (
            <Center>
                <Button
                    width="70%"
                    background="#5FC95D"
                    mb={3}
                    borderRadius="24px"
                    boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
                    onClick={getImageUrl}
                >
                    MINT
                </Button>
            </Center>
        ) : null
    );
}