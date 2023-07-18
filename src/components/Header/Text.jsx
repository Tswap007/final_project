import { Text } from "@chakra-ui/react";

export function MyStyledText({ children, ...rest }) {
    return (
        <Text
            color="var(--labels, #000)"
            textAlign="center"
            fontFamily="Amatic SC"
            fontSize={['16px', '20px', '24px']}
            fontStyle="normal"
            fontWeight={700}
            lineHeight="normal"
            letterSpacing="2.21px"
            textTransform="uppercase"
            {...rest}
        >
            {children}
        </Text>
    );
}
