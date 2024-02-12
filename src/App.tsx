import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import IPInformation from "./components/IPInformation";
import Map from "./components/Map";

function App() {
  const [address, setAddress] = useState("");

  return (
    <>
      <Header address={(newAddress: string) => setAddress(newAddress)} />
      {address}
      <IPInformation address={address} />
      <Map address={address} />
    </>
  );
}

export default App;
