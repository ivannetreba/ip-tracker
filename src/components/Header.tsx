import SearchInput from "./SearchInput";
import bgImageMobile from "../assets/images/pattern-bg-mobile.png";
import bgImageDesktop from "../assets/images/pattern-bg-desktop.png";
import { Flex, Heading, useBreakpointValue } from "@chakra-ui/react";

interface Props {
  address: (newAddress: string) => void;
  isLoading: boolean;
}

const Header = ({ address, isLoading }: Props) => {
  const bgImage = useBreakpointValue({
    base: `url(${bgImageMobile})`,
    md: `url(${bgImageDesktop})`,
  });

  return (
    <Flex
      bgImage={bgImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      h="280px"
      flexDirection="column"
    >
      <Heading
        as="h1"
        fontSize={["26px", null, "32px"]}
        margin="auto"
        mt={["26px", null, "33px"]}
        mb="7px"
        color="white"
      >
        IP Address Tracker
      </Heading>
      <SearchInput address={address} isLoading={isLoading} />
    </Flex>
  );
};

export default Header;
