import { ethers } from "ethers";

import NFTicketArtifact from "../constants/NFTicket-contract.json";
import NFTicketAddress from "../constants/NFTicket-contract-address.json";

import PortfolioArtifect from "../constants/Portfolio-contract.json";
import PortfolioAddress from "../constants/Portfolio-contract-address.json";

import CertificateSharingArtifect from "../constants/CertificateSharing-contract.json";
import CertificateSharingAddress from "../constants/CertificateSharing-contract-address.json";

const provider = new ethers.providers.Web3Provider(window.ethereum);

// For view functions
const NFTicketView = new ethers.Contract(
  NFTicketAddress.contract,
  NFTicketArtifact.abi,
  provider
);

const PortfolioView = new ethers.Contract(
  PortfolioAddress.contract,
  PortfolioArtifect.abi,
  provider
);

const CertificateSharingView = new ethers.Contract(
  CertificateSharingAddress.contract,
  CertificateSharingArtifect.abi,
  provider
);

// For external functions

//to get sign from the currently connected user
const signer = provider.getSigner();
const NFTicketExternal = new ethers.Contract(
  NFTicketAddress.contract,
  NFTicketArtifact.abi,
  signer
);

const PortfolioExternal = new ethers.Contract(
  PortfolioAddress.contract,
  PortfolioArtifect.abi,
  signer
);

const CertificateSharingExternal = new ethers.Contract(
  CertificateSharingAddress.contract,
  CertificateSharingArtifect.abi,
  signer
);

// Functions for Portfolio

const registerStudent = async (studentName, pftURI, email) => {
  await PortfolioExternal.registerStudent(studentName, pftURI, email);
};

const mintStudentProfile = async (toAddress, fromAddress) => {
  await PortfolioExternal.mint(toAddress, fromAddress);
};

const appendCertificate = async (studenAddress, certId) => {
  await PortfolioExternal.appendCertificate(studenAddress, certId);
};

const changeURI = async (tokenId, tokenURI) => {
  await PortfolioExternal.changeURI(tokenId, tokenURI);
};

const isStudent = async (userAddress) => {
  return await PortfolioExternal.isStudent(userAddress);
};

// Exporting the functions
export { provider, NFTicketExternal };
