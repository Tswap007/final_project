import { Box } from "@chakra-ui/react";

export function Divider() {
    return (
        <Box
            height="0px"
            width="915px" // Set width to "100%" to span the entire width of the page
            border="none"
            mb={0}
            ml={0}
            borderBottom="1px solid #E1D8B0" // Use "solid" instead of "dashed"
        />
    );
}
