import React from "react";
import idverseContext from "../../context/IdverseContext"
import { useContext } from "react";
export default function Register() {

  const { currentAccount, handleWalletConnect, isConnected, connectWallet,web3js,nfticket,setUserType,pflcontract,setIsStudent } =
    useContext(idverseContext);

  const registerStudent=async()=>{
    if(pflcontract && web3js){
      await pflcontract.methods.registerStudent("Student1","pfp","student@email").send({from:currentAccount});
      const reply=await pflcontract.methods.isStudent(currentAccount).call();
      console.log("ISSTUDNET:",reply);
      setIsStudent(reply);
      setUserType("STUDENT");
    }
  }
  const registerIssuer=()=>{
      console.log("Issuer registration")
  }

  return (
    <>
      <div className="container ">
        <div className="row mt-4 col-md-6">
          <div className="col-md-4 mt-3">
            <button
              className="fugu--btn fugu--menu-btn1"
              onClick={registerStudent}
            >
              Student
            </button>
          </div>
          <div className="col-md-4 mt-3">
            <button
              className="fugu--btn fugu--menu-btn1"
              onClick={registerIssuer}
            >
              Issuer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
