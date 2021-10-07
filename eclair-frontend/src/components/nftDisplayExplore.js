import {Heading, SimpleGrid } from '@chakra-ui/layout';
import { Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Card from '../components/card';
import nftExplore from '../nftExplore';

function nftdisplay(){
    return (
        <div className='nftdisplaypage'>
            <Heading color='white' fontFamily='Fira Code' textAlign='left'>Explore Something new...</Heading>
            <br/>
            <br/>
                <SimpleGrid columns={5} justifyContent='center'>
                        {nftExplore.map(nftItem => (
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
