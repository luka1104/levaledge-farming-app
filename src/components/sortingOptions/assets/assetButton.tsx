import React from 'react'
import {
    Text,
    Flex,
    Center,
    Box,
    Button,
    Image,
} from '@chakra-ui/react';

const AssetButton = (props: any) => {
    return (
        <>
            <Button ml='10px' bg="rgba(0,0,0,0.25)" p='10px' fontSize='14px' height='32px' color="white">
                <Image
                    boxSize='16px'
                    objectFit='cover'
                    borderRadius='100'
                    mr='5px'
                    src={props.img}
                    alt={props.name}
                />
                {props.name}
            </Button>
        </>
    )
}

export default AssetButton
