
const {ethers} = require("hardhat");



async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy nft, dynamicnft, certificate-sharing contracts


}


// TODO: Need to be updated for particular contrats that will be displayed
//saving the contact abi and address into client side
// function saveFrontendFiles(nfticate) {
//   const fs = require("fs");
//   const contractsDir = __dirname + "/../client/constants";

//   if (!fs.existsSync(contractsDir)) {
//     fs.mkdirSync(contractsDir);
//   }

//   fs.writeFileSync(
//     contractsDir + `/contract-address.json`,
//     JSON.stringify({ nfticate: nfticate.address }, undefined, 2)
//   );

//   const nfticateArtifact = artifacts.readArtifactSync("CertificateSharing");

//   fs.writeFileSync(
//     contractsDir + "/CertificateSharing.json",
//     JSON.stringify(nfticateArtifact, null, 2)
//   );
// }


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
