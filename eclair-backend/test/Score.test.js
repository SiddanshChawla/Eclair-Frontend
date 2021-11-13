const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Score", function () {
  let signers;

  let market, nft, score;
  beforeEach(async function () {
    signers = await ethers.getSigners();
    const NFTMarket = await ethers.getContractFactory("NFTMarket");
    market = await NFTMarket.deploy();
    await market.deployed();

    const Score = await ethers.getContractFactory("Score");
    score = await Score.deploy(market.address);
    await score.deployed();

    const NFT = await ethers.getContractFactory("NFT");
    nft = await NFT.deploy(market.address);
    await nft.deployed();

    market.setScoreContract(score.address);
  });

  it("Full Flow", async function () {
    [admin, acc1, acc2, acc3, acc4, acc5] = signers;

    // Mint NFTs
    await nft.connect(acc1).mint("https://tokenURI", 5);
    await nft.connect(acc1).mint("https://tokenURI", 5);
    await nft.connect(acc2).mint("https://tokenURI", 5);
    await nft.connect(acc3).mint("https://tokenURI", 5);
    await nft.connect(acc4).mint("https://tokenURI", 5);

    // List & Buy NFTs
    await market
      .connect(acc1)
      .listToken(nft.address, 1, ethers.utils.parseEther("1"));

    await market
      .connect(acc2)
      .listToken(nft.address, 3, ethers.utils.parseEther("2"));

    await market
      .connect(acc3)
      .buyToken(nft.address, 2, { value: ethers.utils.parseEther("2") });

    await market
      .connect(acc4)
      .listToken(nft.address, 5, ethers.utils.parseEther("0.1"));

    await market
      .connect(acc5)
      .buyToken(nft.address, 3, { value: ethers.utils.parseEther("0.1") });

    let scores = await Promise.all([
      await score.getScoreByAddress(acc1.address),
      await score.getScoreByAddress(acc2.address),
      await score.getScoreByAddress(acc3.address),
      await score.getScoreByAddress(acc4.address),
      await score.getScoreByAddress(acc5.address),
    ]);

    console.log("--- All scores ---");
    for (let s of scores) {
      console.log(s.toString());
    }
    console.log("");

    await score.updateRewards();

    let rewards = await Promise.all([
      await score.getPendingRewardByAddress(acc1.address),
      await score.getPendingRewardByAddress(acc2.address),
      await score.getPendingRewardByAddress(acc3.address),
      await score.getPendingRewardByAddress(acc4.address),
      await score.getPendingRewardByAddress(acc5.address),
    ]);

    console.log("--- All rewards ---");
    for (let r of rewards) {
      console.log(r.toString());
    }
    console.log("");

    await market
      .connect(acc2)
      .buyToken(nft.address, 1, { value: ethers.utils.parseEther("1") });
    await score.connect(acc4).claim();
    await score.updateRewards();

    rewards = await Promise.all([
      await score.getPendingRewardByAddress(acc1.address),
      await score.getPendingRewardByAddress(acc2.address),
      await score.getPendingRewardByAddress(acc3.address),
      await score.getPendingRewardByAddress(acc4.address),
      await score.getPendingRewardByAddress(acc5.address),
    ]);

    console.log("--- All rewards ---");
    for (let r of rewards) {
      console.log(r.toString());
    }
    console.log("");
  });
});
