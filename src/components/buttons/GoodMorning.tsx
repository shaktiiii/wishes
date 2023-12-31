import { useAccount, useContractWrite } from "wagmi";
import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { useSwitchNetwork, useWaitForTransaction } from "wagmi";
import { polygon } from "wagmi/chains";
import { useNavigate } from "react-router-dom";

import {
  GoodMorningABI,
  GoodMorningAddress,
} from "../../lib/ABI/GoodMorningToken";

const GoodMorning = () => {
  const amountToMintOnEachGreet = 69;
  const navigate = useNavigate();

  const { address } = useAccount();

  const { open } = useWeb3Modal();
  const { selectedNetworkId } = useWeb3ModalState();

  const { switchNetwork } = useSwitchNetwork({
    onSuccess() {
      handleButtonClick();
    },
  });

  const goodMorningToken: any = {
    address: GoodMorningAddress,
    abi: GoodMorningABI,
  };

  const { data, write } = useContractWrite({
    ...goodMorningToken,
    functionName: "mint",
  });

  const waitForTransaction = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      console.log("Transaction Was Sucessful & Btw Happy NewYear", data); // function called here will be called after the transaction is sucessful.
      navigate("/good-morning");
    },
  });

  const handleButtonClick = async () => {
    if (Number(selectedNetworkId) === 80001) {
      write({
        args: [amountToMintOnEachGreet],
      });
    } else {
      switchNetwork?.(polygon.id);
      write({
        args: [amountToMintOnEachGreet],
      });
    }
  };

  return (
    <>
      <button
        onClick={async () => {
          if (address) {
            handleButtonClick();
          } else {
            await open();
            switchNetwork?.(polygon.id);
          }
        }}
        className="dayss  border-2 p-4 w-[14em] border-black font-bold text-lg outline-none px-6 py-8 rounded-md"
      >
        Good Morning
      </button>
    </>
  );
};

export default GoodMorning;
