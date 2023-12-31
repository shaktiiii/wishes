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
      <div className="flex gap-5 h-screen w-screen justify-center items-center ">
        <HappyNewYearButton />
        <GoodMorningButton />
      </div>
      /// This is just to refer the responsive design
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
      <div className="h-screen w-screen">
        <GoodMorning />
        {/* <HappyNewYear /> */}
      </div>
    </>
  );
}

export default App;
