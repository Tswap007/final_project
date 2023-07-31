import { Flex } from "@chakra-ui/react";
import Canvas from "./components/Canvas";
import Noise from '../../bg/noise.svg';
import SideBar from "./components/SideBar";

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
            <Canvas />
            {/* You can add more components here */}
        </Flex>
    );

}