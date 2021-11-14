import { Divider, VStack, Text, Button } from '@chakra-ui/react'

function navbar(){
    return (
        <VStack width='35vh' height='70vh' spacing='50px' color='white' fontSize='20px' fontFamily='monospace'>
            <Button variant="link" textColor="white" fontSize='20px' fontFamily='monospace'>dashboard</Button>
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