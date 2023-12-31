import "./App.css";
import HappyNewYear from "./components/buttons/HappyNewYear";
import GoodMorning from "./components/buttons/GoodMorning";

function App() {
  return (
    <>
      <div className="flex gap-5 h-screen w-screen justify-center items-center ">
        <HappyNewYear />
        <GoodMorning />
      </div>
    </>
  );
}

export default App;
