import { Box, Flex, Image, IconButton, Text, AbsoluteCenter, Link } from "@chakra-ui/react";
import { TopBar } from "./TraitsOption";
import { BsFillTrashFill } from 'react-icons/bs';
import { motion } from "framer-motion";
import { useNetwork, useAccount } from "wagmi";
import { useState, useEffect } from "react";
import MintButton from "./Mint";

function SelectedTraits({ path, label, onClick, setter }) {
    return (
        <Box
            justifyContent="space-between"
            w="100%"
            h="auto"
            display="flex"
            alignItems="center" // Center the content vertically
            mb={2}
            pb={2}
            borderBottomWidth="0.5px"
        >
            <Box display="flex" alignItems="center">
                <Box bg="gray.200" borderRadius="10px">
                    <Image src={path} alt={label} width="50px" height="50px" borderRadius="10px" />
                </Box>
                <Box ml={2}> {/* Added a margin-left of 2 for space between image and text */}
                    <Text fontWeight={700}>
                        {label}
                    </Text>
                </Box>
            </Box>
            <Box>
                <IconButton
                    aria-label="Delete"
                    icon={<BsFillTrashFill />}
                    onClick={() => onClick({ setter })}// words now to make it modular
                    color="red"
                    bg="red.100"
                    borderRadius={20}
                />
            </Box>
        </Box>
    );
}


export function checkIfAnyTraitSelected(selectedTraits) {
    return selectedTraits.some((selected) => selected.path);
}

function SelectedTraitsList({ selectedTraits, onClick }) {

    const shouldRenderList = checkIfAnyTraitSelected(selectedTraits);

    // Conditionally render the list or the EmptyPageInfo
    return (
        <Flex flexWrap="wrap" padding={2}>
            {shouldRenderList ? (
                selectedTraits.map((selected, index) => {
                    if (selected.path) {
                        return <SelectedTraits key={index} path={selected.path} label={selected.label} onClick={onClick} setter={selected.setter} />;
                    }
                    return null;
                })
            ) : (<AbsoluteCenter><EmptyPageInfo /></AbsoluteCenter>)}
        </Flex>
    );
}


function EmptyPageInfo() {
    return (
        <Box align="center" w="100%" fontSize="25px" fontWeight={700} mb={10}>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 0, -5] }}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                <Text>Your Wanderer Awaits!</Text>
            </motion.div>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [5, 0, 5] }}
                transition={{ repeat: Infinity, duration: 1 }}
            >
                <Text whiteSpace="nowrap">Select an Item to Begin!!</Text>
            </motion.div>
        </Box>
    );
}



export default function Selected({
    setActiveBackground,
    setActiveBody,
    setActiveFace,
    setActiveHead,
    setActivePet,
    activeBackground,
    activeBody,
    activeFace,
    activeHead,
    activePet,
    stageRef
}
) {

    // Combine the selected traits objects into an array
    const selectedTraits = [
        { path: activeBackground.path, label: activeBackground.label, setter: setActiveBackground },
        { path: activeBody.path, label: activeBody.label, setter: setActiveBody },
        { path: activeHead.path, label: activeHead.label, setter: setActiveHead },
        { path: activeFace.path, label: activeFace.label, setter: setActiveFace },
        { path: activePet.path, label: activePet.label, setter: setActivePet },
    ];

    function clearSelection({ setter }) {
        setter({});
    }

    const {chain} = useNetwork();
    const {isConnected} = useAccount();
    const [nativeCurrency, setNativeCurrency] = useState({});
    const [currentLink, setCurrentLink] = useState("");

    useEffect(() => {
        function getFaucetLink() {
            const sepoliaLink = 'https://sepoliafaucet.com/';
            const arbGoerlLink = 'https://faucet.quicknode.com/arbitrum/goerli';
            const mumbaiLink = 'https://mumbaifaucet.com/';
            setNativeCurrency(chain.nativeCurrency);

            if (chain.name === 'Sepolia') {
                setCurrentLink(sepoliaLink);
            } else if (chain.name === 'Arbitrum Goerli') {
                setCurrentLink(arbGoerlLink);
            } else if (chain.name === 'Polygon Mumbai') {
                setCurrentLink(mumbaiLink);
            }
        }
    
        // Call the function when the dependency (chain.name) changes
        if(chain !== undefined) {
            getFaucetLink();
        }
    }, [chain]);

    return (
        <Box
            as="aside"
            position="relative"
            flex={1}
            bg={"white"}
            minH={40}
        >
            <TopBar flex={1} display={{ base: "none", md: "block" }} bg={"white"} textColor={"black"}>Selected Traits</TopBar>
            <SelectedTraitsList selectedTraits={selectedTraits} onClick={clearSelection} />
            <MintButton selectedTraits={selectedTraits} stageRef={stageRef} />
            <Box 
            paddingY={4}
            >
            { isConnected ?
             <Text
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                textAlign="center"
                paddingY={2}
                fontWeight={600}
            >
            No {nativeCurrency.name} ? Don't sweat. Get some <Link href={currentLink} color={"blue.500"} isExternal>here</Link>...
            </Text> : null }
            </Box>
        </Box>
    )

}

