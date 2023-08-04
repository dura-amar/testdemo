require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "alfajores",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    localhost: {
      url: process.env.LOCAL_URL,
      accounts: [process.env.LOCAL_PRIVATE_KEY]
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [`${process.env.PRIVATE_KEY}`],
      chainId: 44787,
    },

  },
};
