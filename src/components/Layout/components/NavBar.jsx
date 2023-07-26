import { Box, IconButton, Image, Link, Text, Flex, Stack, HStack } from "@chakra-ui/react";
import logo from "../../assets/LOGO_full.svg";
import Noise from '../../../bg/noise.svg';
import cloud2 from "../../assets/cloud2.svg";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";

// Logo component
function Logo(props) {
    return (
        <Box {...props}>
            <Image src={logo} alt="LOGO" width="100%" height="auto" />
        </Box>
    );
}

// MenuToggle component
function MenuToggle({ toggle, isOpen }) {
    return (
        <Box display={{ base: "block", md: "block", lg: "none" }} onClick={toggle} zIndex={1}>
            {isOpen ? <IconButton icon={<CloseIcon />} /> : <IconButton icon={<HamburgerIcon />} />}
        </Box>
    );
}

// MenuItem component
function MenuItem({ children, to = "/", ...rest }) {
    return (
        <Link display="block" href={to} {...rest}>
            <Text fontFamily="Amatic SC" fontSize={['16px', '20px', '24px']}>{children}</Text>
        </Link>
    );
}

// MenuLinks component
function MenuLinks({ isOpen }) {
    return (
        <Box
            display={{ base: isOpen ? 'block' : 'none', md: isOpen ? 'block' : 'none', lg: "none" }}
            flexBasis={{ base: '100%', md: 'auto' }}
            zIndex={1}
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
                <MenuItem to='https://opensea.io' isExternal>Explore</MenuItem>
            </Stack>
        </Box>
    );
}

// MenuLinksBox component
function MenuLinksBox({ children, ...rest }) {
    return (
        <Box
            display={{ base: 'none', md: 'none', lg: "block" }}
            flexShrink={0}
            borderRadius="24px"
            boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
            zIndex={2}
            height="50px"
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
                height="100%"
            >
                {children}
            </HStack>
        </Box>
    );
}

// NavBarContainer component
const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg="#7C89FF"
            backgroundImage={Noise}
            color={["white", "white", "White", "black"]}
            {...props}
        >
            {children}
        </Flex>
    );
}

// Animated Clouds component
export function Clouds({ src, ...props }) {
    return (
        <Box position="absolute" zIndex={0} {...props}>
            <motion.div
                animate={{ y: ["0%", "1%", "0%"], x: ["0%", "1%", "0%"] }}
                transition={{
                    repeat: Infinity, // Repeat the animation indefinitely
                    repeatType: "loop", // Loop the animation smoothly
                    duration: 8,
                    ease: "linear", // Use linear easing for a smoother loop
                }}
            >
                <Image src={src} width="100%" height="auto" />
            </motion.div>
        </Box>
    );
}

// NavBar component
export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <NavBarContainer {...props}>
                <Logo width={["100px", "190px"]} height='auto' />
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <MenuLinks isOpen={isOpen} />
                <MenuLinksBox background="#FFF" width="50%">
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/mint">Compose and Mint</MenuItem>
                    <MenuItem to="/governance">Governance</MenuItem>
                    <MenuItem to='https://opensea.io' isExternal>Explore</MenuItem>
                </MenuLinksBox>
                <MenuLinksBox width="15%" background="#5FC95D">
                    <MenuItem>Connect Wallet</MenuItem>
                </MenuLinksBox>
                <Clouds src={cloud2} top={4} right={4} width={["40%", "30%"]} />
                <Clouds src={cloud2} top={3} right={["30%", "calc(35% + 40px)"]} width="28%" display={{ base: 'none', md: 'block', lg: "block" }} />
            </NavBarContainer>
        </>
    );
}
