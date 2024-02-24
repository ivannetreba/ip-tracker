import React from "react";
import { Input, InputProps } from "@chakra-ui/react";

const SearchInputInput = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <Input
        ref={ref}
        type="text"
        border="none"
        borderRadius="15px"
        bg="white"
        h="58px"
        placeholder="Search for IP address or domain"
        {...props}
      />
    );
  }
);

SearchInputInput.displayName = "SearchInputInput";

export default SearchInputInput;
