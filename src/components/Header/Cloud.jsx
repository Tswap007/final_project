import { Box, Image } from '@chakra-ui/react';

export function Cloud({ mt, position, right, top, src }) {
    return (
        <Box style={{ pointerEvents: "none" }}>
            <Image
                src={src}
                width="318.958px"
                height="205.2px"
                flexShrink={0}
                mt={mt}
                position={position} // Set the position to absolute
                right={right}
                top={top}
                zIndex={1}
                style={{ pointerEvents: "none" }}
            />
        </Box>
    );
}
