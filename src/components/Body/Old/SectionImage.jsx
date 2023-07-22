import { Box, Flex, Image } from '@chakra-ui/react';
import Background from '../assets/s1bg.svg';
import OverlayImage from '../assets/s1overlay.svg';

export function SectionImage() {
    return (
        <Flex justifyContent='center'>
            <Box position="relative" pr={10}>
                <Image src={Background} w="666px" h="706px" top='80%' />
                <Image src={OverlayImage} position="absolute" top="60%" left="50%" transform="translate(-50%, -50%)" w='200px' h='200px' borderRadius='20px' />
            </Box>
        </Flex>
    );
}
