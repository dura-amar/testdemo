
const {ethers} = require("hardhat");



// async function main() {
//   const[admin] = await ethers.getSigners();
//   console.log("Admin Address: ", admin.address);

//   const portfolio = await ethers.deployContract("Portfolio",[admin.address]);
//   console.log(portfolio)
//   console.log("Portfolio Address:", portfolio.target);
//   saveFrontendFiles(portfolio);

//   const nfticate = await ethers.deployContract("NFTicket",[admin.address,portfolio.target]);
//   console.log("NFTicate Address:", nfticate.target);
//   saveFrontendFiles(nfticate);

//   const certificateSharing = await ethers.deployContract("CertificateSharing",[nfticate.target]);
//   console.log("Sharing Address:", certificateSharing.target);
//   saveFrontendFiles(certificateSharing);
// }

async function main() {
  const [admin] = await ethers.getSigners();

  // Step 1: Obtain the contract factories
  const PortfolioContract = await ethers.getContractFactory("Portfolio");
  const NFTicateContract = await ethers.getContractFactory("NFTicket");
  const CertificateSharingContract = await ethers.getContractFactory("CertificateSharing");

  // Step 2: Deploy the contracts using the contract factories
  const portfolio = await PortfolioContract.deploy(admin.address);
  const nfticate = await NFTicateContract.deploy(admin.address, portfolio.target);
  const certificateSharing = await CertificateSharingContract.deploy(nfticate.target);

  // Step 3: Access contract addresses as needed
  console.log("Portfolio Address:", portfolio.target);
  console.log("NFTicate Address:", nfticate.target);
  console.log("Sharing Address:", certificateSharing.target);

  // Optional: Save frontend files if needed
  saveFrontendFiles("Portfolio",portfolio);
  saveFrontendFiles("NFTicket",nfticate);
  saveFrontendFiles("CertificateSharing",certificateSharing);
}

function saveFrontendFiles(contractName,contract) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../client/constants";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + `/${contractName}-contract-address.json`,
    JSON.stringify({ contract: contract.target }, undefined, 2)
  );

  const contractArtifact = artifacts.readArtifactSync(contractName);

  fs.writeFileSync(
    contractsDir + `/${contractName}-contract.json`,
    JSON.stringify(contractArtifact, null, 2)
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

