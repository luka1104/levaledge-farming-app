import React from 'react'
import {
    Text,
    Flex,
    Center,
    Box,
    Button,
    Image,
} from '@chakra-ui/react';

const Assets = () => {
    return (
        <>
            <Flex>
                <Text color='white'>Assets:</Text>
                <Button ml='15px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">
                    All
                </Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='10px' fontSize='14px' height='32px' color="white">
                    <Image
                        boxSize='16px'
                        objectFit='cover'
                        borderRadius='100'
                        mr='5px'
                        src='https://bitcoin.org/img/icons/opengraph.png?1656252469'
                        alt='bitcoin'
                    />
                    BTC
                </Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">
                    <Image
                        boxSize='16px'
                        objectFit='cover'
                        borderRadius='100'
                        mr='5px'
                        src='https://bitcoin.org/img/icons/opengraph.png?1656252469'
                        alt='bitcoin'
                    />
                    ETH
                </Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">
                    <Image
                        boxSize='16px'
                        objectFit='cover'
                        borderRadius='100'
                        mr='5px'
                        src='https://bitcoin.org/img/icons/opengraph.png?1656252469'
                        alt='bitcoin'
                    />
                    SOL
                </Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">
                    <Image
                        boxSize='16px'
                        objectFit='cover'
                        borderRadius='100'
                        mr='5px'
                        src='https://bitcoin.org/img/icons/opengraph.png?1656252469'
                        alt='bitcoin'
                    />
                    stSOL
                </Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">
                    <Image
                        boxSize='16px'
                        objectFit='cover'
                        borderRadius='100'
                        mr='5px'
                        src='https://bitcoin.org/img/icons/opengraph.png?1656252469'
                        alt='bitcoin'
                    />
                    mSOL
                </Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">
                    <Image
                        boxSize='16px'
                        objectFit='cover'
                        borderRadius='100'
                        mr='5px'
                        src='https://bitcoin.org/img/icons/opengraph.png?1656252469'
                        alt='bitcoin'
                    />
                    USDC
                </Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">USDT</Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">ORCA</Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">SRM</Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">RAY</Button>
            </Flex>
        </>
    )
}

export default Assets
