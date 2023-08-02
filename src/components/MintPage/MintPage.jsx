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
    const [activeTraitName, setActiveTraitName] = useState("")
    const [activeBackground, setActiveBackground] = useState(null)
    const [activeBody, setActiveBody] = useState(null)
    const [activeFace, setActiveFace] = useState(null)
    const [activeHead, setActiveHead] = useState(null)
    const [activePet, setActivePet] = useState(null)

    return (
        <Flex
            bg="#7C89FF"
            backgroundImage={Noise}
            fontFamily="Amatic SC"
            direction={['column', 'column', 'row', 'row']}
            h="100%"

        >
            <SideBar
                activeTrait={activeTrait} setActiveTrait={setActiveTrait}
                activeTraitName={activeTraitName} setActiveTraitName={setActiveTraitName} />
            <TraitsOption
                activeTrait={activeTrait}
                activeTraitName={activeTraitName}
                setActiveBackground={setActiveBackground}
                setActiveBody={setActiveBody}
                setActiveFace={setActiveFace}
                setActiveHead={setActiveHead}
                setActivePet={setActivePet}
            />
            <Canvas
                activeBackground={activeBackground}
                activeBody={activeBody}
                activeFace={activeFace}
                activeHead={activeHead}
                activePet={activePet}
            />
            <Selected />
        </Flex>
    );

}