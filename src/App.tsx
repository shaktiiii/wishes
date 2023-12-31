import { useWeb3Modal } from "@web3modal/wagmi/react";
import "./App.css";
import GoodMorning from "./page/GoodMorning"
import HappyNewYear from "./page/HappyNewYear";


function App() {
  const { open } = useWeb3Modal();

  return (
    <div className="h-screen w-screen">
    <GoodMorning/>
    {/* <HappyNewYear /> */}
  </div>
  );
}

export default App;
