import { NFTAddress, NFTMarketAddress } from "../constants";

import NFTAbi from "./contracts/NFT.sol/NFT.json";
 import NFTMarketAbi from "./contracts/NFTMarket.sol/NFTMarket.json";
 import Score from "./contracts/Score.sol/Score.json";

/**
 1. mintNFT 
 2. burnNFT
 3. giveMarketApproval
 4. checkIfMarketApprovedForWallet
 5. ownerOfTokenId
 6. balanceOfWallet
 */
 
function NFTContract(kit) {
  return new kit.web3.eth.Contract(NFTAbi.abi, NFTAddress);
}

export function mintNFT(tokenURI, royalty, address, performActions) {
  performActions(async (kit) => {
    const NFT = NFTContract(kit);
    const tx = await NFT.methods
      .mint(tokenURI, royalty)
      .send({ from: address });

    console.log(tx);
  });
}

export function burnNFT(tokenId, address, performActions) {
  performActions(async (kit) => {
    const NFT = NFTContract(kit);
    const tx = await NFT.methods.burn(tokenId).send({ from: address });

    console.log(tx);
  });
}

export async function giveMarketApproval(address, performActions) {
  try {
    performActions(async (kit) => {
      const NFT = NFTContract(kit);
      const tx = await NFT.methods.giveMarketApproval().send({ from: address });
      console.log(tx);
    });
  } catch (err) {
    console.log(err);
  }
}

export async function checkIfMarketApprovedForWallet(address, kit) {
  const NFT = NFTContract(kit);
  try {
    const res = await NFT.methods
      .isApprovedForAll(address, NFTMarketAddress)
      .call();

    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function ownerOfTokenId(tokenId, kit) {
  const NFT = NFTContract(kit);
  try {
    const res = await NFT.methods.ownerOf(tokenId).call();
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function balanceOfWallet(wallet, kit) {
  const NFT = NFTContract(kit);
  try {
    const res = await NFT.methods.balanceOf(wallet).call();
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
}
