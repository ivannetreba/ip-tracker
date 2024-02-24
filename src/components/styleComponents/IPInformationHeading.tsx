import { ReactNode } from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface IPProps extends HeadingProps {
  children?: ReactNode;
}

const IPInformationHeading = ({ children, ...props }: IPProps) => {
  return (
    <Heading
      textAlign={{ base: "center", xl: "left" }}
      textTransform="uppercase"
      color="DarkGray"
      fontSize={{ base: "10px", xl: "12px" }}
      mb="7px"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default IPInformationHeading;
