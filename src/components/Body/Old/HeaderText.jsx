import { Text } from '@chakra-ui/react';

function HeaderText(props) {
    return (
        <Text
            color="rgba(0, 0, 0, 0.70)"
            textAlign="center"
            textShadow="4px 4px 4px white"
            fontFamily="Gemunu Libre"
            fontSize="40px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            letterSpacing="15.4px"
            textTransform="uppercase"
            style={{
                WebkitTextStroke: '4px black',
                position: 'relative',
                top: '0',
                left: '0',
                whiteSpace: 'nowrap',
                width: '325px',
                paddingBottom: '10px'
            }}
            {...props}
        />
    );
}

export default HeaderText;

