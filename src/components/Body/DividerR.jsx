import { Box } from "@chakra-ui/react";

export function DividerR() {
    return (
        <Box
            height="0px"
            width="180px" // Set width to "100%" to span the entire width of the page
            border="none"
            mt={0}
            mr={0}
            borderBottom="1px solid #E1D8B0" // Use "solid" instead of "dashed"
        />
    );
}
