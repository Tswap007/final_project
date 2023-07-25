import Sections from "./Sections";

import S1Image from "../assets/s1bg.svg"
import S1Overlay from "../assets/s1overlay.svg"
import S2Image from "../assets/s2bg.svg"
import S2Overlay from "../assets/s2overlay.svg"
import S3Image from "../assets/s3bg.svg"
import S3Overlay from "../assets/s3overlay.svg"

import S2cloud from "../assets/s2Cloud.svg"
import S3cloud from "../assets/s3Cloud.svg"

export default function Body() {

    const sectionOne = {
        sectionImage: S1Image,
        sectionOverlayImage: S1Overlay,
        header: 'CUSTOMIZE',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fun',
        buttonText: 'COMPOSE AND MINT',
        to: "/",
        bg: "#7C89FF",
        left: "43%"
    };

    const sectionTwo = {
        sectionImage: S2Image,
        sectionOverlayImage: S2Overlay,
        header: 'Govern',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fun',
        buttonText: 'Vote Or Propose',
        to: "/",
        bg: "#F3EAC6",
        left: "39%"
    };

    const sectionThree = {
        sectionImage: S3Image,
        sectionOverlayImage: S3Overlay,
        header: 'HAVE FUN',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fun',
        buttonText: 'EXPLORE COLLECTION',
        to: "/",
        bg: "#70EC6E",
        left: "39%"
    };

    return (
        <>
            <Sections
                header={sectionOne.header}
                description={sectionOne.description}
                buttonText={sectionOne.buttonText}
                to={sectionOne.to}
                sectionImage={sectionOne.sectionImage}
                sectionOverlayImage={sectionOne.sectionOverlayImage}
                zIndex={3}
                direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
                bg={sectionOne.bg}
                pt={{ base: 10, md: 0 }}
                left={sectionOne.left}
            />
            <Sections
                header={sectionTwo.header}
                description={sectionTwo.description}
                buttonText={sectionTwo.buttonText}
                to={sectionTwo.to}
                sectionImage={sectionTwo.sectionImage}
                sectionOverlayImage={sectionTwo.sectionOverlayImage}
                zIndex={2}
                direction={{ base: "column-reverse", md: "column-reverse", lg: "row-reverse" }}
                bg={sectionTwo.bg}
                pt={75}
                left={sectionTwo.left}
                cloudSrc={S2cloud}
                cloudTop={4}
                cloud2Top={8}
                cloudLeft="2%"
                cloud2Left="33%"
            />
            <Sections
                header={sectionThree.header}
                description={sectionThree.description}
                buttonText={sectionThree.buttonText}
                to={sectionThree.to}
                sectionImage={sectionThree.sectionImage}
                sectionOverlayImage={sectionThree.sectionOverlayImage}
                zIndex={1}
                direction={{ base: "column-reverse", md: "column-reverse", lg: "row" }}
                bg={sectionThree.bg}
                pt={75}
                left={sectionThree.left}
                cloudSrc={S3cloud}
                cloudTop={4}
                cloud2Top={8}
                cloudRight="2%"
                cloud2Right="33%"

            />
        </>
    )
}