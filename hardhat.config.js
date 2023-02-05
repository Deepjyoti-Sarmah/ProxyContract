require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
      url: "https://goerli.infura.io/v3/e914e8ed872843adb201a106b77e1c42",
      accounts: [
        "bb901a7d93249826fbf9f375faf1ef69d9b37adf4f3b0a01af706a8ade3b9c56",
      ],
    }
  }
};
