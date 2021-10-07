import {Heading, SimpleGrid } from '@chakra-ui/layout';
import Card from '../components/card';
import data from '../data';

function nftdisplay(){
    return (
        <div className='nftdisplaypage'>
            <Heading color='white' fontFamily='Fira Code' textAlign='left'>Explore Something new...</Heading>
            <br/>
            <br/>
                <SimpleGrid columns={5} justifyContent='center'>
                        {data.nftExplore.map(nftItem => (
                        <Card
                        key={nftItem.key}
                        _id = {nftItem._id}
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
