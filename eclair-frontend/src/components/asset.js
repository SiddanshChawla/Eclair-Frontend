import React from "react";
import { Flex, Heading, HStack, VStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Route } from "react-router";
import Header from './header';
import Footer from './footer';
import data from "../data";

function asset(props){
    //console.log(props.match.params.id)
    const nftSelected = data.nftExplore.find(x=> Number(x._id) === Number(props.match.params.id));

    return <div>
        <Header />
        <Flex width='full' padding='16' backgroundColor='#19323C' textColor='white' align='center'>
            <HStack spacing='10'>
                <Image src={nftSelected.Url} padding='5' paddingLeft='32'/>
                <VStack width='50%' textAlign='left' align='flex-start'>
                    <Heading as='h2' color='#F2545B'>{nftSelected.Title}</Heading>
                    <Heading as='h3' size='md' color='#A93F55'>{nftSelected.Artist}</Heading>
                    <br/>
                    <Text textAlign='justify'>{nftSelected.Desc}</Text>
                </VStack>
            </HStack>
        </Flex>
        
        <Footer />
    </div>
}

export default asset;