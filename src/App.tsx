import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IPInformation from "./components/IPInformation";
import Map from "./components/Map";
import useFetchIPdata from "./hooks/useFetchIPdata";

function App() {
  const [address, setAddress] = useState<string>("");

  const { ipDetection, isLoading, error } = useFetchIPdata(address);

  return (
    <>
      <Header
        address={(newAddress: string) => setAddress(newAddress)}
        isLoading={isLoading}
      />
      {ipDetection && <IPInformation ipDetection={ipDetection} />}
      <Map ip={ipDetection?.ip} />
    </>
  );
}

export default App;
