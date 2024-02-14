import { Box } from "@chakra-ui/react";
import { IPdetection } from "../types/types";
import GridIP from "./styleComponents/GridIP";
import HeadingIP from "./styleComponents/HeadingIP";
import TextIP from "./styleComponents/TextIP";
import GridItemIP from "./styleComponents/GridItemIP";

interface Props {
  ipDetection: IPdetection;
}

const IPInformation = ({ ipDetection }: Props) => {
  const dataIP = [
    {
      area: "ipaddress",
      heading: "IP Address",
      text: ipDetection.ip,
    },
    {
      area: "location",
      heading: "Location",
      text: `${ipDetection.location.city}, ${ipDetection.location.country}`,
    },
    {
      area: "timezone",
      heading: "Timezone",
      text: ipDetection.location.timezone,
    },
    {
      area: "isp",
      heading: "ISP",
      text: ipDetection.isp,
    },
  ];

  return (
    <Box position="relative">
      <GridIP>
        {dataIP.map((item, index) => (
          <GridItemIP index={index} key={index} gridArea={item.area}>
            <HeadingIP>{item.heading}</HeadingIP>
            <TextIP>{item.text}</TextIP>
          </GridItemIP>
        ))}
      </GridIP>
    </Box>
  );
};

export default IPInformation;
