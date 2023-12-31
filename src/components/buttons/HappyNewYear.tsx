import { useAccount, useContractWrite } from "wagmi";
import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { useSwitchNetwork, useWaitForTransaction } from "wagmi";
import { polygonMumbai } from "wagmi/chains";

import {
  HappyNewYearABI,
  HappyNewYearAddress,
} from "../../lib/ABI/HappyNewYearToken";

const HappyNewYear = () => {
  const amountToMintOnEachGreet = 69;

  const { address } = useAccount();

  const { open } = useWeb3Modal();
  const { selectedNetworkId } = useWeb3ModalState();

  const { switchNetwork } = useSwitchNetwork({
    onSuccess() {
      handleButtonClick();
    },
  });

  const happyNewYearToken: any = {
    address: HappyNewYearAddress,
    abi: HappyNewYearABI,
  };

  const { data, write } = useContractWrite({
    ...happyNewYearToken,
    functionName: "mint",
  });

  const waitForTransaction = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data) {
      console.log("Transaction Was Sucessful & Btw Happy NewYear", data); // function called here will be called after the transaction is sucessful.
    },
  });

  const handleButtonClick = async () => {
    if (Number(selectedNetworkId) === 80001) {
      write({
        args: [amountToMintOnEachGreet],
      });
    } else {
      switchNetwork?.(polygonMumbai.id);
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
            switchNetwork?.(polygonMumbai.id);
          }
        }}
        className="border-2 border-black w-[12em]  outline-none px-4 py-2 rounded-md"
      >
        Happy New Year
      </button>
    </>
  );
};

export default HappyNewYear;