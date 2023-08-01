import { Flex } from "@chakra-ui/react";
import Canvas from "./components/Canvas";
import Noise from '../../bg/noise.svg';
import SideBar from "./components/SideBar";
import TraitsOption from "./components/TraitsOption";
import Selected from "./components/Selected";
import { useState } from "react";
import { getBackgrounds } from "./components/ImportImages";

export default function MintPage() {
    const backgrounds = getBackgrounds();
    const [activeTrait, setActiveTrait] = useState(backgrounds);

    return (
        <Flex
            bg="#7C89FF"
            backgroundImage={Noise}
            fontFamily="Amatic SC"
            direction={['column', 'column', 'row', 'row']}
            h="100%"

        >
            <SideBar activeTrait={activeTrait} setActiveTrait={setActiveTrait} />
            <TraitsOption activeTrait={activeTrait} />
            <Canvas />
            <Selected />
        </Flex>
    );

}