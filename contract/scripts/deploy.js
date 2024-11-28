async function main() {
    // Get the ContractFactory and Signers
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy the Factory contract
    const ZionSupplyChainFactory = await ethers.getContractFactory("ZionSupplyChainFactory");
    console.log("Deploying ZionSupplyChainFactory...");
    const factory = await ZionSupplyChainFactory.deploy();
    await factory.deployed();
    console.log("ZionSupplyChainFactory deployed to:", factory.address);

    // Deploy a new Supply Chain contract using the Factory
    console.log("Creating a new ZionSupplyChain contract...");
    const tx = await factory.createSupplyChain();
    const receipt = await tx.wait();
    const newSupplyChainAddress = receipt.events[0].args.newSupplyChainContract;

    console.log("New ZionSupplyChain contract deployed at:", newSupplyChainAddress);
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
