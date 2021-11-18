import Header from "./header";
import Footer from "./footer";
import { Input } from "@chakra-ui/input";
import { HStack, VStack, Flex, Text, Heading } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText } from "@chakra-ui/react"
import { useState, useEffect } from "react";
import { NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper } from "@chakra-ui/number-input";

const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    return (
        <div>
            <Input type='file' onChange={onSelectFile} />
            {selectedFile &&  <Image src={preview} h='40%' w='40%'/> }
        </div>
    )
}

function mint(){

    return(
        <div>
            <Header />
            <Heading as='h1' size='3xl' backgroundColor='#19323C' textColor='#F2545B' fontFamily='monospace'>create nft</Heading>
            <Flex backgroundColor='#19323C' textColor='white' padding='12' justifyContent='center' fontFamily='monospace'>
                <Flex backgroundColor='whiteAlpha.200' padding='12' rounded='3xl'>
                <FormControl isRequired width='70vh'>
                    <FormLabel>title</FormLabel>
                    <Input type='text' />
                    <FormLabel>description</FormLabel>
                    <Textarea maxLength='5000' placeholder="max 5000 chars" />
                    <FormLabel>royalties</FormLabel>
                    <Input type='number' />
                    <FormLabel>upload file</FormLabel>
                    {ImageUpload()}

                    <Button
                        mt={4}
                        backgroundColor="#F2545B"
                        type="submit"
                        _hover='false'
                        _focus='none' 
                        _active={{
                            textColor: '#F2545B',
                            backgroundColor: 'white'}}
                    >
                        submit
                    </Button>

                </FormControl>
                </Flex>
            </Flex>
            <Footer />
        </div>
    )
}

export default mint;