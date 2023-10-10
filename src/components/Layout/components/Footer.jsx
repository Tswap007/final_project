import {
  Box,
  ButtonGroup,
  IconButton,
  Flex,
  Image,
  Text,
  Stack,
  Heading,
  Link,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import SmallLogo from "../../assets/small_LOGO.svg";
import ChakraUILogo from "../../assets/chakra_ui.svg";
import ReactLogo from "../../assets/react_logo.svg";
import RainbowKitLogo from "../../assets/rainbowkit_logo.svg";
import CanvaLogo from "../../assets/canva_logo.svg";
import WagmiLogo from "../../assets/wagmi_logo.png";
import KonvaLogo from "../../assets/konva_logo.png";

function LeftSide() {
  return (
    <Stack
      spacing={{ bae: 0, md: 6 }}
      alignItems="left"
      w={{ base: "100% ", md: "40% " }}
      direction={{ base: "column", md: "row" }}
    >
      <Box w={{ base: "60%", md: "50%" }}>
        <Image src={SmallLogo} w="100%" />
      </Box>
      <Box w={{ base: "80%", md: "50%", lg: "35%" }} pt={{ base: 0, md: 10 }}>
        <Text
          fontFamily="Amatic SC"
          fontSize={["14px", "18px", "20px"]}
          fontStyle="normal"
          color="white"
          lineHeight={1.5}
        >
          A collection of wanderers, awaiting entrace to the wonderland.
        </Text>
        <ButtonGroup spacing={4} pt={{ base: 4, md: 4 }}>
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            icon={<FaLinkedin />}
          />
          <IconButton
            as="a"
            href="https://github.com/Tswap007"
            aria-label="GitHub"
            target="_blank"
            icon={<FaGithub />}
          />
          <IconButton
            as="a"
            href="https://twitter.com/ThatCodedDude"
            aria-label="Twitter"
            target="_blank"
            icon={<FaTwitter />}
          />
        </ButtonGroup>
      </Box>
    </Stack>
  );
}

function RightSide() {
  return (
    <Box display={{ base: "none", md: "block" }} w={"40%"}>
      <Heading
        fontWeight={600}
        fontFamily="Amatic SC"
        letterSpacing="6px"
        color="white"
        fontSize="25px"
        pt="35px"
        mb={4}
        ml={20}
      >
        Built Using
      </Heading>
      <HStack
        fontFamily="Amatic SC"
        fontSize="20px"
        fontStyle="normal"
        color="white"
        lineHeight={1.5}
      >
        <VStack>
          <Link
            href="https://chakra-ui.com"
            isExternal
            display="flex"
            alignItems="center"
            data-id="Link one"
          >
            <Text mr="2">Chakra UI</Text>
            <Image src={ChakraUILogo} w="8%" />
          </Link>
          <Link
            href="https://www.rainbowkit.com/"
            isExternal
            display="flex"
            alignItems="center"
          >
            <Text mr="2">Rainbow Kit</Text>
            <Image src={RainbowKitLogo} w="8%" />
          </Link>
          <Link
            href="https://konvajs.org/"
            isExternal
            display="flex"
            alignItems="center"
          >
            <Text mr="2">Konva Js</Text>
            <Image src={KonvaLogo} w="8%" />
          </Link>
        </VStack>
        <VStack mr={0}>
          <Link
            href="https://reactjs.org"
            isExternal
            display="flex"
            alignItems="center"
          >
            <Text mr="2">React</Text>
            <Image src={ReactLogo} w="8%" />
          </Link>
          <Link
            href="https://www.canva.com/"
            isExternal
            display="flex"
            alignItems="center"
          >
            <Text mr="2">Art from Canva</Text>
            <Image src={CanvaLogo} w="8%" />
          </Link>
          <Link
            href="https://wagmi.sh/"
            isExternal
            display="flex"
            alignItems="center"
          >
            <Text mr="2">Wagmi</Text>
            <Image src={WagmiLogo} w="10%" />
          </Link>
        </VStack>
      </HStack>
    </Box>
  );
}

export default function Footer() {
  return (
    <Flex
      as="footer"
      role="contentinfo"
      py={{ base: "6", md: "6" }}
      justify="space-between"
      direction={{ base: "column", md: "row", lg: "row" }}
      bg="#000000"
      p={{ base: 5, md: 5 }}
    >
      <LeftSide />
      <RightSide />
    </Flex>
  );
}
