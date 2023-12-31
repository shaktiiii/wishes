import sunny from "/daypc.mp4";
import HappyNewYear from "../components/buttons/HappyNewYear";

export default function GoodMorning() {
  return (
    <div className="h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        id="video-bg"
        className="h-full object-cover w-full "
      >
        <source src={sunny} type="video/mp4" />
      </video>
      <p className="text-blue-950 absolute top-1/2 w-full text-center px-4 font-bold text-6xl tracking-wide">
        GOOD MORNING
      </p>
      <div className=" flex  md:flex-row flex-col  gap-4 absolute mx-auto top-[70%] right-1/2 translate-x-1/2 text-white">
        <button
          // onClick={handleButtonClick}
          className="border p-4 w-[14em] border-white font-bold text-lg outline-none px-6 py-8 rounded-md"
        >
          Good Morning
        </button>
        <HappyNewYear/>
      </div>
      <div className="absolute bottom-0 p-2 border-t-2 w-full text-center text-blue-950 border-white font-semibold">
          <p>Made with 💝  by Shakti Dubey and Sandeep Prajapati.</p>
        </div>
    </div>
  );
}
