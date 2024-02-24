import { ReactNode } from "react";
import { GridItem, GridItemProps } from "@chakra-ui/react";

interface IPProps extends GridItemProps {
  children?: ReactNode;
  index?: number;
}

const IPInformationGridItem = ({ children, index, ...props }: IPProps) => {
  return (
    <GridItem
      borderLeft={{ xl: `${index !== 0 ? "1px solid #979797" : "none"}` }}
      _first={{ borderLeft: "none" }}
      pl={{ xl: "34px" }}
      ml={{ xl: "24px" }}
      {...props}
    >
      {children}
    </GridItem>
  );
};

export default IPInformationGridItem;
