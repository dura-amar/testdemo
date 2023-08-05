import React, { useState, useContext } from "react";
import idverseContext from "../../../context/IdverseContext";

const CertificateIssuanceForm = ({ onIssueCertificate }) => {
  const { 
    currentAccount,
    web3js,
    nfticket,
    setUserType ,
    isStudent,
    userType,
  } =
    useContext(idverseContext);

  const [studentName, setStudentName] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [certificateTitle, setCertificateTitle] = useState("");
  const [certificateDate, setCertificateDate] = useState("");
  const [certificateImage, setCertificateImage] = useState(null);

  const handleIssueCertificate = async() => {
    console.log(walletAddress);
    await nfticket.methods.mint(walletAddress,"uri").send({from:currentAccount});
    const certificateData = {
      studentName,
      walletAddress,
      certificateTitle,
      certificateDate,
      certificateImage,
    };

    // Call the parent component's callback function to issue the certificate
    onIssueCertificate(certificateData);

    // Clear the form after issuing the certificate
    setStudentName("");
    setWalletAddress("");
    setCertificateTitle("");
    setCertificateDate("");
    setCertificateImage(null);
  };

  return (
    <div className="fugu--card-wrap">
      <div className="container">
        <div className="fugu--newslatter-wrap">
          <div className="fugu--section-title">
            <div className="fugu--default-content content-sm">
              <h2>Issue Certificate</h2>
              <p>Enter the details to issue a certificate to a student.</p>
            </div>
          </div>
          <div className="fugu--newsletter">
            <div className="form-group">
              <label htmlFor="studentName" className="text-white">
                Student Name:
              </label>
              <input
                type="text"
                id="studentName"
                className="form-control"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="walletAddress" className="text-white">
                Student Wallet Address:
              </label>
              <input
                type="text"
                id="walletAddress"
                className="form-control"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="certificateTitle" className="text-white">
                Certificate Title:
              </label>
              <input
                type="text"
                id="certificateTitle"
                className="form-control"
                value={certificateTitle}
                onChange={(e) => setCertificateTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="certificateDate" className="text-white">
                Certification Date:
              </label>
              <input
                type="date"
                id="certificateDate"
                className="form-control"
                value={certificateDate}
                onChange={(e) => setCertificateDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="certificateImage" className="text-white">
                Certificate Image:
              </label>
              <input
                type="file"
                id="certificateImage"
                className="form-control"
                onChange={(e) => setCertificateImage(e.target.files[0])}
              />
            </div>
            <div className="form-group mt-3">
              <button
                className="fugu--btn btn-sm bg-white"
                onClick={handleIssueCertificate}
              >
                Issue Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fugu--shape4">
        <img src="/images/shape2/shape4.png" alt="" />
      </div>
    </div>
  );
};

export default CertificateIssuanceForm;
