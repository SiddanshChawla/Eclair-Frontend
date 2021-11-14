import { Container, Box, Button, Text, HStack, Img, VStack, Heading } from "@chakra-ui/react";
import { useContractKit } from "@celo-tools/use-contractkit";
import Welcome from "./welcome";

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
      <Container m={0} textColor = 'white' textAlign='left' ml='20'>
        <Box>
          <>
          {address ? (
            <HStack>
              <Img src='https://picsum.photos/200' borderRadius='200px' padding='4'/>
              <VStack align='flex-start' spacing='8'>
                <VStack align='left'> 
                  <Heading> Wallet address </Heading>
                  <Text>{address}</Text>
                </VStack>
                <Button colorScheme={"yellow"} onClick={disconnectWallet} disabled={!walletConnect}> Disconnect Wallet </Button>
              </VStack>
            </HStack>
          ) : (
          <VStack spacing='8' align='left' ml='20' m={0}>
            <Welcome/>
            <Button colorScheme={"green"} onClick={connectWallet} disabled={walletConnect}>
            Connect Wallet
          </Button>
          </VStack>
          )}
          </>
        </Box>
      </Container>
    );
  };

export default ConnectCeloWallet;