const {
    loadFixture,
  } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
const { ZeroAddress } = require("ethers");

describe("NFTicket Contract", function () {
  async function deployFixture() {
    const [owner,admin,issuer,student] = await ethers.getSigners();
    const hardhatNFTicket = await ethers.deployContract("NFTicket",[admin.address]);

    return {hardhatNFTicket,owner,admin,issuer,student};
  }

it("Should be deployed",async function(){
    const {hardhatNFTicket}=await loadFixture(deployFixture);
    const name=await hardhatNFTicket.name();
    const symb=await hardhatNFTicket.symbol();

    expect(name).to.equal("NFTicket");
    expect(symb).to.equal("nfticket");
})

it("Can register and approve issuer",async function(){
    const {hardhatNFTicket,owner,admin,issuer}=await loadFixture(deployFixture);
    await expect(hardhatNFTicket.registerIssuer("","","email@email")).to.be.revertedWith('Empty name.');
    await expect(hardhatNFTicket.registerIssuer("name","","")).to.be.revertedWith('Empty email.');

    await expect(hardhatNFTicket.connect(admin).approveIssuer(issuer.address)).to.be.revertedWith('Issuer not registered.');
    await hardhatNFTicket.connect(issuer).registerIssuer("name","pfp","email");
    await expect(hardhatNFTicket.approveIssuer(issuer.address)).to.be.revertedWith('Caller is not an admin.');
    await hardhatNFTicket.connect(admin).approveIssuer(issuer.address);

    expect(await hardhatNFTicket.isIssuerApproved(issuer.address)).to.equal(true);
})

it("Issuer can mint",async function(){
    const {hardhatNFTicket,owner,admin,issuer,student}=await loadFixture(deployFixture);
    await hardhatNFTicket.connect(issuer).registerIssuer("name","pfp","email");
    await hardhatNFTicket.connect(admin).approveIssuer(issuer.address);

    await expect(hardhatNFTicket.mint(student.address,"uri")).to.be.revertedWith('Caller is not a issuer.');
    await expect(hardhatNFTicket.connect(issuer).mint(ZeroAddress,"uri")).to.be.revertedWith('Cannot mint to 0 address.');
    await expect(hardhatNFTicket.connect(issuer).mint(student.address,"")).to.be.revertedWith('Empty URI.');
    
    await hardhatNFTicket.connect(issuer).mint(student.address,"uri");
    expect(await hardhatNFTicket.balanceOf(student.address)).to.equal(1);
    expect(await hardhatNFTicket.ownerOf(1)).to.equal(student.address);
    expect(await hardhatNFTicket.tokenURI(1)).to.equal("uri");
})

it("Is soulbound",async function(){
    const {hardhatNFTicket,owner,admin,issuer,student}=await loadFixture(deployFixture);
    await hardhatNFTicket.connect(issuer).registerIssuer("name","pfp","email");
    await hardhatNFTicket.connect(admin).approveIssuer(issuer.address);
    await hardhatNFTicket.connect(issuer).mint(student.address,"uri");

    await expect(hardhatNFTicket.connect(student).transferFrom(student.address,owner.address,1)).to.be.revertedWith('No permission to transfer.');

})

});