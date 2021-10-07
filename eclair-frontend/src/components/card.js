import { Box, Flex, Heading, Text, Divider } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/image";
import React from "react";

function card(props){
    return (
        <Link to={`tranactions/${props._id}`} >
        <Flex padding='5'>
                <Box borderWidth="1px" borderRadius="lg" overflow="hidden" alignItems='baseline'>
                    <Image src={props.nftUrl} alt='nft image' />
                    <Divider/>
                    <Box color='white'>
                        <Heading fontWeight='light' ml="2" fontSize='3xl'>{props.nftTitle}</Heading>
                        <Divider />
                        <Text>{props.nftPrice}</Text>
                    </Box>
                </Box>
        </Flex>
        </Link>
    )
}

export default card;