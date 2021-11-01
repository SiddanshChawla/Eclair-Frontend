import { Container, Box, Button, Text } from "@chakra-ui/react";
import { useContractKit } from "@celo-tools/use-contractkit";
import "@celo-tools/use-contractkit/lib/styles.css";
import { ContractKitProvider } from '@celo-tools/use-contractkit';
import Header from "./header";
import Footer from "./footer";

function walletDisplay() {
  return (<div>
  <Header/>

  
    <ContractKitProvider
      dapp={{
        name: 'eclair',
        description: 'nft marketplace',
        url: 'https://eclair.com',
      }}
    >
      <ConnectCeloWallet />
    </ContractKitProvider>
    <Footer/>
</div>
  );
};

function ConnectCeloWallet() {
  const { connect, destroy, address } = useContractKit();

  function connectWallet() {
    try {
      connect();
    } catch (err) {
      console.log(err);
    }
  }

  function disconnectWallet() {
    try {
      destroy();
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Container m={10}>
      <Box>
        <>
        {address ? (
          <div> <Text>Connected to </Text>{address}<br/></div>
          
        ) : (
          <Button colorScheme={"green"} onClick={connectWallet}>
          Connect Wallet
        </Button>
        )}
        </>
        
        <Button colorScheme={"yellow"} onClick={disconnectWallet} ml={4}>
          Disconnect Wallet
        </Button>
      </Box>
    </Container>
  );
};



export default walletDisplay;


