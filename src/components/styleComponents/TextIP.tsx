import { ReactNode } from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface IPProps extends TextProps {
  children?: ReactNode;
}

const TextIP = ({ children, ...props }: IPProps) => {
  return (
    <Text
      textAlign="center"
      color="VeryDarkGray"
      fontSize={{ base: "20px", lg: "26px" }}
      fontWeight="bold"
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextIP;
