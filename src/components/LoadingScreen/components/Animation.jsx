import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Logo from "../../assets/small_LOGO.svg";
import { useBreakpointValue } from "@chakra-ui/react";

const loadingAnimation = keyframes`
  0% {
    transform: perspective(250px) rotateX(0deg) rotateY(0deg);
  }

  15% {
    background-color: #7149C6;
  }

  16% {
    background-color: #7149C6;
  }

  50% {
    transform: perspective(250px) rotateX(180deg) rotateY(0deg);
    background-color: #7149C6;
  }

  65% {
    background-color: #7149C6;
  }

  66% {
    background-color: #7149C6;
  }

  100% {
    transform: perspective(250px) rotateX(180deg) rotateY(-180deg);
  }
`;

const LoadingContainer = styled.div`
  width: ${(props) => props.width};
  height: auto;
  display: block;
  margin: 10px;
`;

const Symbol = styled.div`
  background-color: #7149c6;
  padding: 8px;
  animation: ${loadingAnimation} 3s infinite;
  border-radius: 5px;
`;

const LoadingIcon = styled.img`
  display: block;
  max-width: 100%;
  animation: ${loadingAnimation} 3s infinite;
`;

const LoadingImage = () => {
  const width = useBreakpointValue({ base: "80%", md: "50%", lg: "35%" });

  return (
    <LoadingContainer width={width} data-id="Loading container">
      <Symbol>
        <LoadingIcon src={Logo} />
      </Symbol>
    </LoadingContainer>
  );
};

const loadingAnimationTwo = keyframes`
0% {
  transform: perspective(250px) rotateX(0deg) rotateY(0deg);
}

15% {
  background-color: #4caf50;
}

16% {
  background-color: #b44646;
}

50% {
  transform: perspective(250px) rotateX(180deg) rotateY(0deg);
  background-color: #b44646;
}

65% {
  background-color: #b44646;
}

66% {
  background-color: #4caf50;
}

100% {
  transform: perspective(250px) rotateX(180deg) rotateY(-180deg);
}
`;

const LoadingContainerTwo = styled.div`
  width: ${(props) => props.width};
  height: auto;
  display: block;
  margin: 10px;
`;

const SymbolTwo = styled.div`
  background-color: #4caf50;
  padding: 8px;
  animation: ${loadingAnimationTwo} 3s infinite;
  border-radius: 5px;
`;

const LoadingIconTwo = styled.img`
  display: block;
  max-width: 100%;
  animation: ${loadingAnimationTwo} 3s infinite;
`;

export const LoadingImageTwo = () => {
  const width = useBreakpointValue({ base: "80px", md: "100px", lg: "100px" });

  return (
    <LoadingContainerTwo width={width} data-id="Loading containertwo">
      <SymbolTwo>
        <LoadingIconTwo src={Logo} />
      </SymbolTwo>
    </LoadingContainerTwo>
  );
};

export default LoadingImage;
