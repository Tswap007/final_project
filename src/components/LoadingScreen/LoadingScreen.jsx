import React from "react";
import { Center, Box } from "@chakra-ui/react";
import LoadingImage from "./components/Animation";

const LoadingScreen = () => {
  return (
    <Box
      height="100vh"
      w="100vw"
      display="flex"
      flexDir="column"
      bg="#7149C6"
      overflow="hidden"
      data-testid="Mainbox"
    >
      <Center h="100%" w="100%" data-id="Center Component">
        <LoadingImage />
      </Center>
    </Box>
  );
};

export default LoadingScreen;
