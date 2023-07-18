import { Box } from '@chakra-ui/react';
import { MyStyledText } from './Text';

export function ConnectWallet() {
    return (
        <Box
            display="flex"
            width="199.111px"
            height="58px"
            padding="13px 31px"
            ml={12}
            alignItems="flex-start"
            gap="75px"
            flexShrink={0}
            borderRadius="24px"
            background="#5FC95D"
            boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
        >
            <MyStyledText>CONNECT WALLET</MyStyledText>
        </Box>
    );
}