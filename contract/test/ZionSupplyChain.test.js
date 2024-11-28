const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ZionSupplyChain", function () {
  let factory;
  let supplyChain;
  let deployer;
  let otherAccount;

  beforeEach(async function () {
    [deployer, otherAccount] = await ethers.getSigners();

    // Deploy the ZionSupplyChainFactory contract
    const Factory = await ethers.getContractFactory("ZionSupplyChainFactory");
    factory = await Factory.deploy();

    // Deploy a new supply chain using the factory
    const tx = await factory.createSupplyChain();
    const receipt = await tx.wait();
    const newSupplyChainAddress = receipt.events[0].args.newSupplyChainContract;

    // Get the deployed supply chain contract instance
    supplyChain = await ethers.getContractAt("ZionSupplyChain", newSupplyChainAddress);
  });

  it("should create a product", async function () {
    // Create a product in the supply chain
    await supplyChain.createProduct(1, "Widget", 100);

    // Retrieve product details
    const product = await supplyChain.getProductDetails(1);
    
    expect(product.productId).to.equal(1);
    expect(product.productName).to.equal("Widget");
    expect(product.quantity).to.equal(100);
    expect(product.currentOwner).to.equal(deployer.address);
    expect(product.currentStatus).to.equal("Manufactured");
  });

  it("should update product status", async function () {
    // Create a product
    await supplyChain.createProduct(1, "Widget", 100);

    // Update product status
    await supplyChain.updateProductStatus(1, "Shipped");

    // Retrieve product details
    const product = await supplyChain.getProductDetails(1);

    expect(product.currentStatus).to.equal("Shipped");
  });

  it("should transfer ownership of the product", async function () {
    // Create a product
    await supplyChain.createProduct(1, "Widget", 100);

    // Transfer ownership of the product
    await supplyChain.transferProductOwnership(1, otherAccount.address);

    // Retrieve product details
    const product = await supplyChain.getProductDetails(1);

    expect(product.currentOwner).to.equal(otherAccount.address);
  });

  it("should track transaction history", async function () {
    // Create a product
    await supplyChain.createProduct(1, "Widget", 100);

    // Update product status
    await supplyChain.updateProductStatus(1, "Shipped");

    // Transfer ownership of the product
    await supplyChain.transferProductOwnership(1, otherAccount.address);

    // Retrieve product transaction history
    const history = await supplyChain.getProductTransactionHistory(1);

    expect(history).to.deep.equal([deployer.address, deployer.address, otherAccount.address]);
  });
});
