import React from 'react'
import UpperFarmContainer from './upperFarmContainer'
import {
  Image,
  Text,
  Flex,
  Box,
  extendTheme
} from '@chakra-ui/react';
import SortingMenu from './sortingMenu'

const Farm = () => {
  return (
    <>
      <UpperFarmContainer valueLocked="72,442,416" />
      <Box bg="rgba(0,0,0,0.4)" width='97%' height='1000px' mt='20px' borderRadius="20px" border='1px' borderColor='#455C62' mb='20px'>
        <SortingMenu />
      </Box>
    </>
  )
}

export default Farm
