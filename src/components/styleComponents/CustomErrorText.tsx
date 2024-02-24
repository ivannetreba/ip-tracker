import { ReactNode } from "react";
import { Text, TextProps } from "@chakra-ui/react";

interface IPProps extends TextProps {
  children?: ReactNode;
}

const CustomErrorText = ({ children, ...props }: IPProps) => {
  return (
    <Text color="red" {...props}>
      {children}
    </Text>
  );
};

export default CustomErrorText;
