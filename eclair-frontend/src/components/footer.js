import { Text, Flex, Spacer, HStack, Link } from '@chakra-ui/react';
import { FaInstagram, FaDiscord, FaTwitter, FaMedium } from 'react-icons/fa';
import { Link as ReactRouterDom } from 'react-router-dom';

const iconSize = '40px';

function footer() {
    return(
        <Flex backgroundColor='#506369' padding='5' className='text'>
            <HStack width='full' mx='10'>
                <HStack spacing='20'>
                    <Text>
                        Made with ❤️ by Team eclair
                    </Text>
                    <HStack spacing='12'>
                            <Link href="https://www.instagram.com/eclair.app/" isExternal> <FaInstagram size={iconSize}/></Link>
                            <Link href="https://discord.io/eclairapp" isExternal> <FaDiscord size={iconSize}/></Link>
                            <Link href="https://twitter.com/eclairapp" isExternal> <FaTwitter size={iconSize}/></Link>
                            <Link href="https://rohanphww.medium.com/" isExternal> <FaMedium size={iconSize} /> </Link>
                    </HStack>
                </HStack>
                <Spacer />
                <HStack spacing='20'>
                    <Link to='/explore' as={ReactRouterDom}>explore</Link>
                    <Link>mint</Link>
                    <Link>FAQs</Link>
                </HStack>
            </HStack>
        </Flex>
    )
}

export default footer;