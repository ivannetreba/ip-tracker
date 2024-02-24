import { ReactNode } from "react";
import { Grid, GridProps } from "@chakra-ui/react";

interface IPProps extends GridProps {
  children?: ReactNode;
}

const IPInformationGrid = ({ children, ...props }: IPProps) => {
  return (
    <Grid
      templateAreas={{
        base: `"ipaddress" "location" "timezone" "isp"`,
        xl: `"ipaddress location timezone isp"`,
      }}
      templateColumns={{
        base: "327px",
        xl: "1fr 1fr 1fr 1fr",
      }}
      gap="22px"
      justifyContent={{ base: "center", xl: "left" }}
      justifyItems={{ base: "center", xl: "left" }}
      bg="white"
      borderRadius="15px"
      boxShadow="sm"
      position="absolute"
      py={{ base: "25px", xl: "36px" }}
      px={{ base: "20px", xl: "30px" }}
      top="-80px"
      left="50%"
      transform="translateX(-50%)"
      minH="161px"
      w={{ base: "327px", xl: "1110px" }}
      zIndex={10}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default IPInformationGrid;
