import { Box, IconButton, Image, Link, Text, Flex, Stack, Center, HStack } from "@chakra-ui/react";
import logo from "../assets/LOGO_full.svg";
import Noise from '../../bg/noise.svg';
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Logo(props) {
    return (
        <Box {...props}>
            <Image src={logo} alt="LOGO" width="100%" height="auto" />
        </Box>
    );
}

function MenuToggle({ toggle, isOpen }) {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle} >
            {isOpen ? <IconButton icon={<CloseIcon />} /> : <IconButton icon={<HamburgerIcon />} />}
        </Box>
    );
}

function MenuItem({ children, to = "/", ...rest }) {
    return (
        <Link display="block" href={to}> <Text fontFamily="Amatic SC" fontSize={['16px', '20px', '24px']}  {...rest} >{children}</Text> </Link>
    )
}

function MenuLinks({ isOpen }) {
    return (
        <Box
            display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
            flexBasis={{ base: '100%', md: 'auto' }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={['center', 'space-between', 'flex-end', 'flex-end']}
                direction={['column', 'row', 'row', 'row']}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/mint">Compose And Mint</MenuItem>
                <MenuItem to="/governance">Governance</MenuItem>
                <MenuItem to="/explore">Explore</MenuItem>
            </Stack>
        </Box>
    );
}

function MenuLinksBox({ children, ...rest }) {
    return (
        <Box
            display={{ base: 'none', md: 'block' }}
            flexShrink={0}
            borderRadius="24px"
            boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
            zIndex={2}
            {...rest}
        >
            <HStack
                spacing={12}
                align="center"
                justify='center'
                fontStyle="normal"
                fontWeight={600}
                lineHeight="normal"
                letterSpacing="2px"
                textTransform="uppercase"
            >
                {children}
            </HStack>
        </Box>
    )
}

//try to use the menulinkbox for this and not repeat code
//also increase height of the box to add a bit more asthetics 
//next order of buisness is to add the clouds

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={8}
            bg="#7C89FF"
            backgroundImage={Noise}
            color={["white", "white", "black", "black"]}
            {...props}
        >
            {children}
        </Flex>
    )
}


export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <NavBarContainer {...props}>
            <Logo width={["100px", "170px"]} height='auto' />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
            <MenuLinksBox background="#FFF" width="50%">
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/mint">Compose and Mint</MenuItem>
                <MenuItem to="/governance">Governance</MenuItem>
                <MenuItem to="/explore">Explore</MenuItem>
            </MenuLinksBox>
            <MenuLinksBox width="15%" background="#5FC95D"><MenuItem>Connect Wallet</MenuItem></MenuLinksBox>
        </NavBarContainer>
    )
}