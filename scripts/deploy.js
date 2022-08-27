//imports
const { ethers } = require("hardhat");
//async main
async function main(){
   const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
   console.log("deploying contracts");
   const simpleStorage = await SimpleStorageFactory.deploy();
   await simpleStorage.deployed();
   console.log(`deployed contract to: ${simpleStorage.address}`);

}

//main
main()
  .then(()=> process.exit(0))
  .catch((error)=>{
  console.error(error);
  process.exit(1);
});