// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ZionSupplyChain {

    // Define the struct for each product/item in the supply chain
    struct Product {
        uint256 productId;
        string productName;
        uint256 quantity;
        address currentOwner;
        string currentStatus;  // Status can be 'Manufactured', 'Shipped', 'In-Transit', 'Delivered', etc.
        uint256 timestamp;     // Timestamp of the last action
        address[] transactionHistory; // Record of addresses involved in each step
    }

    // Mapping from product ID to Product struct
    mapping(uint256 => Product) public products;

    // Event to log the creation of a product
    event ProductCreated(uint256 indexed productId, string productName, uint256 quantity, address indexed creator);
    
    // Event to log the update of product status
    event ProductStatusUpdated(uint256 indexed productId, string newStatus, address indexed updater);

    // Event for product ownership transfer
    event ProductOwnershipTransferred(uint256 indexed productId, address indexed from, address indexed to);

    // Create a new product in the supply chain
    function createProduct(uint256 _productId, string memory _productName, uint256 _quantity) public {
        require(products[_productId].productId == 0, "Product already exists");
        
        // Initialize product
        products[_productId] = Product({
            productId: _productId,
            productName: _productName,
            quantity: _quantity,
            currentOwner: msg.sender,
            currentStatus: "Manufactured",
            timestamp: block.timestamp,
            transactionHistory: new address[](0)     });
        
        // Add the creator to the transaction history
        products[_productId].transactionHistory.push(msg.sender);

        emit ProductCreated(_productId, _productName, _quantity, msg.sender);
    }

    // Update the status of a product (for example, after shipment)
    function updateProductStatus(uint256 _productId, string memory _newStatus) public {
        Product storage product = products[_productId];
        require(product.productId != 0, "Product does not exist");
        require(msg.sender == product.currentOwner, "Only the current owner can update status");
        
        // Update status and timestamp
        product.currentStatus = _newStatus;
        product.timestamp = block.timestamp;

        // Add the updater to the transaction history
        product.transactionHistory.push(msg.sender);

        emit ProductStatusUpdated(_productId, _newStatus, msg.sender);
    }

    // Transfer ownership of the product (e.g., from manufacturer to distributor)
    function transferProductOwnership(uint256 _productId, address _newOwner) public {
        Product storage product = products[_productId];
        require(product.productId != 0, "Product does not exist");
        require(msg.sender == product.currentOwner, "Only the current owner can transfer ownership");
        require(_newOwner != address(0), "Invalid address");

        // Transfer ownership
        address previousOwner = product.currentOwner;
        product.currentOwner = _newOwner;

        // Add both previous and new owner to the transaction history
        product.transactionHistory.push(msg.sender);
        product.transactionHistory.push(_newOwner);

        emit ProductOwnershipTransferred(_productId, previousOwner, _newOwner);
    }

    // Get the details of a product
    function getProductDetails(uint256 _productId) public view returns (
        uint256 productId,
        string memory productName,
        uint256 quantity,
        address currentOwner,
        string memory currentStatus,
        uint256 timestamp,
        address[] memory transactionHistory
    ) {
        Product storage product = products[_productId];
        require(product.productId != 0, "Product does not exist");

        return (
            product.productId,
            product.productName,
            product.quantity,
            product.currentOwner,
            product.currentStatus,
            product.timestamp,
            product.transactionHistory
        );
    }

    // Helper function to get the transaction history of a product
    function getProductTransactionHistory(uint256 _productId) public view returns (address[] memory) {
        Product storage product = products[_productId];
        require(product.productId != 0, "Product does not exist");

        return product.transactionHistory;
    }
}
