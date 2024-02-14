import { ReactNode } from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface IPProps extends HeadingProps {
  children?: ReactNode;
}

const HeadingIP = ({ children, ...props }: IPProps) => {
  return (
    <Heading
      textAlign="center"
      textTransform="uppercase"
      color="DarkGray"
      fontSize={{ base: "10px", lg: "12px" }}
      mb="7px"
      {...props}
    >
      {children}
    </Heading>
  );
};

export default HeadingIP;
