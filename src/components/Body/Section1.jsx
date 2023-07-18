import { Box } from '@chakra-ui/react';
import { Divider } from './Divider'
import Noise from '../../bg/noise.svg'


export function Section1() {
    return (
        <>
            <Box
                bg="#7C89FF"
                backgroundImage={Noise}
                display={{ base: 'block', md: 'flex' }} // Display as block on small screens, flex on medium screens and above
                flexDirection={{ base: 'column', md: 'row' }} // Stack vertically on small screens, align horizontally on medium screens and above
                justifyContent="space-between"
                px={4}
                py={2}
                pl={0}
                mt={0}
                height="762px"
            >
                <Divider />
            </Box>
        </>
    );
}
