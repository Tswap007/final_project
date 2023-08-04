import { Box, Flex, useBreakpointValue, IconButton, Tooltip } from '@chakra-ui/react';
import { Stage, Layer, Image } from 'react-konva';
import { BsShuffle, BsFillTrashFill, BsDownload } from 'react-icons/bs';
import { getBackgrounds, getBodies, getFaces, getHeads, getPets } from "./ImportImages";
import useImage from 'use-image';


const Canvas = ({
    activeBackground, activeBody,
    activeFace, activeHead,
    activePet, setActiveBackground,
    setActiveBody, setActiveFace,
    setActiveHead, setActivePet,
    stageRef
}) => {


    const [backgroundImage] = useImage(activeBackground.path)
    const [headImage] = useImage(activeHead.path)
    const [faceImage] = useImage(activeFace.path)
    const [bodyImage] = useImage(activeBody.path)
    const [petImage] = useImage(activePet.path)

    const stageHeight = useBreakpointValue({ base: 350, md: 380, lg: 450 });
    const stageWidth = useBreakpointValue({ base: 350, md: 380, lg: 450 });



    function getRandomElementFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function shuffleAll({ setActiveBackground, setActiveBody, setActiveFace, setActiveHead, setActivePet }) {
        const backgrounds = getBackgrounds();
        const bodies = getBodies();
        const faces = getFaces();
        const heads = getHeads();
        const pets = getPets();

        setActiveBackground(getRandomElementFromArray(backgrounds))
        setActiveBody(getRandomElementFromArray(bodies))
        setActiveFace(getRandomElementFromArray(faces))
        setActiveHead(getRandomElementFromArray(heads))
        setActivePet(getRandomElementFromArray(pets))

    }

    function clearAll({ setActiveBackground, setActiveBody, setActiveFace, setActiveHead, setActivePet }) {
        setActiveBackground({})
        setActiveBody({})
        setActiveFace({})
        setActiveHead({})
        setActivePet({})
    }


    const handleSaveImage = async () => {
        const dataURL = await stageRef.current.toDataURL();
        if (dataURL) {
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'My_Wanderer.png';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };



    const checkerboardPattern = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill-opacity='.25'%3E%3Crect x='15' width='15' height='15' fill='%23FFFFFF' /%3E%3Crect y='15' width='15' height='15' fill='%23FFFFFF' /%3E%3C/svg%3E")`;

    return (
        <Flex bg={'blackAlpha.800'} width={stageWidth} height="auto" direction="column">
            <Box
                w="100%"
                bg={'white'}
                borderWidth="0.5px"
                borderLeft={0}
                borderColor="gray.400"
                p={3}
                display={{ base: "none", md: "block" }}
                justifyContent='space-between'
                alignItems="center"
            >
                <Flex>
                    <Tooltip hasArrow placement='top' label="Clear Canvas">
                        <IconButton
                            aria-label="Delete All"
                            icon={<BsFillTrashFill />}
                            color="red"
                            variant="ghost"
                            onClick={() => clearAll({
                                setActiveBackground,
                                setActiveBody,
                                setActiveFace,
                                setActiveHead,
                                setActivePet
                            })}
                        />
                    </Tooltip>
                    <Tooltip hasArrow placement='top' label="Shuffle">
                        <IconButton
                            aria-label="Shuffle"
                            icon={<BsShuffle />}
                            color="black"
                            variant="ghost"
                            onClick={() => shuffleAll({
                                setActiveBackground,
                                setActiveBody,
                                setActiveFace,
                                setActiveHead,
                                setActivePet
                            })}
                        />
                    </Tooltip>
                    <Tooltip hasArrow placement='top' label="Download">
                        <IconButton
                            aria-label="Download"
                            icon={<BsDownload />}
                            color="black"
                            variant="ghost"
                            onClick={handleSaveImage}
                        />
                    </Tooltip>
                </Flex>
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
                <Stage width={stageWidth} height={stageHeight} ref={stageRef}>
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
