import { Box, Button, Stack } from "@chakra-ui/react";
import { getBackgrounds, getBodies, getFaces, getHeads, getPets } from "./ImportImages";

const backgrounds = getBackgrounds();
const bodies = getBodies();
const faces = getFaces();
const heads = getHeads();
const pets = getPets();

export function Buttons({ children, onClick, isSelected, ...rest }) {
    return (
        <Button
            bg={isSelected ? "#313240" : "black.800"}
            w="100%"
            textColor="white"
            variant="ghost"
            borderBottomWidth="0.5px"
            borderLeftWidth={{ base: "0.1px", md: "0" }}
            borderRightWidth={{ base: "0.1px", md: "0" }}
            borderColor="gray.400"
            borderRadius="0"
            p={{ base: "0px", md: "8" }}
            fontSize={['16px', '20px', '20px']}
            fontWeight={{ base: 200, md: 300 }}
            _hover={{ bg: "#313240" }}
            onClick={onClick}
            {...rest}
        >
            {children}
        </Button>
    );
}

function SideBarContents({ changeActiveTrait, isSelected }) {
    return (
        <Stack spacing={0} align="center" p={0} direction={['row', 'row', 'column', 'column']}>
            <Buttons onClick={() => changeActiveTrait(backgrounds, "backgrounds")} isSelected={isSelected("backgrounds")}>BackGround</Buttons>
            <Buttons onClick={() => changeActiveTrait(bodies, "bodies")} isSelected={isSelected("bodies")}>Body</Buttons>
            <Buttons onClick={() => changeActiveTrait(heads, "heads")} isSelected={isSelected("heads")}>Head</Buttons>
            <Buttons onClick={() => changeActiveTrait(faces, "expressions")} isSelected={isSelected("expressions")}>Expression</Buttons>
            <Buttons onClick={() => changeActiveTrait(pets, "pets")} isSelected={isSelected("pets")}>Pet</Buttons>
        </Stack>
    );
}

export default function SideBar({ setActiveTrait, setActiveTraitName, activeTraitName }) {
    const changeActiveTraitInSideBar = (traitArray, traitName) => {
        setActiveTrait(traitArray);
        setActiveTraitName(traitName);

    };

    function isSelected(name) {
        return activeTraitName === name;
    }

    return (
        <Box
            as="nav"
            position="relative"
            w={{ base: "100%", md: "15%", lg: "12%" }}
            bg={'blackAlpha.800'}
            opacity="90%"
            borderWidth="0.5px"
            borderBottom={0}
            borderTop={0}
            borderLeft={0}
        >
            <SideBarContents changeActiveTrait={changeActiveTraitInSideBar} isSelected={isSelected} />
        </Box>
    );
}
