import React from "react";
import Header from './header';
import Footer from './footer'
import { Flex, HStack, VStack, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import Card from "./card";
import nftExplore from "../nftExplore";


function transactions(){
    console.log(nftExplore._id)
    return(
        <div>
            {nftExplore.Url}
            <Header />
            <Flex>
                <VStack>
                    <HStack>
                        <Image></Image>
                        <VStack>
                            <Text>hello</Text>
                        </VStack>
                    </HStack>
                </VStack>
            </Flex>
            <Footer />
        </div>
    );
};

export default transactions;