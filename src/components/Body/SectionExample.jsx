import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Divider } from './Divider';
import { DividerR } from './DividerR';
import Noise from '../../bg/noise.svg';
import { Cloud } from '../Header/Cloud';
import Cloud2 from '../assets/cloud2.svg';
import { MyStyledBodyText } from './Text';


export function Section1() {
    return (
        <>
            <Flex
                bg="#7C89FF"
                backgroundImage={Noise}
                position='relative'
                display={{ base: 'block', md: 'flex' }} // Display as block on small screens, flex on medium screens and above
                flexDirection={{ base: 'column', md: 'row' }} // Stack vertically on small screens, align horizontally on medium screens and above
                justifyContent="space-between"
                px={4}
                py={2}
                pl='54px'
                pr={0}
                mt={0}
                height="762px"
            >
                <Box>
                    <Divider />
                    <DividerR />
                </Box>
                <Cloud src={Cloud2} position='absolute' mt='13.58px' right='363px' top='5px' />
                <Box>
                    <MyStyledBodyText position="absolute" mt="273px">
                        <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                        <Text>adipiscing elit, sed do eiusmod tempor </Text>
                        <Text>incididunt ut labore et dolore magna aliqua.</Text>
                        <Text>Ut enim ad minim veniam, quis nostrud </Text>
                        <Text>exercitation ullamco laboris nisi ut </Text>
                        <Text>aliquip ex ea commodo consequat. Duis </Text>
                        <Text>aute irure dolor in reprehenderit in voluptate </Text>
                        <Text>velit esse cillum dolore eu fun.</Text>
                    </MyStyledBodyText>
                </Box>
            </Flex>
        </>
    );
}
