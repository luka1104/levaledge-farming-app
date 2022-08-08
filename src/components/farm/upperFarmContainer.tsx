import React from 'react'
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
    Grid,
    GridItem,
    Box,
    Button,
    Spacer,
} from '@chakra-ui/react';
import Highlights from './highlights'
import { BiInfoCircle } from 'react-icons/bi';
import { HiExternalLink } from 'react-icons/hi';

const UpperFarmContainer = (props: any) => {
    return (
        <>
            <Grid   
            templateAreas={`
                "highlights value"
                "menus menus"
            `}
            >   
                <GridItem area={'highlights'}>
                    <Flex width="97%" bgGradient='linear(to-br, #343C66, #333754)' height='110px' borderRadius='20'>
                        <Box p='20px'>
                            <Text fontSize="20px" color='white'>Lending APY Highlights</Text>
                            <Button mt='10px' height='35px' width='110px' bgGradient='linear(to-r, #E23E8E, #5264E3)' color='white' borderRadius='20'>Deposit</Button>
                        </Box>
                        <SimpleGrid columns={2} pl='20px' spacingX={90}>
                            <Highlights chainIcon="https://assets.coingecko.com/coins/images/18369/large/logo_-_2021-09-15T100934.765.png?1631671781" chainName="stSOL" apr="9.58" />
                            <Highlights chainIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/13632.png" chainName="GENE" apr="127.81" />
                            <Highlights chainIcon="https://cryptototem.com/wp-content/uploads/2022/03/zebec-logo.jpg" chainName="ZBC" apr="189.81" />
                            <Highlights chainIcon="https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png" chainName="RAY" apr="16.81" />
                        </SimpleGrid>
                    </Flex>
                </GridItem>
                <GridItem area={'value'}>
                    <Box bg='#1A2B44'  width='90%' height='110px' borderRadius='20'>
                        <Text color='white' fontSize='20px' pt='15px' pl='30px'>Total Value Locked<Icon verticalAlign='-12%' ml='5px' as={BiInfoCircle} /></Text>
                        <Text fontSize='35px' pt='3px' pl='30px' bgGradient='linear(to-r, #55D2F4, #BA71D4)' bgClip='text'>${props.valueLocked}</Text>
                    </Box>
                </GridItem>
                <GridItem area={'menus'} mt='40px'>
                    <Button mr='15px' bgGradient='linear(to-r, #266D6F, #2E2E41, #5D3631)' color='white' width='180px' height='56px' borderRadius='12'>
                        Main
                    </Button>
                    <Button mr='15px' bg="#1A1C30" color='#8F98A8' width='180px' height='56px' borderRadius='12'>
                        Innovation Zone
                    </Button>
                    <Button bg="#1A1C30" color='#8F98A8' p='1' width='180px' height='56px' borderRadius='12'>
                        Farming Strategies<Icon fontSize='25px' as={HiExternalLink} />
                    </Button>
                </GridItem>
            </Grid>
        </>
    )
}

export default UpperFarmContainer
