import React from "react";
import { Heading, HStack, VStack, Text, Divider } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Header from './header';
import data from "../data";
import { Table, Tbody, Tr, Td } from "@chakra-ui/table";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

function asset(props){

    function buyClicked(){
        console.log('user clicked buy')
    };


    //console.log(props.match.params.id)
    const nftSelected = data.nftExplore.find(x=> Number(x._id) === Number(props.match.params.id));

    return <div>
        <Header />
            <HStack backgroundColor='#19323C' paddingLeft='12' >
                <Image src={nftSelected.Url} borderRadius='30' padding='10' paddingLeft='32' paddingRight='32'/>
                
                <div className='scrollable'>
                    <VStack spacing='5' padding='5'>
                        <Heading as='h2' size='2xl' color='#F2545B' textAlign='left'>{nftSelected.Title}</Heading>
                        <Heading as='h3' size='md' color='#A93F55'>@ {nftSelected.Artist}</Heading>
                        <br/>
                        <Divider/>
                        <Text textAlign='justify'>{nftSelected.Desc}</Text>
                        <Divider/>
                        
                        <Table size='sm' mx='0' width='350px'>
                            <Tbody>
                                <Tr>
                                    <Td>edition(s)</Td>
                                    <Td textAlign='right'>{nftSelected.Editions}</Td>
                                </Tr>
                                <Tr>
                                    <Td>type</Td>
                                    <Td textAlign='right'>{nftSelected.Type}</Td>
                                </Tr>
                                <Tr>
                                    <Td>royalties</Td>
                                    <Td textAlign='right'>{nftSelected.Royalties}</Td>
                                </Tr>
                                <Tr>
                                    <Td>link</Td>
                                    <Td textAlign='right'>{nftSelected.Link}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                        <br/>
                        <Input value={nftSelected.Price} readOnly  width='150px' textAlign='center'></Input>
                        <Button borderRadius='50' width='130px' className='gradient' 
                        bgGradient="linear(to-r, #FF7995, #ED3259)" onClick={buyClicked} 
                        _hover='false' _focus='none'
                        _active={{
                            textColor: 'black',
                            backgroundColor: '#FBB6CE'
                        }}
                        >
                        BUY
                        </Button>
                    </VStack>
                </div>
            </HStack>
        
        
    </div>
}

export default asset;