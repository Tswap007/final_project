import { Box, Image } from "@chakra-ui/react";
import logo from "../assets/LOGO_full.svg";

export function Logo() {
    return (
        <Image
            src={logo}
            alt="Logo"
            width={["150px", "218px"]}
            height='auto'
            pb={2}
            flexShrink={0}
            align="center"
        />
    )
}