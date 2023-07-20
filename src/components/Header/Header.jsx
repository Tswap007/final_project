import { Box, Flex } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';
import { ConnectWallet } from './ConnectWallet';
import { LinkAnimation } from './LinkAnimation';
import Noise from '../../bg/noise.svg';
import { Cloud } from './Cloud';
import Cloud1 from '../assets/cloud1.svg';

export function Header() {
    return (
        <Flex
            position="relative" // Set the position of the container to relative
            bg="#7C89FF"
            backgroundImage={Noise}
            display={{ base: 'block', md: 'flex' }}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            px={4}
            py={2}
            height="auto"
        >
            <LinkAnimation href=''><Logo /></LinkAnimation>
            <NavLink />
            <LinkAnimation><ConnectWallet /></LinkAnimation>
            <Cloud src={Cloud1} mt="70.58px" position="absolute" right='30px' top='5px' />
        </Flex>
    );
}

