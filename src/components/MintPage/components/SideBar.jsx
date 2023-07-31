import { Box, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";


function Buttons({ topBorder, bottomBorder, children, ...rest }) {

    return (
        <Button
            bg="black.800"
            w="100%"
            textColor="white"
            // bg="#313240"
            variant="ghost"
            borderBottomWidth={bottomBorder ? "0.5px" : "0px"}
            borderTopWidth={topBorder ? "0.5px" : "0px"}
            borderLeftWidth={{ base: "0.1px", md: "0" }}
            borderRightWidth={{ base: "0.1px", md: "0" }}
            borderColor="gray.400"
            borderRadius="0"
            p={{ base: "0px", md: "8" }}
            fontSize={['16px', '20px', '20px']}
            fontWeight={{ base: 200, md: 300 }}
            _hover={{ bg: "#313240" }}
            {...rest}
        >
            {children}
        </Button>
    )
}

function SideBarContents() {
    return (
        <Stack
            spacing={0}
            align="center"
            p={0}
            direction={['row', 'row', 'column', 'column']}

        >
            <Buttons topBorder bottomBorder>BackGround</Buttons>
            <Buttons bottomBorder>Head</Buttons>
            <Buttons bottomBorder>Expression</Buttons>
            <Buttons bottomBorder>Body</Buttons>
            <Buttons bottomBorder>Pet</Buttons>
        </Stack>
    )
}


export default function SideBar() {
    return (
        <Box
            position="relative"
            w={{ base: "100%", md: "15%", lg: "12%" }}
            bg={'blackAlpha.800'}
        >
            <SideBarContents />
        </Box>

    )
}