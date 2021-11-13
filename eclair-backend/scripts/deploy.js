
const hre = require("hardhat");

async function main() {

  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const market = await NFTMarket.deploy();
  await market.deployed();
  console.log("NFTMarket deployed to:", market.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(market.address);
  await nft.deployed();
  console.log("NFT deployed to:", nft.address);

  const Score = await hre.ethers.getContractFactory("Score");
  const score = await Score.deploy(market.address);
  await score.deployed();
  console.log("Score deployed to:", score.address);

  await market.setScoreContract(score.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
