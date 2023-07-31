import { Box, Text, Image, Flex, Button } from "@chakra-ui/react";
import bg1 from "../attributes/background/background_01.svg"
import bg2 from "../attributes/background/background_02.svg"
import bg3 from "../attributes/background/background_03.svg"
import bg4 from "../attributes/background/background_04.svg"
import bg5 from "../attributes/background/background_05.svg"
import bg6 from "../attributes/background/background_06.svg"

const backgrounds = [
    { path: bg1, label: "Background 1" },
    { path: bg2, label: "Background 2" },
    { path: bg3, label: "Background 3" },
    { path: bg4, label: "Background 4" },
    { path: bg5, label: "Background 5" },
    { path: bg6, label: "Background 6" }
];

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
                fontSize={['16px', '20px', '20px']}
                fontWeight={{ base: 200, md: 300 }}
            >
                {children}
            </Text>
        </Box>
    )

}

function ButtonsWithImages({ path, label }) {
    return (
        <Button
            p={0}
            m={2}
            borderRadius="full"
            bg="gray.200"
            w="75px"
            h="75px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Image src={path} alt={label} width="60px" height="60px" />
            <Box mt={2}>{label}</Box>
        </Button>
    )
}

const ButtonList = () => (
    <Flex flexWrap="wrap">
        {backgrounds.map((button, index) => (
            <ButtonsWithImages key={index} icon={button.path} label={button.label} />
        ))}
    </Flex>
);

export default function TraitsOption() {
    return (
        <Box
            as="aside"
            w={{ base: "100%", md: "30%" }}
            position="relative"
            bg={"white"}
        >
            <TopBar bg={"white"} display={{ base: "none", md: "block" }} textColor={"black"}>Select Traits</TopBar>
            <ButtonList />
        </Box>
    )
}