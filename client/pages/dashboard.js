import React, { useEffect } from "react";
import { useContext } from "react";
import StudentDashboard from "../components/dashboard/student/StudentDashboard";
import IssuerDashboard from "../components/dashboard/issuer/IssuerDashboard";
import VerifierDashboard from "../components/dashboard/verifier/VerifierDashboard";
import idverseContext from "../context/IdverseContext";

export default function dashboard() {
  const { currentAccount, handleWalletConnect, isConnected, connectWallet,web3js,nfticket } =
    useContext(idverseContext);

  useEffect(()=>{
    if(web3js && nfticket){
      checkUser(currentAccount);
    }
  })

  const checkUser=async(user)=>{
    const reply=await nfticket.methods.getRole(user).call()
    console.log("USER:",reply);
  }

  return (
    <div className="section" style={{ backgroundColor: "#343a40" }}>
      <div
        style={{
          height: "130px",
        }}
      />
      <div className="container">
        <div className="content wow ">
          {/* Check the type of the current user and render the appropriate dashboard */}
          {/* <StudentDashboard /> */}
          {/* <IssuerDashboard /> */}
          <VerifierDashboard/>
        </div>
      </div>
      <div
        style={{
          height: "50px",
        }}
      />
    </div>
  );
}

export async function getStaticProps() {
  return { props: { header: "dashboard", footer: "three" } };
}
