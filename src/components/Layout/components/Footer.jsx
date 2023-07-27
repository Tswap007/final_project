import { Box, ButtonGroup, IconButton, Flex, Image, Text, VStack, Heading, HStack, Link, UnorderedList, ListItem } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import SmallLogo from "../../assets/small_LOGO.png"

function LeftSide() {
    return (
        <VStack spacing={6} alignItems="left" w={{ base: "100 % ", md: "40 % " }}>
            < Box w={{ base: "50%", md: "35%" }}>
                <Image src={SmallLogo} w="100%" />
            </Box >
            <Box w={{ base: "80%", md: "50%" }}>
                <Text
                    fontFamily="Amatic SC"
                    fontSize={['14px', '18px', '20px']}
                    fontStyle="normal"
                    color="white"
                    lineHeight={1.5}
                >
                    It's all about having fun
                    life is too short to be stuck
                    in the past. keep moving forward
                </Text>
            </Box>
            <ButtonGroup spacing={4}>
                <IconButton as="a" href="#" aria-label="LinkedIn" icon={<FaLinkedin />} />
                <IconButton as="a" href="#" aria-label="GitHub" icon={<FaGithub />} />
                <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
            </ButtonGroup>
        </VStack >
    )
}

function RightSide() {
    return (
        <VStack w="40%" pt={20} display={{ base: "none", md: "block" }} spacing={10}>
            <Heading
                as="h2"
                textAlign="center"
                fontWeight={{ base: 400, md: 800 }}
                textShadow="1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white"
                fontFamily="Gemunu Libre"
                letterSpacing={{ base: "10px", md: "10px" }}
                color="white"
                pr={20}
                textDecoration="underline"
            >
                BUILT WITH
            </Heading>
            <UnorderedList
                fontFamily="Amatic SC"
                fontSize={["14px", "18px", "20px"]}
                fontStyle="normal"
                color="white"
                spacing={2}
                textAlign="left" // Set the text alignment to left
                listStyleType="none" // Remove the default list style
            >
                <HStack align="flex-start" spacing={10}>
                    <VStack>
                        <ListItem >React.JS</ListItem>
                        <ListItem >CHAKRA UI</ListItem>
                        <ListItem >FIGMA</ListItem>
                        <ListItem >CANVA</ListItem>
                    </VStack>
                    <VStack>
                        <ListItem >HARDHAT</ListItem>
                        <ListItem >SOLIDITY</ListItem>
                        <ListItem >JAVASCRIPT</ListItem>
                    </VStack>
                    <ListItem >POWERED BY ALCHEMY SDK</ListItem>
                </HStack>
            </UnorderedList>
        </VStack>
    )
}

export default function Footer() {
    return (
        <Flex
            as="footer"
            role="contentinfo"
            py={{ base: '6', md: '6' }}
            justify="space-between"
            direction={{ base: "column", md: "row", lg: "row" }}
            bg="#000000"
            p={{ base: 5, md: 10 }}
        >
            <LeftSide />
            <RightSide />
        </Flex>
    )

}