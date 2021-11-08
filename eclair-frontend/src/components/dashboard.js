import ConnectWallet from "./connectWallet";
import "@celo-tools/use-contractkit/lib/styles.css";
import { ContractKitProvider } from '@celo-tools/use-contractkit';
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";
import { Flex } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";

function dashboard() {
  return (
  <div>
    <Header />
    <Flex height='90vh' padding='50px' backgroundColor='#19323C'>
    <Navbar />
    <Divider orientation='vertical' marginLeft='20px' height='70vh'/>
    
    <ContractKitProvider
      dapp={{
        name: 'eclair',
        description: 'nft marketplace',
        url: 'https://eclair.com',
      }}
    >
      <ConnectWallet />
    </ContractKitProvider>
    </Flex>
    <Footer />
  </div>
  );
};

export default dashboard;


