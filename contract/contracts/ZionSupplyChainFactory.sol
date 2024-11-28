// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the existing ZionSupplyChain contract
import "./ZionSupplyChain.sol";  // Assuming the ZionSupplyChain contract is in the same directory

contract ZionSupplyChainFactory {
    // Array to store all deployed supply chain contract addresses
    address[] public deployedContracts;

    // Event to log the creation of new supply chain contracts
    event SupplyChainCreated(address indexed newSupplyChainContract, address indexed creator);

    // Function to create a new instance of ZionSupplyChain contract
    function createSupplyChain() public returns (address) {
        // Deploy a new supply chain contract
        ZionSupplyChain newSupplyChain = new ZionSupplyChain();

        // Emit the event with the address of the new contract
        emit SupplyChainCreated(address(newSupplyChain), msg.sender);

        // Add the new contract address to the deployedContracts array
        deployedContracts.push(address(newSupplyChain));

        // Return the address of the new contract
        return address(newSupplyChain);
    }

    // Function to get the number of deployed supply chain contracts
    function getDeployedContractsCount() public view returns (uint256) {
        return deployedContracts.length;
    }

    // Function to get the address of a deployed supply chain contract by index
    function getDeployedContractByIndex(uint256 index) public view returns (address) {
        require(index < deployedContracts.length, "Index out of bounds");
        return deployedContracts[index];
    }
}
