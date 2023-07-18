import { Box, Link } from '@chakra-ui/react';
import { MyStyledText } from './Text';

export function NavLink() {
    return (
        <Box
            display="flex"
            width="696px"
            height="58px"
            padding="13px 15px"
            alignItems="center"
            justifyContent="center"
            gap="75px"
            flexShrink={0}
            borderRadius="24px"
            background="#FFF"
            boxShadow="6px 7px 0px 0px rgba(0, 0, 0, 0.8)"
        >
            <Link><MyStyledText>HOME</MyStyledText></Link>
            <Link><MyStyledText>COMPOSE AND MINT</MyStyledText></Link>
            <Link><MyStyledText>VOTE OR PROPOSE</MyStyledText></Link>
            <Link isExternal><MyStyledText>EXPLORE</MyStyledText></Link>
        </Box>
    );
}


