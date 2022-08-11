import React from 'react'
import Assets from '../sortingOptions/assets/assets'
import Platform from '../sortingOptions/platform'
import Search from '../sortingOptions/search'
import SortBy from '../sortingOptions/sortBy'
import {
    Image,
    Text,
    Flex,
    Center,
    Grid,
    GridItem,
} from '@chakra-ui/react';

const SortingMenu = () => {
    return (
        <>
            <Center fontSize='15px' fontWeight='500' pt='30px'>
                <Grid
                    width="95%"
                    borderBottom='1px'
                    borderColor='#455C62'
                    templateAreas={`
                        "platform sort"
                        "assets assets"
                        "search search"
                    `}
                >
                    <GridItem area={'platform'}>
                        <Platform />
                    </GridItem>
                    <GridItem area={'sort'}>
                        <SortBy />
                    </GridItem>
                    <GridItem area={'assets'} pt='10px'>
                        <Assets /> 
                    </GridItem>
                    <GridItem area={'search'} pt='10px'>
                        <Search />
                    </GridItem>
                </Grid>
            </Center>
        </>
    )
}

export default SortingMenu
