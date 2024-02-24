import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IPInformation from "./components/IPInformation";
import Map from "./components/Map";
import useFetchIPdata from "./hooks/useFetchIPdata";
import IPNotFound from "./components/IPNotFound";

function App() {
  const [address, setAddress] = useState<string | null>(null);

  const { ipDetection, isLoading, error } = useFetchIPdata(address);

  return (
    <>
      <Header
        address={(newAddress: string) => setAddress(newAddress)}
        isLoading={isLoading}
        error={error}
      />
      {!error && <IPInformation ipDetection={ipDetection} />}
      {!error ? <Map ipDetection={ipDetection} /> : <IPNotFound />}
    </>
  );
}

export default App;
