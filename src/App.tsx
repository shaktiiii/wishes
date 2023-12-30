import { useWeb3Modal } from "@web3modal/wagmi/react";
import { GoodMorningABI, GoodMorningAddress } from "./lib/ABI/GoodMorningToken";
import { useAccount, useContractWrite } from "wagmi";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { open } = useWeb3Modal();
  const { address: string } = useAccount();
  const [isTxSucessful, setIsTxSucessful] = useState<boolean>(false);

  const goodMorningToken: any = {
    address: GoodMorningAddress,
    abi: GoodMorningABI,
  };

  const { data, isLoading, isSuccess, write } = useContractWrite({
    ...goodMorningToken,
    functionName: "mint",
  });

  const handleClick = () => {
    write({
      args: [69],
    });
  };

  useEffect(() => {
    console.log({ data });


    if (isLoading !== false && isSuccess === true) {
      setIsTxSucessful(true);
      console.log("Transaction is sucessFul");
    }
  }, [isLoading, isSuccess]);

  return (
    <>
      <div className="flex flex-col gap-5 h-screen w-screen justify-center items-center ">
        <button
          onClick={() => {
            handleClick();
          }}
          className="border w-[10em] border-black outline-none px-4 py-2 rounded-md "
        >
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
