import React from "react";
import { Flex, Heading, HStack, Spacer } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import eclairlogo from '../eclairlogo.png';
import { Button } from "@chakra-ui/button";
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function header(){

    //TODO: check login button, sync wallet
    
    function checkLogin(login){
        var login = false;
        var loginText = '';
        if (login === true){
            loginText = 'user page';
        }   
        else{
            loginText = 'sync wallet';
        }
    };



    var userSearch = "";
    function handleSearch (event){
        if (!event) event = window.event;
        var keyCode = event.code || event.key;
        if (keyCode === 'Enter'){
                userSearch = event.target.value;
                console.log(userSearch);
        }
    }

    // function scrollResult(){

    // }

    return(
        <Flex height='172px' width='full' padding='5' backgroundColor='#19323C' className='text'>
            <HStack spacing='20px' >
                <Image src={eclairlogo} height='170px'/>
                <Link to='/'>
                    <Heading fontFamily='Fira Code' color='white'>eclair</Heading>
                </Link>
                <Spacer/>

                <Input id='searchInput' placeholder="Title, Artist, NFT name" width='700px' rounded='50' color='white' onKeyPress={handleSearch}/>
                  
                <Spacer />
                <HStack spacing='5' color='white'>
                    <Link to='/explore'>explore</Link>
                    <Link>mint</Link>
                    <Link><Button rounded='50' backgroundColor='black'>sync wallet</Button></Link>
                    
                </HStack>
            </HStack>
        </Flex>
    );
};

export default header;