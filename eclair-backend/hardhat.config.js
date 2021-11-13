require("@nomiclabs/hardhat-waffle");

const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 44787,
    },
    cLabs: {
      url: "https://alfajores-forno.celo-testnet.org/",
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
