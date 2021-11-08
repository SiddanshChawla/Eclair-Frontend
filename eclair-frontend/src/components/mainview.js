import { Button } from "@chakra-ui/button";
import { Flex, HStack, VStack, Text, Heading, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Link } from 'react-router-dom';

function mainview() {
    return(
        <Flex backgroundColor='#19323C' padding='16' height='505px' className='text'>
            <HStack width='full' mx='10'>
                <VStack width='50%' spacing='5%' alignItems='flex-start'>
                    <Heading textAlign='left' color='#F3F7F0' fontFamily='Fira Code'>Discover, Mint and Collect {<br />}  NFTs on the first ever {<br/>} <font color='#F2545B'> revenue sharing </font> marketplace. </Heading>
                    <Text color='#CCCCCC'>Your go-to marketplace to have that extra pocket money!</Text>
                    <Link to='/explore'><Button rounded='50' backgroundColor='#8C5E58' borderColor='white' borderWidth='1px'>Taste the eclair</Button></Link>
                </VStack>

                <Stack className='parent' height='auto' align='center' left='100px'>
                    <Image src='https://picsum.photos/400?random=1' alt='mainview' justifyContent className='image1'/>
                    <Image src='https://picsum.photos/400?random=2' alt='mainview' justifyContent className='image2'/>
                    <Image src='https://picsum.photos/400?random=3' alt='mainview' justifyContent className='image3'/>
                </Stack>
                
            </HStack>
        </Flex>
    );
};

export default mainview;
