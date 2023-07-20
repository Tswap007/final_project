import { Flex, Image, Text } from '@chakra-ui/react';
import { Divider } from './Divider';
import Noise from '../../bg/noise.svg';
import { Cloud } from '../Header/Cloud';
import Cloud2 from '../assets/cloud2.svg';
import { MyStyledBodyText } from './Text';
import Background from '../assets/s1bg.svg'
import { SectionImage } from './SectionImage';
import textTop from '../assets/texttop.svg';


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
                height="762px"
            >
                <Divider />
                <Cloud src={Cloud2} position='absolute' mt='13.58px' right='363px' top='5px' />
                <MyStyledBodyText position="absolute" mt="273px" pl="40px" >
                    <Image src={textTop} w='222px' h='50px' pl={70} />
                    <Text>Lorem ipsum dolor sit amet, consectetur</Text>
                    <Text>adipiscing elit, sed do eiusmod tempor </Text>
                    <Text>incididunt ut labore et dolore magna aliqua.</Text>
                    <Text>Ut enim ad minim veniam, quis nostrud </Text>
                    <Text>exercitation ullamco laboris nisi ut </Text>
                    <Text>aliquip ex ea commodo consequat. Duis </Text>
                    <Text>aute irure dolor in reprehenderit in voluptate </Text>
                    <Text>velit esse cillum dolore eu fun.</Text>
                </MyStyledBodyText>
                <SectionImage />
            </Flex>
        </>
    );
}