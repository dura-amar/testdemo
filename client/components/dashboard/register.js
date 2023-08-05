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
       <div className="container " style={{
        display:"flex",
       }}>
       <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex" >
            <button
              className="fugu--btn fugu--menu-btn1"
			  onClick={registerStudent}
            >
              Student
            </button>
          </div>
          <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex" >
            <button
              className="fugu--btn fugu--menu-btn1"
			  onClick={registerIssuer}
            >
              Issuer
            </button>
          </div>
       </div>
    </>
  );
}
