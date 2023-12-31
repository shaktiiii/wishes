import "./App.css";
import HappyNewYear from "./components/buttons/HappyNewYear";
import GoodMorning from "./components/buttons/GoodMorning";

import desktopVideo from "./assets/videos/desktop.mp4";
import mobileVideo from "./assets/videos/mobile.mp4";
import { useEffect, useState } from "react";

function App() {
  // Effect to update isUserOnMobile when the screen size changes

  return (
    <>
      <div className="flex gap-5 h-screen w-screen justify-center items-center ">
        <HappyNewYear />
        <GoodMorning />
      </div>
      <div className="forBg h-screen w-screen">
        <div className="mobile">
          <video
            autoPlay
            muted
            loop
            id="video-bg"
            className="h-full object-cover w-full"
          >
            <source src={mobileVideo} type="video/mp4" />
          </video>
        </div>
        <div className="desktop">
          <video
            autoPlay
            muted
            loop
            id="video-bg"
            className="h-full object-cover w-full"
          >
            <source src={desktopVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default App;
