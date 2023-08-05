import React from "react";

export default function Register() {

    const registerStudent=()=>{
        console.log("Student registration")
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
