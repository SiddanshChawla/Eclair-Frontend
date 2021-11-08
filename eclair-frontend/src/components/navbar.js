import { Divider, VStack, Text } from '@chakra-ui/react'

function navbar(){
    return (
        <VStack width='35vh' height='70vh' spacing='50px' color='white' fontSize='20px' fontFamily='monospace'>
            <Text>dashboard</Text>
            <Divider/>
            <Text>collection</Text>
            <Divider/>
            <Text>creation</Text>
            <Divider/>
            <Text>listings</Text>
            <Divider/>
            <Text>activity</Text>
        </VStack>
    )
}

export default navbar;