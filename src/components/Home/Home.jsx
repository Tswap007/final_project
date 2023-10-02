import Sections from "./components/Sections";

import S1Image from "../assets/s1bg.svg";
import S1Overlay from "../assets/s1overlay.png";
import S2Image from "../assets/s2bg.svg";
import S2Overlay from "../assets/s2overlay.png";
import S3Image from "../assets/s3bg.svg";
import S3Overlay from "../assets/s3overlay.png";

import S2cloud from "../assets/s2Cloud.svg";

export default function Home() {
  const sectionOne = {
    sectionImage: S1Image,
    sectionOverlayImage: S1Overlay,
    header: "CUSTOMIZE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fun",
    buttonText: "COMPOSE AND MINT",
    to: "/mint",
    bg: "#7149C6",
    left: "43%",
  };

  const sectionTwo = {
    sectionImage: S2Image,
    sectionOverlayImage: S2Overlay,
    header: "Govern",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fun",
    buttonText: "Vote Or Propose",
    to: "/governance",
    bg: "#7149C6", // previous F3EAC6
    left: "39%",
    isDropDown: true,
    menuLinkOne: "https://www.tally.xyz/gov/wonderland-wanderers-sepolia-dao",
    menuLinkTwo:
      "https://www.tally.xyz/gov/wonderland-wanderers-arbitrum-goerli-dao",
    menuLinkThree:
      "https://www.tally.xyz/gov/wonderland-wanderers-polygon-mumbai-dao",
    menuTextOne: "Sepolia DAO",
    menuTextTwo: "Arbitrum Goerli DAO",
    menuTextThree: "Polygon Mumbai DAO",
  };

  const sectionThree = {
    sectionImage: S3Image,
    sectionOverlayImage: S3Overlay,
    header: "HAVE FUN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fun",
    buttonText: "EXPLORE COLLECTION",
    to: "https://opensea.io",
    bg: "#7149C6", // previous 70EC6E
    left: "39%",
    isDropDown: true,
    menuLinkOne:
      "https://testnets.opensea.io/collection/wonderland-wanderers-14",
    menuLinkTwo:
      "https://testnets.opensea.io/collection/wonderland-wanderers-15",
    menuLinkThree:
      "https://testnets.opensea.io/collection/wonderland-wanderers-16",
    menuTextOne: "Sepolia",
    menuTextTwo: "Arbitrum Goerli",
    menuTextThree: "Polygon Mumbai",
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
        pt={{ base: 10, md: 20 }}
        left={sectionOne.left}
        isExternal={sectionOne.isExternal}
        cloudSrc={S2cloud}
        cloudTop={4}
        cloud2Top={8}
        cloudRight="2%"
        cloud2Right="33%"
      />
      <Sections
        header={sectionTwo.header}
        description={sectionTwo.description}
        buttonText={sectionTwo.buttonText}
        to={sectionTwo.to}
        sectionImage={sectionTwo.sectionImage}
        sectionOverlayImage={sectionTwo.sectionOverlayImage}
        zIndex={2}
        direction={{
          base: "column-reverse",
          md: "column-reverse",
          lg: "row-reverse",
        }}
        bg={sectionTwo.bg}
        pt={75}
        left={sectionTwo.left}
        cloudSrc={S2cloud}
        cloudTop={4}
        cloud2Top={8}
        cloudLeft="2%"
        cloud2Left="33%"
        animationDirection="left"
        isExternal={sectionTwo.isExternal}
        isDropDown={sectionTwo.isDropDown}
        menuLinkOne={sectionTwo.menuLinkOne}
        menuLinkTwo={sectionTwo.menuLinkTwo}
        menuLinkThree={sectionTwo.menuLinkThree}
        menuTextOne={sectionTwo.menuTextOne}
        menuTextTwo={sectionTwo.menuTextTwo}
        menuTextThree={sectionTwo.menuTextThree}
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
        cloudSrc={S2cloud}
        cloudTop={4}
        cloud2Top={8}
        cloudRight="2%"
        cloud2Right="33%"
        isExternal={sectionThree.isExternal}
        isDropDown={sectionThree.isDropDown}
        menuLinkOne={sectionThree.menuLinkOne}
        menuLinkTwo={sectionThree.menuLinkTwo}
        menuLinkThree={sectionThree.menuLinkThree}
        menuTextOne={sectionThree.menuTextOne}
        menuTextTwo={sectionThree.menuTextTwo}
        menuTextThree={sectionThree.menuTextThree}
      />
    </>
  );
}
