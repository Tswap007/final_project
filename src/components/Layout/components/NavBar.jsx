import { Box, IconButton, Image, Link, Text, Flex, Stack, HStack, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import logo from "../../assets/LOGO_full.svg";
import Noise from '../../../bg/noise.svg';
import cloud2 from "../../assets/s2Cloud.svg";
import { CloseIcon, HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

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
        <Box display={{ base: "block", md: "block", lg: "none" }} onClick={toggle} zIndex={1} mt={4}>
            {isOpen ? <IconButton icon={<CloseIcon />} /> : <IconButton icon={<HamburgerIcon />} />}
        </Box>
    );
}

// MenuItems component
function MenuItems({ children, to = "/", ...rest }) {
    return (
        <Link display="block" href={to} {...rest}>
            <Text fontFamily="Amatic SC" fontSize={['16px', '20px', '24px']} color={{base:"white", md:"white", lg:"black"}}>{children}</Text>
        </Link>
    );
}

// MenuLinks component

function MenuLinks({ isOpen, onClose }) {
    return (
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={{base: "xs", md: "sm"}}>
            <DrawerOverlay />
            <DrawerContent bg="#7149C6" backgroundImage={Noise}>
                <DrawerCloseButton />
                <DrawerBody>
                    <Stack spacing={8} align="center" justify="center" direction="column" pt={4} mt={10}>
                        <MenuItems to="/">Home</MenuItems>
                        <MenuItems to="/mint">Compose And Mint</MenuItems>
                        <Box fontFamily="Amatic SC" >
                            <Menu>
                                <MenuButton fontSize={['16px', '20px', '24px']} color={{base:"white", md:"white", lg:"black"}}>Governance<ChevronDownIcon/></MenuButton>
                                    <MenuList>
                                        <MenuItem as='a' href='#'>Sepolia Dao</MenuItem>
                                        <MenuItem as='a' href='#'>Arbitrum Goerli Dao</MenuItem>
                                        <MenuItem as='a' href='#'>Polygon Mumbai Doa</MenuItem>
                                    </MenuList>
                            </Menu>
                        </Box>
                        <Box fontFamily="Amatic SC" >
                            <Menu>
                                <MenuButton fontSize={['16px', '20px', '24px']} color={{base:"white", md:"white", lg:"black"}}>Explore Collection <ChevronDownIcon/></MenuButton>
                                    <MenuList>
                                        <MenuItem as='a' href='#'>Sepolia</MenuItem>
                                        <MenuItem as='a' href='#'>Arbitrum Goerli</MenuItem>
                                        <MenuItem as='a' href='#'>Polygon Mumbai</MenuItem>
                                    </MenuList>
                            </Menu>
                        </Box>
                       <ConnectButton />
                    </Stack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
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
            height="35px"
            mt={4}
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
            // align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            maxHeight={["auto", "80px"]}
            p={3}
            bg="#7149C6"
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
                animate={{ y: ["0%", "2%", "0%"], x: ["0%", "2%", "0%"] }}
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
    
    const {isConnected} = useAccount();

    return (
        <>
            <NavBarContainer {...props}>
                <Logo width={["100px", "120px"]} height='auto'/>
                <MenuLinksBox background="#FFF" width="57%">
                    <MenuItems to="/">Home</MenuItems>
                    <MenuItems to="/mint">Compose and Mint</MenuItems>
                    <Menu>
                            <MenuButton
                            fontSize="25px"
                            color={"black"}
                            fontFamily="Amatic SC"
                            fontStyle="normal" 
                            fontWeight={600}
                            lineHeight="normal"
                            letterSpacing="2px"
                            textTransform="uppercase"
                            >Governance <ChevronDownIcon/></MenuButton>
                                <MenuList fontFamily="Amatic SC">
                                    <MenuItem as='a' href='https://opensea.io/' target="_blank">Sepolia</MenuItem>
                                    <MenuItem as='a' href='https://opensea.io/' target="_blank">Arbitrum Goerli</MenuItem>
                                    <MenuItem as='a' href='https://testnets.opensea.io/collection/wonderland-wanderers-10' target="_blank">Polygon Mumbai</MenuItem>
                                </MenuList>
                    </Menu>
                    <Menu>
                            <MenuButton
                            fontSize="25px"
                            color={"black"}
                            fontFamily="Amatic SC"
                            fontStyle="normal" 
                            fontWeight={600}
                            lineHeight="normal"
                            letterSpacing="2px"
                            textTransform="uppercase"
                            >Explore Collection <ChevronDownIcon/></MenuButton>
                                <MenuList fontFamily="Amatic SC">
                                    <MenuItem as='a' href='https://opensea.io/' target="_blank">Sepolia</MenuItem>
                                    <MenuItem as='a' href='https://opensea.io/' target="_blank">Arbitrum Goerli</MenuItem>
                                    <MenuItem as='a' href='https://testnets.opensea.io/collection/wonderland-wanderers-10' target="_blank">Polygon Mumbai</MenuItem>
                                </MenuList>
                    </Menu>
                </MenuLinksBox>
                <Box 
                zIndex={2}
                >
                <MenuLinks isOpen={isOpen} onClose={() => setIsOpen(false)}/>
                <Box
                    zIndex={2}
                    height="35px"
                    mt={4}
                    display={{ base: isConnected ? 'block' : 'none', md: "block", lg: "block" }}
                >
                    <ConnectButton
                        accountStatus={{ smallScreen: 'avatar', largeScreen: 'avatar', }}
                        chainStatus="icon"
                    />
                </Box>
                </Box>
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <Clouds src={cloud2} top={4} right={4} width={["40%", "15%"]} />
                <Clouds src={cloud2} top={3} right={["15%", "calc(35% + 10px)"]} width="15%" display={{ base: 'none', md: 'block', lg: "block" }} />
            </NavBarContainer>
        </>
    );
}
