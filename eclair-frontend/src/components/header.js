import React from "react";
import { Flex, Heading, HStack, Spacer } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import eclairlogo from '../eclairlogo.png';
//import eclair from '../eclair.png';
import beta from '../beta1.png';
import { Button } from "@chakra-ui/button";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function header(){

    //TODO: check login button, sync wallet
    
    function checkLogin(login){
        var login = false;
        var loginText = '';
        if (login === true){
            return 'user page';
        }   
        else{
            return 'sync wallet';
        }
    };


    // search bar user-value saved in console
    var userSearch = "";
    function handleSearch (event){
        if (!event) event = window.event;
        var keyCode = event.code || event.key;
        if (keyCode === 'Enter'){
                userSearch = event.target.value;
                console.log(userSearch);
        }
    }

    return(
        <Flex height='172px' width='full' padding='5' backgroundColor='#19323C' className='text'>
            <HStack spacing='20px' >
                <Image src={eclairlogo} height='170px'/>
                <Link to='/'>
                    <Heading fontFamily='Fira Code' color='white'>eclair</Heading>
                    
                </Link>
                <Image src={beta} height='30px' style={{
                    marginLeft: 10,
                    
                }}/>
                <Spacer/>

                <Input id='searchInput' placeholder="Title, Artist, NFT name" width='700px' rounded='50' color='white' onKeyPress={handleSearch}/>
                  
                <Spacer />
                <HStack spacing='5' color='white'>
                    <Link to='/explore'>explore</Link>
                    <Link to='/mint'>mint</Link>
                    <Link to='/dashboard'>
                        <Button rounded='50' backgroundColor='black' _hover='false' _focus='none' 
                        _active={{
                            textColor: 'black',
                            backgroundColor: 'white'
                        }}

                        >
                        sync wallet
                        </Button>
                    </Link>
                    
                </HStack>
            </HStack>
        </Flex>
    );
};

export default header;