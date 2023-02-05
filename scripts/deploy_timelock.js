const { ethers } = require("hardhat");
const argumentsArray = require("../arguments.js");
async function main() {
  let delayTime = argumentsArray[0];
  let proposerArray = argumentsArray[1];
  let executerArray = argumentsArray[2];

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance: ", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("TimelockController");
  const token = await Token.deploy(delayTime, proposerArray, executerArray);
  console.log("Timelock address", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
