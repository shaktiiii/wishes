import { useWeb3Modal } from "@web3modal/wagmi/react";
import React, { useState } from "react";
import sun from "/sun.png";
import moon from "/moon3.png";
import cloud from "/cloud.png";
import "./App.css";
import Snow from "./Snow.jsx";
import Firework from "./Firework.jsx";

function App() {
  const { open } = useWeb3Modal();
  const [day, setDay] = useState(true);

  const handleButtonClick = () => {
    // Toggle between CSS classNamees or update styles based on your requirement
    setDay(!day);
  };

  return (
    <div className={`h-screen w-screen main  ${day ? "bg fade-in" : "bgtwo"}`}>
      {!day && <Firework />}

      {!day && <Snow />}

      <div id="jsi-fireworks-container" className="container"></div>

      <img
        src={day ? sun : moon}
        className={`absolute h-[10em] md:h-[12em] top-[10%] ${
          day
            ? "right-[30%] animate-moveSunIn "
            : "right-[30%]  animate-moveSunOut"
        } z-10 transition-transform`}
        alt="moon"
      />
      <img
        src={cloud}
        className="absolute h-[12em] md:h-[18em] top-[2%] right-[5%]"
        alt="cloud"
      />
      <img
        src={cloud}
        className="absolute h-[12em] md:h-[18em] top-[15%] right-[30%]"
        alt="cloud"
      />
      <img
        src={cloud}
        className="absolute h-[12em] md:h-[18em] top-[15%] right-[70%]"
        alt="cloud"
      />
      <p
        className={`${
          day ? "text-blue-950" : "text-white"
        } absolute top-1/2 w-full text-center px-4 font-bold text-6xl tracking-wide`}
      >
        {day ? "GOOD MORNING" : "HAPPY NEW YEAR, 2024"}
      </p>

      <div className=" flex gap-4 absolute mx-auto top-[70%] right-1/2 translate-x-1/2 text-white">
        <button
          onClick={handleButtonClick}
          className="border w-[10em] border-white outline-none px-4 py-2 rounded-md "
        >
          Good Morning
        </button>
        <button
          onClick={() => {
            open();
          }}
          className="border w-[10em] border-white outline-none px-4 py-2 rounded-md"
        >
          Happy New Year
        </button>
      </div>
    </div>
  );
}

export default App;
