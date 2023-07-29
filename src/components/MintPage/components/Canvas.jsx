import { Box, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Stage, Layer, Image } from 'react-konva';
import bg1 from "../attributes/background/bg_01.png"
import head1 from "../attributes/head/head_01.png"
import face1 from "../attributes/face/face_01.png"
import body1 from "../attributes/body/body_01.png"
import pet1 from "../attributes/pet/pet_01.png"

const Canvas = () => {
    const [backgroundImage, setBackgroundImage] = useState(null);
    const [headImage, setHeadImage] = useState(null);
    const [faceImage, setFaceImage] = useState(null);
    const [bodyImage, setBodyImage] = useState(null);
    const [petImage, setPetImage] = useState(null);

    useEffect(() => {
        // Simulating backgroundImage loading with a delay
        const bgImg = new window.Image();
        bgImg.src = bg1;
        bgImg.onload = () => {
            setBackgroundImage(bgImg);
        };
    }, [backgroundImage]);

    useEffect(() => {
        // Simulating headImage loading with a delay
        const headImg = new window.Image();
        headImg.src = head1;
        headImg.onload = () => {
            setHeadImage(headImg);
        };
    }, [headImage]);

    useEffect(() => {
        // Simulating faceImage loading with a delay
        const faceImg = new window.Image();
        faceImg.src = face1;
        faceImg.onload = () => {
            setFaceImage(faceImg);
        };
    }, [faceImage]);

    useEffect(() => {
        // Simulating bodyImage loading with a delay
        const bodyImg = new window.Image();
        bodyImg.src = body1;
        bodyImg.onload = () => {
            setBodyImage(bodyImg);
        };
    }, [bodyImage]);

    useEffect(() => {
        // Simulating petImage loading with a delay
        const petImg = new window.Image();
        petImg.src = pet1;
        petImg.onload = () => {
            setPetImage(petImg);
        };
    }, [petImage]);

    const checkerboardPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill-opacity='.25'%3E%3Crect x='15' width='15' height='15' fill='%23888888' /%3E%3Crect y='15' width='15' height='15' fill='%23888888' /%3E%3C/svg%3E")`;

    return (
        <Flex bg={'blackAlpha.900'} width="40%" height="40%">
            <Box
                width="100%"
                height="100%"
                background={checkerboardPattern}
                backgroundSize="40px 40px"
                display="flex" // Make the Box a flex container
                alignItems="center" // Align the children vertically in the center
                justifyContent="center" // Align the children horizontally in the center
                minH="350px" // Set a minimum height for the Box
                minW="350px" // Set a minimum width for the Box
            >
                {/* <Stage width={350} height={350}>
                    <Layer>
                        <Image image={backgroundImage} width={350} height={350} />
                    </Layer>
                    <Layer>
                        <Image image={headImage} width={350} height={350} />
                    </Layer>
                    <Layer>
                        <Image image={faceImage} width={350} height={350} />
                    </Layer>
                    <Layer>
                        <Image image={bodyImage} width={350} height={350} />
                    </Layer>
                    <Layer>
                        <Image image={petImage} width={350} height={350} />
                    </Layer>
                </Stage> */}
            </Box>
        </Flex>
    )

}


export default Canvas;
