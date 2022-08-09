import React from 'react'
import {
    Text,
    Flex,
    Center,
    Box,
    Button,
} from '@chakra-ui/react';

const Platform = () => {
    return (
        <>
            <Flex>
                <Text color='white'>Platform:</Text>
                <Button ml='15px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">All</Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">Raydium</Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">Orca</Button>
            </Flex>
        </>
    )
}

export default Platform
