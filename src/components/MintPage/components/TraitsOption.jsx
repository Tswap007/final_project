import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";


export function TopBar({ children, textColor, ...rest }) {
    return (
        <Box
            w="100%"
            h="10%"
            borderWidth="0.5px"
            borderLeft={0}
            borderColor="gray.400"
            p={3}
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.8)"
            {...rest}
        >
            <Text color={textColor}
                fontSize={['16px', '20px', '22px']}
                fontWeight={{ base: 200, md: 600 }}
            >
                {children}
            </Text>
        </Box>
    )

}

function ButtonsWithImages({ path, label, onClick, isSelected }) {
    return (
        <>
            <Box align="center" padding={1}>
                <Button
                    p={0}
                    m={2}
                    borderRadius="10px"
                    bg="gray.200"
                    w={{ base: "60px", md: "90px" }}
                    h={{ base: "60px", md: "90px" }}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    onClick={onClick}
                    borderWidth={isSelected ? "4px" : "0"}
                    borderColor={isSelected ? "blue.400" : "transparent"}
                    _focus={{ outline: "none" }}
                >
                    <Image src={path} alt={label} width="100%" height="100%" borderRadius="10px" />
                </Button>
                <Box mt={1} ><Text fontWeight={700}>{label}</Text></Box>
            </Box>
        </>
    )
}


const ButtonList = ({ activeTrait, setLayerImage, isSelected, selectedTraitsArray }) => (
    <Flex
    overflowX={{base:"scroll", md:"scroll", lg:"hidden"}} flexWrap={{base:"nowrap", md: "nowrap", lg:"wrap"}} padding={2}>
        {activeTrait.map((button, index) => (
            <ButtonsWithImages key={index} path={button.path} label={button.label} onClick={() => setLayerImage(button)} isSelected={isSelected(button.path, selectedTraitsArray)} />
        ))}
    </Flex>
);

export default function TraitsOption({
    activeTrait,
    activeTraitName,
    activeBackground, activeBody,
    activeFace, activeHead,
    activePet,
    setActiveBackground,
    setActiveBody,
    setActiveFace,
    setActiveHead,
    setActivePet,
}) {
    function setLayerImageOncanvas(buttonDetails) {
        if (activeTraitName === 'backgrounds') {
            setActiveBackground(buttonDetails);
        } else if (activeTraitName === 'bodies') {
            setActiveBody(buttonDetails);
        } else if (activeTraitName === 'expressions') {
            setActiveFace(buttonDetails);
        } else if (activeTraitName === 'heads') {
            setActiveHead(buttonDetails);
        } else if (activeTraitName === 'pets') {
            setActivePet(buttonDetails);
        }
    }

    const selectedTraitsArray = [activeBackground.path, activeBody.path, activeFace.path, activeHead.path, activePet.path];

    function isSelected(path, selectedTraitsArray) {
        const isSelected = selectedTraitsArray.includes(path);
        return (isSelected);

    }
    return (
        <Box
            as="aside"
            w={{ base: "100%", md: "100%", lg: "30%" }}
            position="relative"
            bg={"white"}
        >
            <TopBar bg={"white"} display={{ base: "none", md: "none", lg: "block" }} textColor={"black"}>{activeTraitName}</TopBar>
            <ButtonList activeTrait={activeTrait} setLayerImage={setLayerImageOncanvas} isSelected={isSelected} selectedTraitsArray={selectedTraitsArray} />
        </Box>
    )
}