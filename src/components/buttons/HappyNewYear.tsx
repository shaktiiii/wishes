import { useAccount, useContractWrite } from "wagmi";
import { useWeb3Modal, useWeb3ModalState } from "@web3modal/wagmi/react";
import { useSwitchNetwork, useWaitForTransaction } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { useNavigate } from "react-router-dom";

import {
  HappyNewYearABI,
  HappyNewYearAddress,
} from "../../lib/ABI/HappyNewYearToken";

const HappyNewYear = () => {
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
      navigate("/happy-new-year");
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
        className="nightss  border-2 w-[14em] border-black outline-none whitespace-nowrap  font-bold text-lg px-6 py-8 rounded-md text-white"
      >
        Happy New Year
      </button>
    </>
  );
};

export default HappyNewYear;
