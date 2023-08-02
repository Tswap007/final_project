import { Box, Flex, Image, IconButton, Text } from "@chakra-ui/react";
import { TopBar } from "./TraitsOption";
import { BsFillTrashFill } from 'react-icons/bs';

function SelectedTraits({ path, label, onClick }) {
    return (
        <Box
            justifyContent="space-between"
            w="90%"
            h="auto"
            flexDirection={"row"}
        >
            <Box w="50%" h="100%">
                <Box>
                    <Image src={path} alt={label} width="100%" height="100%" borderRadius="10px" />
                </Box>
                <Box>
                    <Text>{label}</Text>
                </Box>
            </Box>
            <Box>
                <IconButton
                    aria-label="Delete"
                    icon={<BsFillTrashFill />}
                    onClick={onClick}
                    color="red"
                    variant="ghost"
                />
            </Box>
        </Box>
    )
}

function SelectedTraitsList({ activeBackground, activeBody, activeFace, activeHead, activePet }) {
    const selectedTrait = [
        activeBackground,
        activeBody,
        activeFace,
        activeHead,
        activePet
    ];

    return (
        <Flex flexWrap="wrap" padding={2}>
            {selectedTrait.map((selected, index) => (
                <SelectedTraits key={index} path={selected.path} label={selected.label} />
            ))}
        </Flex>
    )
}

export default function Selected({
    activeTraitName,
    setActiveBackground,
    setActiveBody,
    setActiveFace,
    setActiveHead,
    setActivePet,
    activeBackground,
    activeBody,
    activeFace,
    activeHead,
    activePet
}
) {

    return (
        <Box
            as="aside"
            position="relative"
            flex={1}
            bg={"white"}
        >
            <TopBar flex={1} display={{ base: "none", md: "block" }} bg={"white"} textColor={"black"}>Selected Traits</TopBar>
            <SelectedTraitsList activeBackground={activeBackground} activeBody={activeBody} activeFace={activeFace} activeHead={activeHead} activePet={activePet} />

        </Box>
    )

}