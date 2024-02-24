import { Box } from "@chakra-ui/react";
import { IPdetection } from "../types/types";
import IPInformationGrid from "./styleComponents/IPInformationGrid";
import IPInformationHeading from "./styleComponents/IPInformationHeading";
import IPInformationText from "./styleComponents/IPInformationText";
import IPInformationGridItem from "./styleComponents/IPInformationGridItem";

interface Props {
  ipDetection: IPdetection | null;
}

const IPInformation = ({ ipDetection }: Props) => {
  const dataIP = [
    {
      area: "ipaddress",
      heading: "IP Address",
      text: ipDetection?.ip || "192.212.174.100",
    },
    {
      area: "location",
      heading: "Location",
      text: ipDetection?.location?.city
        ? `${ipDetection?.location?.city}, ${ipDetection?.location?.country}`
        : "South San Gabriel, US",
    },
    {
      area: "timezone",
      heading: "Timezone",
      text: ipDetection?.location?.timezone || "-08:00",
    },
    {
      area: "isp",
      heading: "ISP",
      text: ipDetection?.isp || "Southern California Edison",
    },
  ];

  return (
    <Box position="relative">
      <IPInformationGrid>
        {dataIP.map((item, index) => (
          <IPInformationGridItem index={index} key={index} gridArea={item.area}>
            <IPInformationHeading>{item.heading}</IPInformationHeading>
            <IPInformationText>
              {item.text || "No information"}
            </IPInformationText>
          </IPInformationGridItem>
        ))}
      </IPInformationGrid>
    </Box>
  );
};

export default IPInformation;
