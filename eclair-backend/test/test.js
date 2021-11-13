const { expect } = require("chai");
const { ethers } = require("hardhat");

/**
 * CHECKLIST
 * [ ] TEST NFT CONTRACT
 *  [ ] MINT
 *  [ ] BURN
 *  [ ] TRANSFER
 *  [ ] APPROVALS
 * [ ] TEST MARKETPLACE CONTRACT
 *  [ ] CREATE ITEM
 *  [ ] BUY ITEM
 *  [ ] CANCEL SALE
 *  [ ] SCORE
 *    [ ] INCREMENTING SCORE PROPERLY
 *    [ ] UPDATING REWARDS
 *    [ ] CLAIMING REWARDS
 *    [ ] NOT LOSING PRECISION
 */

// describe("NFTMarket", function () {
//   it("Create new NFT", async function () {
//     const [owner, sellerOne, sellerTwo, buyerOne, buyerTwo] =
//       await ethers.getSigners();

//     // Setup.
//  const NFTMarket = await ethers.getContractFactory("NFTMarket");
//  const market = await NFTMarket.deploy();
//  await market.deployed();

//  const NFT = await ethers.getContractFactory("NFT");
//  const nft = await NFT.deploy(market.address);
//  await nft.deployed();

//     const Score = await ethers.getContractFactory("Score");
//     const score = await Score.deploy(market.address);
//     await score.deployed();

//     await market.setScoreContract(score.address);

//     // Mint a few NFTs.
//     await nft.connect(sellerOne).createToken("https://tokenUri");
//     await nft.connect(sellerOne).createToken("https://tokenUri2");

//     await nft.connect(sellerTwo).createToken("https://tokenUri3");

//     expect(await nft.ownerOf(1)).to.eq(sellerOne.address);
//     expect(await nft.ownerOf(3)).to.eq(sellerTwo.address);

//     await market
//       .connect(sellerOne)
//       .createMarketItem(nft.address, 1, ethers.utils.parseEther("10.0"), {
//         value: ethers.utils.parseEther("1.0"),
//       });

//     expect(
//       (await score.getScoreByAddress(sellerOne.address)).toString()
//     ).to.equal("2");

//     await market.connect(buyerOne).createMarketSale(nft.address, 1, {
//       value: ethers.utils.parseEther("10.0"),
//     });

//     console.log((await score.getScoreByAddress(sellerOne.address)).toString());
//   });
// });
