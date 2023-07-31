import { Box, Text } from "@chakra-ui/react";
import { TopBar } from "./TraitsOption";

export default function Selected() {
    return (
        <Box
            as="aside"
            position="relative"
            flex={1}
            bg={"white"}
        >
            <TopBar flex={1} display={{ base: "none", md: "block" }} bg={"white"} textColor={"black"}>Selected Traits</TopBar>
        </Box>
    )

}