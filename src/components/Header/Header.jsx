import { Box } from '@chakra-ui/react';
import { NavLink } from './NavLink';
import { Logo } from './Logo';
import { ConnectWallet } from './ConnectWallet';
import { LinkAnimation } from './LinkAnimation';
import Noise from '../../bg/noise.svg';
import { Cloud1 } from './Cloud';

export function Header() {
    return (
        <Box
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
            <Cloud1 />
        </Box>
    );
}

