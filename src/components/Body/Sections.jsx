import { Flex, Box, Image, Stack, Heading, Text, Link } from "@chakra-ui/react";
import Noise from '../../bg/noise.svg';
import HeaderTop from "../assets/texttop.svg";
import { Clouds } from "../Header/NavBar";



function SectionImage({ sectionImage, sectionOverlayImage, zIndex, left }) {
    return (
        <Box w={{ base: "80%", sm: "80%", md: "70%", lg: "50%" }} mb={{ base: 12, md: 8, lg: -1 }} position="relative" zIndex={zIndex}>
            <Image src={sectionImage} size="100%" />
            <Box
                position="absolute"
                w="25%"
                bottom="20%"
                left={left}

            >
                <Image src={sectionOverlayImage} size="100%" borderRadius='20px' />
            </Box>
        </Box>
    )
}

function SectionDetails({ header, description, buttonText, to }) {
    return (
        <Stack
            spacing={4}
            w={{ base: "80%", md: "60%", lg: "40%" }}
            align="center"
        // pb={30}
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
                {header}
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
                {description}
            </Text>

            <Link to={to}>
                <Box
                    alignItems='center'
                    bg={"white"}
                    h={{ base: "auto", md: "90px" }}
                    w={{ base: "100%", md: "300px" }}
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
                        h={{ base: "auto", md: "75px" }}
                        w={{ base: "100%", md: "250px" }}
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
                            {buttonText}
                        </Text>
                    </Box>
                </Box>
            </Link>

        </Stack>
    )
}


export default function Sections({ header, description, buttonText, to, sectionImage, sectionOverlayImage, bg, zIndex, direction, pt, left, cloudSrc, cloudTop, cloud2Top, cloudRight, cloud2Right, cloudLeft, cloud2Left, ...rest }) {
    return (
        <Flex
            position="relative"
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            wrap="no-wrap"
            minH="70vh"
            px={[3, 3, 6, 8]}
            paddingBottom={{ base: 5, md: 5, lg: 0 }}
            bg={bg}
            backgroundImage={Noise}
            direction={direction}
            pt={pt}
            {...rest}
        >
            {cloudSrc && <Clouds src={cloudSrc} top={cloudTop} right={cloudRight || undefined} left={cloudLeft || undefined} width={{ base: "80%", md: "30%" }} />}
            {cloudSrc && <Clouds src={cloudSrc} top={cloud2Top} right={cloud2Right || undefined} left={cloud2Left || undefined} width="30%" display={{ base: "none", md: "block" }} />}
            <SectionDetails header={header} description={description} buttonText={buttonText} to={to} />
            <SectionImage sectionImage={sectionImage} sectionOverlayImage={sectionOverlayImage} zIndex={zIndex} left={left} />
        </Flex>
    )
}