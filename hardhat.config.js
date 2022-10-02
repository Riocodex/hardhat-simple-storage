require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/blocknumber");



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    goerli: {
      url:GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4,
    },
  },
  solidity: "0.8.7",
  etherscan:{
    apiKey: ETHERSCAN_API_KEY,
  },
};
