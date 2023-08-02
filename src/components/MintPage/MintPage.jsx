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
    const [activeTraitName, setActiveTraitName] = useState("backgrounds")
    const [activeBackground, setActiveBackground] = useState({})
    const [activeBody, setActiveBody] = useState({})
    const [activeFace, setActiveFace] = useState({})
    const [activeHead, setActiveHead] = useState({})
    const [activePet, setActivePet] = useState({})

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
            <Selected
                activeBackground={activeBackground}
                activeBody={activeBody}
                activeFace={activeFace}
                activeHead={activeHead}
                activePet={activePet}
                setActiveBackground={setActiveBackground}
                setActiveBody={setActiveBody}
                setActiveFace={setActiveFace}
                setActiveHead={setActiveHead}
                setActivePet={setActivePet}
            />
        </Flex>
    );

}