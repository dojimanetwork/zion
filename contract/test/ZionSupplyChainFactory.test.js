const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZionSupplyChainFactory", function () {
  let factory;
  let deployer;
  let otherAccount;

  beforeEach(async function () {
    [deployer, otherAccount] = await ethers.getSigners();

    // Deploy the ZionSupplyChainFactory contract
    const Factory = await ethers.getContractFactory("ZionSupplyChainFactory");
    factory = await Factory.deploy();
  });

  it("should deploy the factory contract", async function () {
    expect(factory.address).to.be.properAddress;
  });

  it("should deploy a new ZionSupplyChain contract", async function () {
    // Deploy a new supply chain using the factory
    const tx = await factory.createSupplyChain();
    const receipt = await tx.wait();

    // Get the address of the new supply chain contract from the event
    const newSupplyChainAddress = receipt.events[0].args.newSupplyChainContract;

    // Ensure the new contract address is valid
    expect(newSupplyChainAddress).to.be.properAddress;

    // Interact with the new supply chain contract
    const supplyChain = await ethers.getContractAt("ZionSupplyChain", newSupplyChainAddress);

    // Check that the supply chain is properly initialized
    const details = await supplyChain.getProductDetails(1);
    expect(details.productName).to.equal("");
  });

  it("should track deployed contracts", async function () {
    // Deploy two supply chain contracts
    await factory.createSupplyChain();
    await factory.createSupplyChain();

    // Get the list of deployed contracts
    const contractCount = await factory.getDeployedContractsCount();
    expect(contractCount).to.equal(2);

    // Retrieve the addresses of the deployed contracts
    const deployedContract1 = await factory.getDeployedContractByIndex(0);
    const deployedContract2 = await factory.getDeployedContractByIndex(1);

    expect(deployedContract1).to.be.properAddress;
    expect(deployedContract2).to.be.properAddress;
  });
});
