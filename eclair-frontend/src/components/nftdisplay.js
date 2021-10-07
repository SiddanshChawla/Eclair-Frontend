import {Heading, SimpleGrid } from '@chakra-ui/layout';
import Card from '../components/card';
import nft from '../nft';

function nftdisplay(){
    return (
        <div className='nftdisplaypage'>
            <Heading color='white' fontFamily='Fira Code' textAlign='left'>Recently added 🔥</Heading>
            <br/>
                <SimpleGrid columns={4} justifyContent='center'>
                    {nft.map(nftItem => (
                    <Card
                    key={nftItem.key}
                    nftUrl={nftItem.Url}
                    nftTitle={nftItem.Title}
                    nftPrice={nftItem.Price}
                    />
                ))}
                </SimpleGrid>
        </div>
    )
}

export default nftdisplay;
