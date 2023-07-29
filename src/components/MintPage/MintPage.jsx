import { Flex } from "@chakra-ui/react";
import Canvas from "./components/Canvas";
import Noise from '../../bg/noise.svg';

export default function MintPage() {
    return (
        <Flex
            bg="#7C89FF"
            backgroundImage={Noise}
        >
            <Canvas />
        </Flex>
    )
}