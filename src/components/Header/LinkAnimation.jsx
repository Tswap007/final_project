import { Link, keyframes } from '@chakra-ui/react';

export function LinkAnimation({ children, ...rest }) {
    // Define the animation keyframes
    const bounceAnimation = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  `;

    return (
        <Link href="" _hover={{ animation: `${bounceAnimation} 1s linear infinite` }} {...rest}>
            {children}
        </Link>
    );
}
