<Flex width='full' padding='16' backgroundColor='#19323C' textColor='white' fontFamily='Fira Code'>
            <VStack>
                <HStack spacing='10'>
                    <Image src={nftSelected.Url} padding='8' marginInlineStart='100px'/>
                    <VStack width='50%' textAlign='left' align='flex-start' height='250px'>
                        <Heading as='h2' color='#F2545B'>{nftSelected.Title}</Heading>
                        <Heading as='h3' size='md' color='#A93F55'>{nftSelected.Artist}</Heading>
                        <br/>
                        <Text textAlign='justify'>{nftSelected.Desc}</Text>
                    </VStack>
                </HStack>
                <HStack spacing='10' padding='5'>
                    <Table size='sm' mx='0' width='200px'>
                        <Tbody>
                            <Tr>
                                <Td>edition(s)</Td>
                                <Td textAlign='right'>{nftSelected.Editions}</Td>
                            </Tr>
                            <Tr>
                                <Td>type</Td>
                                <Td textAlign='right'>{nftSelected.Type}</Td>
                            </Tr>
                            <Tr>
                                <Td>royalties</Td>
                                <Td textAlign='right'>{nftSelected.Royalties}</Td>
                            </Tr>
                            <Tr>
                                <Td>link</Td>
                                <Td textAlign='right'>{nftSelected.Link}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Spacer/>
                    <VStack align='flex-start'>
                        <Text >add this to your collection for</Text>
                        <HStack>
                            <Input value={nftSelected.Price} readOnly borderRadius='50'></Input>
                            <Button backgroundColor='#ED3259' borderRadius='50' width='150px' className='gradient'>buy</Button>
                        </HStack>
                    </VStack>
                </HStack>
                
            </VStack>
        </Flex>





<Grid 
            h='600px'
            width='1120px'
            alignContent='center'
            templateRows="repeat(2,1fr)"
            templateColumns="repeat(3,1fr)"
            gap='5' 
            backgroundColor='#19323C'
            textColor='white'  
            textAlign='left' 
        >
            <GridItem rowSpan={1} colSpan={1}> <Image src={nftSelected.Url} /></GridItem>
            <GridItem rowSpan={1} colSpan={2}>
                <Heading as='h1' size='2xl' color='#F2545B'>{nftSelected.Title}</Heading>
                <br/>
                <Heading as='h2' size='xl' color='#A93F55'>@ {nftSelected.Artist}</Heading>
                <br/>
                <Text>{nftSelected.Desc}</Text>
            </GridItem>
            <GridItem rowSpan={2} colSpan={1}>
                <Table size='sm' mx='0' width='200px'>
                    <Tbody>
                        <Tr>
                            <Td>edition(s)</Td>
                            <Td textAlign='right'>{nftSelected.Editions}</Td>
                        </Tr>
                        <Tr>
                            <Td>type</Td>
                            <Td textAlign='right'>{nftSelected.Type}</Td>
                        </Tr>
                        <Tr>
                            <Td>royalties</Td>
                            <Td textAlign='right'>{nftSelected.Royalties}</Td>
                        </Tr>
                        <Tr>
                            <Td>link</Td>
                            <Td textAlign='right'>{nftSelected.Link}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </GridItem>

        </Grid>