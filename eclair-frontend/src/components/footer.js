import { Text, Flex, Spacer, HStack, Link } from '@chakra-ui/react';
import { FaInstagram, FaDiscord, FaTwitter } from 'react-icons/fa';
import { Link as ReactRouterDom } from 'react-router-dom';

const iconSize = '40px';

function footer() {
    return(
        <Flex backgroundColor='#F3F7F0' padding='5' className='text'>
            <HStack width='full' mx='10'>
                <HStack spacing='20'>
                    <Text>
                        Made with ❤️ by Team eclair
                    </Text>
                    <HStack spacing='16'>
                            <Link href="https://www.instagram.com/eclair.app/" isExternal> <FaInstagram size={iconSize} color= '#D53F8C'/></Link>
                            <Link href="" isExternal> <FaDiscord size={iconSize} color='#805AD5'/></Link>
                            <Link href="https://twitter.com/eclairapp" isExternal> <FaTwitter size={iconSize} color='#0BC5EA'/></Link>
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