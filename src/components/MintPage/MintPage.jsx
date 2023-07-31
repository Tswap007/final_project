import { Flex } from "@chakra-ui/react";
import Canvas from "./components/Canvas";
import Noise from '../../bg/noise.svg';
import SideBar from "./components/SideBar";
import TraitsOption from "./components/TraitsOption";
import Selected from "./components/Selected";

export default function MintPage() {
    return (
        <Flex
            bg="#7C89FF"
            backgroundImage={Noise}
            fontFamily="Amatic SC"
            direction={['column', 'column', 'row', 'row']}
            h="100%"

        >
            <SideBar />
            <TraitsOption />
            <Canvas />
            <Selected />
        </Flex>
    );

}