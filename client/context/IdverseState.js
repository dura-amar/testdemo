// context/AppContext.js
import { useState } from "react";

import IdverseContext from "./IdverseContext";
import Web3 from "web3";
import { provider } from "../pages/api/contractAPI";

export default function IdverseState({ children }) {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let web3js = new Web3(window.ethereum);
        const accounts = await web3js.eth.getAccounts();
        setCurrentAccount(accounts[0]);
        console.log("Connected: ", accounts[0])
        setIsConnected(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <IdverseContext.Provider
      value={{
        currentAccount,
        isConnected,
        connectWallet,
      }}
    >
      {children}
    </IdverseContext.Provider>
  );
}
