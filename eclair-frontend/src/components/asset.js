import React from "react";
import { Flex, Heading, HStack, VStack, Text, Divider } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Route } from "react-router";
import Header from './header';
import Footer from './footer';
import data from "../data";
import { Table, Tbody, Tr, Td } from "@chakra-ui/table";

function asset(props){
    //console.log(props.match.params.id)
    const nftSelected = data.nftExplore.find(x=> Number(x._id) === Number(props.match.params.id));

    return <div>
        <Header />
        <Flex width='full' padding='16' backgroundColor='#19323C' textColor='white'>
            <VStack>
                <HStack spacing='10'>
                    <Image src={nftSelected.Url} padding='8' marginInlineStart='100px'/>
                    <VStack width='50%' textAlign='left' align='flex-start'>
                        <Heading as='h2' color='#F2545B'>{nftSelected.Title}</Heading>
                        <Heading as='h3' size='md' color='#A93F55'>{nftSelected.Artist}</Heading>
                        <br/>
                        <Text textAlign='justify'>{nftSelected.Desc}</Text>
                    </VStack>
                </HStack>
                <HStack>
                    <Table size='sm' mx='0'>
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
                </HStack>
                
            </VStack>
        </Flex>
        
        <Footer />
    </div>
}

export default asset;