import { ReactNode } from "react";
import { GridItem, GridItemProps } from "@chakra-ui/react";

interface IPProps extends GridItemProps {
  children?: ReactNode;
  index?: number;
}

const GridIP = ({ children, index, ...props }: IPProps) => {
  return (
    <GridItem
      borderLeft={{ lg: `${index !== 0 ? "1px solid #979797" : "none"}` }}
      _first={{ borderLeft: "none" }}
      pl={{ lg: "34px" }}
      ml={{ lg: "24px" }}
      {...props}
    >
      {children}
    </GridItem>
  );
};

export default GridIP;
