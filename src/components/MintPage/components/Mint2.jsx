import { usePrepareContractWrite, useWaitForTransaction, useContractWrite, useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import abiFile from "./abiFile.json"
import { Button } from "@chakra-ui/react";

const contractAddress = "0x8857244FE8468B0de8826D1e7d7424E8F237A5f7";

function MintButton() {
    const { isConnected } = useAccount();
    const { config } = usePrepareContractWrite({
        //think I'll have to use a use effect hook for this since the config will be prepared on render like this 
        //and the args are not pass in until the uploaImage and get metadata function returns something
        address: contractAddress,
        abi: abiFile,
        functionName: 'safeMint',
        args: ["ipfs://bafyreihajdxtg2ixvngsizv4wlmrll757bp2a6tfz2yfkijoqljg24gdau/metadata.json"]
    })
    const { write, data } = useContractWrite(config)
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    })

    return (
        <Button
            onClick={write?.()}
            isDisabled={isLoading}
        >
            Mint
        </Button>
    )

}