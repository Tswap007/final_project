import { Text } from "@chakra-ui/react";

export function MyStyledBodyText({ children, ...rest }) {
    return (
        <Text
            color="var(--labels, #000)"
            textAlign="left"
            fontFamily="Amatic SC"
            fontSize={['14px', '18px', '22px']}
            fontStyle="normal"
            fontWeight={700}
            lineHeight="normal"
            letterSpacing="2.21px"
            textTransform="lowercase"
            {...rest}
        >
            {children}
        </Text>
    );
}
