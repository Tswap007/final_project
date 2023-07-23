import { Flex, Box, Image, Stack, Heading, Text, Link } from "@chakra-ui/react";
import SectionOneImage from "../assets/s1bg.svg"
import FrontImage from "../assets/s1overlay.svg"
import Noise from '../../bg/noise.svg';
import HeaderTop from "../assets/texttop.svg"



function SectionImage() {
    return (
        <Box w={{ base: "80%", sm: "80%", md: "70%", lg: "50%" }} mb={{ base: 12, md: 8, lg: -1 }} position="relative">
            <Image src={SectionOneImage} size="100%" />
            <Box
                position="absolute"
                w="45%"
                bottom="10%"
                left="28%"

            >
                <Image src={FrontImage} size="100%" borderRadius='20px' />
            </Box>
        </Box>
    )
}

function SectionDetails() {
    return (
        <Stack
            spacing={4}
            w={{ base: "80%", md: "60%", lg: "40%" }}
            align="center"
            pb={2}
        >
            <Image src={HeaderTop} w={{ base: "40%", md: "60%", lg: "40%" }} />
            <Heading
                as="h1"
                textAlign="center"
                fontWeight={{ base: 400, md: 800 }}
                textShadow="1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white"
                fontFamily="Gemunu Libre"
                letterSpacing={{ base: "10px", md: "15px" }}
            >
                CUSTOMIZE
            </Heading>
            <Text
                fontFamily="Amatic SC"
                fontSize={['14px', '18px', '20px']}
                fontStyle="normal"
                letterSpacing={{ base: "1.5px", md: "2.5px" }}
                textTransform="lowercase"
                fontWeight={700}
                lineHeight={1.5}
                textAlign={["center", "center", "left", "left"]}
                pl={{ lg: 10 }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fun
            </Text>

            <Link>
                <Box
                    alignItems='center'
                    bg={"white"}
                    h={{ base: "auto", md: "auto", lg: "auto", xl: "auto" }}//reduce the width and height of the button
                    w={{ base: "100%", md: "373px" }}
                    borderRadius={{ base: "50px", md: "186px/59px" }}
                    display="flex"
                    justifyContent='center'
                    alignContent='center'
                    boxShadow="6px 12px 6px #00000040"
                    p={{ base: 2, md: 2 }}
                >
                    <Box
                        alignItems='center'
                        bg='#f18878'
                        h={{ base: "auto", md: "96px" }}
                        w={{ base: "100%", md: "317px" }}//reduce the width and height of the button
                        borderRadius={{ base: "24px", md: "186px/59px" }}
                        display='flex'
                        flexDir='row'
                        justifyContent='center'
                        alignContent='center'
                        border='1px solid'
                        borderColor='black'
                        p={2}
                    >
                        <Text
                            textAlign="center"
                            fontFamily="Amatic SC"
                            fontSize={['16px', '20px', '24px']}
                            fontStyle="normal"
                            fontWeight={700}
                            lineHeight="normal"
                            letterSpacing="2x"
                            textTransform="uppercase"
                        >
                            COMPOSE AND MINT
                        </Text>
                    </Box>
                </Box>
            </Link>

        </Stack>
    )
}

export function Section(...rest) {
    return (
        <Flex
            position="relative"
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={[3, 3, 6, 8]}
            mb={16}
            bg="#7C89FF"
            backgroundImage={Noise}
            {...rest}
        >
            <SectionDetails />
            <SectionImage />
        </Flex>
    )
}