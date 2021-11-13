const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Royalties", function () {
  let signers;

  let market, nft, score;
  let provider;
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

    provider = ethers.getDefaultProvider();
  });

  it("Basic test", async function () {
    [admin, acc1, acc2, acc3, acc4, acc5] = signers;

    await nft.connect(acc1).mint("https://tokenURI", 10);

    const royaltyInfo = await nft.royaltyInfo(
      1,
      ethers.utils.parseEther("5.0")
    );

    expect(royaltyInfo["receiver"]).to.eq(acc1.address); // royalty reciever eq to minter.
    expect(royaltyInfo["royaltyAmount"].toString()).to.eq((5e17).toString()); // royalty amount to be 10% of sale price.

    await market
      .connect(acc1)
      .listToken(nft.address, 1, ethers.utils.parseEther("5.0"));

    await market
      .connect(acc2)
      .buyToken(nft.address, 1, { value: ethers.utils.parseEther("5.0") });

    console.log(await nft.isApprovedForAll(acc2.address, market.address));

    await nft.connect(acc2).giveMarketApproval();

    await market
      .connect(acc2)
      .listToken(nft.address, 1, ethers.utils.parseEther("5.0"));

    await market
      .connect(acc3)
      .buyToken(nft.address, 2, { value: ethers.utils.parseEther("5.0") });
  });
});
