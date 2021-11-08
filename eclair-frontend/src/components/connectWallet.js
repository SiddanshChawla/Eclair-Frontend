import { Container, Box, Button, Text } from "@chakra-ui/react";
import { useContractKit } from "@celo-tools/use-contractkit";

function ConnectCeloWallet() {
    const { connect, destroy, address } = useContractKit();
    var walletConnect = address?.length>0;
  
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
            <Button colorScheme={"green"} onClick={connectWallet} disabled={walletConnect}>
            Connect Wallet
          </Button>
          )}
          </>
          
          <Button colorScheme={"yellow"} onClick={disconnectWallet} ml={4} disabled={!walletConnect}>
            Disconnect Wallet
          </Button>
        </Box>
      </Container>
    );
  };

export default ConnectCeloWallet;