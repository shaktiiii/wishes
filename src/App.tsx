import "./App.css";
import HappyNewYearButton from "./components/buttons/HappyNewYear";
import GoodMorningButton from "./components/buttons/GoodMorning";

function App() {
  return (
    <>
      <div className="flex flex-col gap-20 h-screen w-screen justify-center items-center ">
        <p className="p-4 text-center text-4xl font-bold tracking-wide">
          Click any button to redeem token!!
        </p>
        <div className="flex md:flex-row flex-col  gap-10 ">
          <GoodMorningButton />
          <HappyNewYearButton />
        </div>
        <div className="absolute bottom-0 p-2 border-t-2 w-full text-center  border-black font-semibold">
          <p>Made with 💝  by Shakti Dubey and Sandeep Prajapati.</p>
        </div>
      </div>
    </>
  );
}

export default App;
