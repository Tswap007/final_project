import { Flex } from "@chakra-ui/react";
import Canvas from "./components/Canvas";
import Noise from "../../bg/noise.svg";
import SideBar from "./components/SideBar";
import TraitsOption from "./components/TraitsOption";
import Selected from "./components/Selected";
import { useState, useRef } from "react";
import { getBackgrounds } from "./components/ImportImages";
import Layout from "../Layout/Layout";

export default function MintPage() {
  const backgrounds = getBackgrounds();
  const [activeTrait, setActiveTrait] = useState(backgrounds);
  const [activeTraitName, setActiveTraitName] = useState("backgrounds");
  const [activeBackground, setActiveBackground] = useState({});
  const [activeBody, setActiveBody] = useState({});
  const [activeFace, setActiveFace] = useState({});
  const [activeHead, setActiveHead] = useState({});
  const [activePet, setActivePet] = useState({});
  const stageRef = useRef(null);

  return (
    <>
      <Layout>
        <Flex
          bg="#7149C6"
          backgroundImage={Noise}
          fontFamily="Amatic SC"
          direction={["column", "column", "column", "row"]}
          h="100%"
          pt={3}
        >
          <SideBar
            activeTrait={activeTrait}
            setActiveTrait={setActiveTrait}
            activeTraitName={activeTraitName}
            setActiveTraitName={setActiveTraitName}
          />
          <TraitsOption
            activeTrait={activeTrait}
            activeTraitName={activeTraitName}
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
          <Flex
            direction={{ base: "column", md: "row-reverse", lg: "row" }}
            width={{ base: "100%", md: "100%", lg: "60%" }}
          >
            <Canvas
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
              stageRef={stageRef}
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
              stageRef={stageRef}
            />
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
