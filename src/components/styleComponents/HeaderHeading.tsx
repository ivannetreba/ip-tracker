import { ReactNode } from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface IPProps extends HeadingProps {
  children?: ReactNode;
}

const HeaderHeading = ({ children, ...props }: IPProps) => {
  return (
    <Heading
      as="h1"
      fontSize={["26px", null, "32px"]}
      margin="auto"
      mt={["26px", null, "33px"]}
      mb="7px"
      color="white"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default HeaderHeading;
