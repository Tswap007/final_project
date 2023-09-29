import { Box, ButtonGroup, IconButton, Flex, Image, Text, Stack, Heading } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import SmallLogo from "../../assets/small_LOGO.svg"

function LeftSide() {
    return (
        <Stack spacing={{bae: 0, md: 6}} alignItems="left" w={{ base: "100% ", md: "40% " }} direction={{base: "column", md: "row"}}>
            < Box w={{ base: "60%", md: "50%" }}>
                <Image src={SmallLogo} w="100%" />
            </Box >
            <Box w={{ base: "80%", md: "50%", lg:"35%" }} pt={{base:0, md:10}}>
                <Text
                    fontFamily="Amatic SC"
                    fontSize={['14px', '18px', '20px']}
                    fontStyle="normal"
                    color="white"
                    lineHeight={1.5}
                >
                    A collection of wanderers,
                    awaiting entrace to the wonderland.                                        
                </Text>
                <ButtonGroup spacing={4} pt={{base: 4, md: 4}}>
                    <IconButton as="a" href="#" aria-label="LinkedIn" target="_blank" icon={<FaLinkedin />} />
                    <IconButton as="a" href="https://github.com/Tswap007" aria-label="GitHub" target="_blank" icon={<FaGithub />} />
                    <IconButton as="a" href="https://twitter.com/ThatCodedDude" aria-label="Twitter" target="_blank" icon={<FaTwitter />} />
                </ButtonGroup>
            </Box>
        </Stack >
    )
}

function RightSide() {
    return (
        <Box height={"50%"} w={"100%"}>
            <Heading
                as="h2"
                textAlign="center"
                fontWeight={{ base: 800, md: 400 }}
                // textShadow="1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white"
                fontFamily="Amatic SC"
                letterSpacing={{base: "6px", md: "8px"}}
                color="white"
                pr={{base: 0, md: 20}}
                position={{base: "relative", md: "absolute"}}
                mt={{base: 5}}
                bottom={{ base: 0, md: 10 }}
                right="0"
                fontSize={{base: "20px", }}
            >
                POWERED BY ALCHEMY SDK   
            </Heading>
    </Box>
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
            p={{ base: 5, md: 5 }}
        >
            <LeftSide />
            <RightSide />
        </Flex>
    )

}