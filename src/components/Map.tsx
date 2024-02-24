import { Box } from "@chakra-ui/react";
import { IPdetection } from "../types/types";
import useFetchMap from "../hooks/useFetchMap";

interface Props {
  ipDetection: IPdetection | null;
}

const Map = ({ ipDetection }: Props) => {
  const { mapRef } = useFetchMap(
    ipDetection?.location?.lat,
    ipDetection?.location?.lng
  );

  return (
    <Box ref={mapRef} style={{ height: "500px", width: "100%" }} zIndex={1} />
  );
};

export default Map;
