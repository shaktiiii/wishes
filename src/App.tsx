import "./App.css";
import HappyNewYearButton from "./components/buttons/HappyNewYear";
import GoodMorningButton from "./components/buttons/GoodMorning";

import GoodMorning from "./page/GoodMorning";
import HappyNewYear from "./page/HappyNewYear";

import desktopVideo from "./assets/videos/desktop.mp4";
import mobileVideo from "./assets/videos/mobile.mp4";

function App() {
  // Effect to update isUserOnMobile when the screen size changes

  return (
    <>
      <div className="flex flex-col gap-20 h-screen w-screen justify-center items-center ">
        <p className="p-4 text-center text-4xl font-bold tracking-wide">Click any button to redeem token!!</p>
        <div className="flex md:flex-row flex-col  gap-10 ">

        <GoodMorningButton />
        <HappyNewYearButton />
        </div>
      </div>
      {/* <div className="h-screen w-screen">
        <GoodMorning /> */}
        {/* <HappyNewYear /> */}
      {/* </div> */}
      {/* /// This is just to refer the responsive design */}
      {/* <div className="forBg h-screen w-screen">
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
      </div> */}
    </>
  );
}

export default App;
