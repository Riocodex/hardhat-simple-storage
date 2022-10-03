require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("./tasks/blocknumber");
require("hardhat-gas-reporter")



// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL || "https://eth-goerli"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY=process.env.COINMARKETCAP_API_KEY || "key"
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY]
    } , 
    localhosts: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337 ,
    }
  },
  solidity: "0.8.7",
  etherscan:{
    apiKey: ETHERSCAN_API_KEY,
  },
  gasReporter:{
    enabled:true , 
    outputFile: "gas-report.txt" , 
    noColors: true,
    currency:"USD" , 
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "MATIC"
  }
};
