import { useWeb3Modal } from "@web3modal/wagmi/react";

import "./App.css";

function App() {
  const { open } = useWeb3Modal();
  return (
    <>
      <div className="flex flex-col gap-5 h-screen w-screen justify-center items-center ">
        <button className="border w-[10em] border-black outline-none px-4 py-2 rounded-md ">
          Good Morning
        </button>

        <button
          onClick={() => {
            open();
          }}
          className="border w-[10em] border-black outline-none px-4 py-2 rounded-md"
        >
          Happy NewYear
        </button>
      </div>
    </>
  );
}

export default App;
