import { ReactNode } from "react";
import { Flex, FlexProps, useBreakpointValue } from "@chakra-ui/react";
import bgImageMobile from "../../assets/images/pattern-bg-mobile.png";
import bgImageDesktop from "../../assets/images/pattern-bg-desktop.png";

interface IPProps extends FlexProps {
  children?: ReactNode;
}

const HeaderContainer = ({ children, ...props }: IPProps) => {
  const bgImage = useBreakpointValue({
    base: `url(${bgImageMobile})`,
    sm: `url(${bgImageDesktop})`,
  });
  return (
    <Flex
      bgImage={bgImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      h="280px"
      flexDirection="column"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default HeaderContainer;
