import { Grid } from "@chakra-ui/react";

interface Props {
  address: string;
}

const IPInformation = ({ address }: Props) => {
  return <Grid>{address}</Grid>;
};

export default IPInformation;
