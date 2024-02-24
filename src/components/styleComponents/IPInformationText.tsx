import { ReactNode } from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface IPProps extends TextProps {
  children?: ReactNode;
}

const IPInformationText = ({ children, ...props }: IPProps) => {
  return (
    <Text
      textAlign={{ base: "center", xl: "left" }}
      color="VeryDarkGray"
      fontSize={{ base: "20px", xl: "26px" }}
      fontWeight="500"
      {...props}
    >
      {children}
    </Text>
  );
};

export default IPInformationText;
