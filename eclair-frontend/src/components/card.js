import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import React from "react";

function card(props){
    return (
        
        <Flex padding='5'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" alignItems='baseline'>
                    <Link to={`asset/${props._id}`} ><Image src={props.nftUrl} alt='nft image' /></Link>
                    <Divider/>
                    <Box color='white'>
                        <Link to={`asset/${props._id}`} ><Heading fontWeight='light' ml="2" fontSize='3xl'>{props.nftTitle}</Heading></Link>
                        <Divider />
                        <Text backgroundColor='whiteAlpha.600'>{props.nftPrice}</Text>
                    </Box>
                </Box>
        </Flex>
        
    )
}

export default card;