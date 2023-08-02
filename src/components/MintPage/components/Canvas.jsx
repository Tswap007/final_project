import { Box, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import bg1 from "../attributes/background/background_02.svg"
import head1 from "../attributes/head/head_01.svg"
import face1 from "../attributes/face/face_01.svg"
import body1 from "../attributes/body/body_01.svg"
import pet1 from "../attributes/pet/pet_01.svg"

const Canvas = ({ activeBackground, activeBody, activeFace, activeHead, activePet }) => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [headImage, setHeadImage] = useState(null);
    const [faceImage, setFaceImage] = useState(null);
    const [bodyImage, setBodyImage] = useState(null);
    const [petImage, setPetImage] = useState(null);

    const stageHeight = useBreakpointValue({ base: 350, md: 380, lg: 450 });
    const stageWidth = useBreakpointValue({ base: 350, md: 380, lg: 450 });

    useEffect(() => {
        // Simulating backgroundImage loading with a delay
        const bgImg = new window.Image(activeBackground);
        bgImg.src = activeBackground.path;
        bgImg.onload = () => {
            setBackgroundImage(bgImg);
        };
    }, [activeBackground]);

    useEffect(() => {
        // Simulating headImage loading with a delay
        const headImg = new window.Image();
        headImg.src = activeHead.path;
        headImg.onload = () => {
            setHeadImage(headImg);
        };
    }, [activeHead]);

    useEffect(() => {
        // Simulating faceImage loading with a delay
        const faceImg = new window.Image();
        faceImg.src = activeFace.path;
        faceImg.onload = () => {
            setFaceImage(faceImg);
        };
    }, [activeFace]);

    useEffect(() => {
        // Simulating bodyImage loading with a delay
        const bodyImg = new window.Image();
        bodyImg.src = activeBody.path;
        bodyImg.onload = () => {
            setBodyImage(bodyImg);
        };
    }, [activeBody]);

    useEffect(() => {
        // Simulating petImage loading with a delay
        const petImg = new window.Image();
        petImg.src = activePet.path;
        petImg.onload = () => {
            setPetImage(petImg);
        };
    }, [activePet]);

    const checkerboardPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill-opacity='.25'%3E%3Crect x='15' width='15' height='15' fill='%23FFFFFF' /%3E%3Crect y='15' width='15' height='15' fill='%23FFFFFF' /%3E%3C/svg%3E")`;

    return (
        <Flex bg={'blackAlpha.800'} width={stageWidth} height="auto" direction="column">
            <Box
                w="100%"
                h="10%"
                bg={'black.800'}
                borderWidth="0.5px"
                borderLeft={0}
                opacity="40%"
                borderColor="gray.400"
                p={3}
                display={{ base: "none", md: "block" }}
            >
                <Text color={'white'}>Shuffle</Text>
            </Box>
            <Box
                width="100%"
                height="100%"
                background={checkerboardPattern}
                backgroundSize="35px 35px"
                display="flex" // Make the Box a flex container
                alignItems="center" // Align the children vertically in the center
                justifyContent="center" // Align the children horizontally in the center
                minH={stageHeight} // Set a minimum height for the Box
                minW={stageWidth}// Set a minimum width for the Box
            // borderRadius="20px"
            >
                <Stage width={stageWidth} height={stageHeight}>
                    <Layer>
                        <Image image={backgroundImage} width={stageWidth} height={stageHeight} />
                    </Layer>
                    <Layer>
                        <Image image={headImage} width={stageWidth} height={stageHeight} />
                    </Layer>
                    <Layer>
                        <Image image={faceImage} width={stageWidth} height={stageHeight} />
                    </Layer>
                    <Layer>
                        <Image image={bodyImage} width={stageWidth} height={stageHeight} />
                    </Layer>
                    <Layer>
                        <Image image={petImage} width={stageWidth} height={stageHeight} />
                    </Layer>
                </Stage>
            </Box>
        </Flex>
    )

}


export default Canvas;
