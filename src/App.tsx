import "./App.css";
import HappyNewYearButton from "./components/buttons/HappyNewYear";
import GoodMorningButton from "./components/buttons/GoodMorning";

function App() {
  return (
    <>
      <div className="flex flex-col gap-20 h-screen w-screen justify-center items-center ">
        <p className=" text-4xl font-bold tracking-wide">
          Click any button to redeme token!!
        </p>
        <div className="flex gap-10 ">
          <GoodMorningButton />
          <HappyNewYearButton />
        </div>
      </div>
    </>
  );
}

export default App;
