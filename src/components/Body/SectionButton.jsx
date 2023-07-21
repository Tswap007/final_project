import { Box, Text } from "@chakra-ui/react";
import { LinkAnimation } from "../Header/LinkAnimation";

export function SectionButton() {
    return (
        <>
            <LinkAnimation>
                <Box alignItems='center' bg={"white"} h='118px' w='373px'
                    borderRadius='186px/59px' display='flex'
                    justifyContent='center' alignContent='center'
                    boxShadow="6px 12px 6px #00000040">
                    <Box alignItems='center' bg='#f18878' h='96px' w='317px'
                        borderRadius='186px/59px' display='flex' flexDir='row'
                        justifyContent='center' alignContent='center' border='1px solid' borderColor='black'>
                        <Text textAlign="center"
                            fontFamily="Amatic SC"
                            fontSize={['16px', '20px', '24px']}
                            fontStyle="normal"
                            fontWeight={700}
                            lineHeight="normal"
                            letterSpacing="2.21x"
                            textTransform="uppercase">COMPOSE AND MINT</Text>
                    </Box>
                </Box >
            </LinkAnimation>
        </>
    )
}