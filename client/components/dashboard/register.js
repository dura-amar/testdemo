import React from "react";

export default function Register() {
  const registerStudent = () => {
    console.log("Student registration");
  };
  const registerIssuer = () => {
    console.log("Issuer registration");
  };

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
