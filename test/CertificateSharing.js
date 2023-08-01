// testing contract for CertificateSharing

const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ZeroAddress } = require("ethers");

describe("CertificateSharing", function () {

  async function deployFixture() {
    const [deployer] = await ethers.getSigners();
    const certificateSharing = await ethers.deployContract(
      "CertificateSharing",
      [deployer.address]
    );
    return { certificateSharing, deployer };
  }

  it("Should return the owner of the contract", async function () {
    const{certificateSharing, deployer} = await loadFixture(deployFixture);
    expect(await certificateSharing.owner())
        .to.equal(deployer.address);
    }
);

});
