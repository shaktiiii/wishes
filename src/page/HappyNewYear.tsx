import GoodMorning from "../components/buttons/GoodMorning";
import night from "/nightpc.mp4";

export default function HappyNewYear() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        id="video-bg"
        className="h-full object-cover w-full"
      >
        <source src={night} type="video/mp4" />
      </video>
      <p className="text-white absolute top-1/2 w-full text-center px-4 font-bold text-6xl tracking-wide">
        HAPPY NEW YEAR
      </p>
      <div className=" flex gap-4 absolute mx-auto top-[70%] right-1/2 translate-x-1/2 text-white">
        <GoodMorning />
        <button className="border w-[10em] border-white outline-none whitespace-nowrap  font-bold text-lg px-6 py-8 rounded-md">
          Happy New Year
        </button>
      </div>
    </>
  );
}
