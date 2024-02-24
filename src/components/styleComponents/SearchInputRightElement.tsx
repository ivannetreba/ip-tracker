import { ReactNode } from "react";
import { InputRightElement, InputRightElementProps } from "@chakra-ui/react";

interface IPProps extends InputRightElementProps {
  children?: ReactNode;
}

const SearchInputRightElement = ({ children, ...props }: IPProps) => {
  return (
    <InputRightElement
      bg="black"
      _hover={{ bg: "#3F3F3F" }}
      borderTopRightRadius="15px"
      borderBottomRightRadius="15px"
      h="58px"
      w="58px"
      {...props}
    >
      {children}
    </InputRightElement>
  );
};

export default SearchInputRightElement;
