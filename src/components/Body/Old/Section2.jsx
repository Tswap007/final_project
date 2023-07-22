import { Box } from '@chakra-ui/react';
import Noise from '../../bg/noise.svg'


export function Section2() {
    return (
        <Box
            bg="#F3EAC6"
            backgroundImage={Noise}
            display={{ base: 'block', md: 'flex' }} // Display as block on small screens, flex on medium screens and above
            flexDirection={{ base: 'column', md: 'row' }} // Stack vertically on small screens, align horizontally on medium screens and above
            justifyContent="space-between"
            alignItems="center"
            px={4}
            py={2}
            height="762px"
        >
        </Box>
    );
}