//imports
const { ethers, run, network } = require("hardhat");
//async main
async function main(){
   const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
   console.log("deploying contracts");
   const simpleStorage = await SimpleStorageFactory.deploy();
   await simpleStorage.deployed();
   console.log(`deployed contract to: ${simpleStorage.address}`);
   //this condition wont run until we are a 100percent sure the network is something that the contract can acc be verified to...cuz local networks like hardhat cant
    if(network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY){
      console.log("waiting for block txes.....");
      await simpleStorage.deployTransaction.wait(6); 
      await verify(simpleStorage.address , []);
    }

    const currentValue = await simpleStorage.retrieve();
    console.log(`Current Value is: ${currentValue}`);

    //update the current value
    const transactionResponse = await simpleStorage.store(7);
    await transactionResponse.wait(1);
    const updatedValue = await simpleStorage.retrieve();
    console.log(`Updated Value is: ${updatedValue}`);
}
//function to verify the contract on etherscan
async function verify(contractAddress, args){
    console.log("verifying contract ......");
   try {
        await run("verify:verify",{
          address: contractAddress,
          constructorArguments : args,
        });
   } catch (e) {
      if(e.message.toLowerCase().includes("already verified")) {
        console.log("already verified");
      }else {
        console.log(e)
      }
   }
}

//main
main()
  .then(()=> process.exit(0))
  .catch((error)=>{
  console.error(error);
  process.exit(1);
});