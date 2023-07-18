import { Box, Image } from "@chakra-ui/react";
import logo from "../assets/LOGO_full.svg";

export function Logo() {
    return (
        <Image
            src={logo}
            alt="Logo"
            width="218px"
            height="150"
            pb={2}
            flexShrink={0}
            align="center"
        />
    )
}