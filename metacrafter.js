// Step 1: Create a variable to hold your NFTs
let nfts = [];

// Function to generate a unique identifier (simulated Transaction/Application ID)
function generateUniqueId() {
    return  Math.random().toString(36).substr(2, 9);
}

// Step 2: Create the mintNFT function
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object with the given metadata
    const nft = {
        id: generateUniqueId(),  // Add unique identifier
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    
    // Store the NFT object in the array
    nfts.push(nft);

    // Log the Transaction ID to the console
    console.log(`Transaction ID: ${nft.id}`);
}

// Step 3: Create the listNFTs function
function listNFTs() {
    // Loop through the array and print each NFT's metadata
    for (let i = 0; i < nfts.length; i++) {
        console.log(`NFT #${i + 1}`);
        console.log(`ID: ${nfts[i].id}`);
        console.log(`Name: ${nfts[i].name}`);
        console.log(`Eye Color: ${nfts[i].eyeColor}`);
        console.log(`Shirt Type: ${nfts[i].shirtType}`);
        console.log(`Bling: ${nfts[i].bling}`);
        console.log('------------------------');
    }
}

// Step 4: Create the getTotalSupply function
function getTotalSupply() {
    // Return the total number of NFTs
    return nfts.length;
}

// Step 5: Call your functions below this line to test

// Mint some NFTs
mintNFT("Epic Dragon", "Red", "Armor", "Golden Sword");
mintNFT("Mighty Warrior", "Blue", "Leather Jacket", "Silver Shield");
mintNFT("Stealth Ninja", "Green", "Black Suit", "Throwing Stars");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log(`Total NFTs Minted: ${getTotalSupply()}`);

