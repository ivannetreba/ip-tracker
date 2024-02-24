import comfusedEmoji from "../assets/images/confused.png";
import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";

const IPNotFound = () => {
  return (
    <Grid justifyItems="center">
      <Box mt="80px" mb=" 43px">
        <Image src={comfusedEmoji} w="64px" />
      </Box>
      <Heading as="h3" fontSize="20px" mb="25px">
        Not Found
      </Heading>
      <Text>
        Sorry, we couldn't find IP for the address you were looking for.
      </Text>
    </Grid>
  );
};

export default IPNotFound;
