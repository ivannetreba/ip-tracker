import { ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface IPProps extends BoxProps {
  children?: ReactNode;
}

const SearchInputFormBox = ({ children, ...props }: IPProps) => {
  return (
    <Box
      px="24px"
      m={"auto"}
      mb={["24px", "48px"]}
      w={["375px", null, "555px"]}
      {...props}
    >
      {children}
    </Box>
  );
};

export default SearchInputFormBox;
