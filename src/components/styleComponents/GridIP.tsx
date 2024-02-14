import { ReactNode } from "react";
import { Grid, GridProps } from "@chakra-ui/react";

interface IPProps extends GridProps {
  children?: ReactNode;
}

const GridIP = ({ children, ...props }: IPProps) => {
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
      justifyContent="center"
      justifyItems="center"
      bg="white"
      borderRadius="15px"
      boxShadow="sm"
      position="absolute"
      py={{ base: "25px", lg: "36px" }}
      px={{ base: "20px", lg: "30px" }}
      top="-80px"
      left="50%"
      transform="translateX(-50%)"
      minH="161px"
      w={{ base: "327px", lg: "1110px" }}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default GridIP;
