import Cloud from '../assets/cloud1.svg';
import { Image } from '@chakra-ui/react';

export function Cloud1() {
    return (
        <Image
            src={Cloud}
            width="318.958px"
            height="205.2px"
            flexShrink={0}
            mt="70.58px"
            position="absolute" // Set the position to absolute
            right='30px'
            top='5px'
        />
    );
}
