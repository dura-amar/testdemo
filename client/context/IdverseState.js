// context/AppContext.js
import { useState } from "react";

import IdverseContext from "./IdverseContext";
import Web3 from "web3";
import NFTicketContract from "../blockchain/NFTicket"
import pflContract from "../blockchain/Portfolio"

export default function IdverseState({ children }) {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [web3js, setWeb3js] = useState(null);
  const [nfticket, setnfticket] = useState(null);
  const [pflcontract, setpflContract] = useState(null);
  const [userType, setUserType] = useState(null);
  const [isStudent, setIsStudent] = useState(null);

  const connectWallet = async () => {
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3js = new Web3(window.ethereum);
        setWeb3js(web3js);
        const accounts = await web3js.eth.getAccounts();
        setCurrentAccount(accounts[0]);
        console.log("Connected: ", accounts[0])
        setIsConnected(true);
        const nfticket=NFTicketContract(web3js)
        setnfticket(nfticket)
        const pflcontract=pflContract(web3js)
        setpflContract(pflcontract)
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
        web3js,
        nfticket,
        userType,
        setUserType,
        pflcontract,
        setIsStudent
      }}
    >
      {children}
    </IdverseContext.Provider>
  );
}
