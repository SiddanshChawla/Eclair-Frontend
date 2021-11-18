import { NFTAddress, NFTMarketAddress } from "./constants";
import NFTAbi from "./contracts/NFT.sol/NFT.json"

function NFTContract(kit) {
    return new kit.web3.eth.Contract(NFTAbi.abi, NFTAddress);
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