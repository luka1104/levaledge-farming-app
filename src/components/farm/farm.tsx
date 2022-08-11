import React from 'react'
import UpperFarmContainer from './upperFarmContainer'
import FarmItem from '../farmItem/farmItem'
import {
  Image,
  Text,
  Flex,
  Box,
  extendTheme,
  Button,
  Center,
  Icon,
} from '@chakra-ui/react';
import SortingMenu from './sortingMenu'
import { BiInfoCircle } from 'react-icons/bi';
import { FaSort } from 'react-icons/fa';

const Farm = () => {
  return (
    <>
      <UpperFarmContainer valueLocked="72,442,416" />
      <Box bg="rgba(0,0,0,0.4)" width='97%' height='1000px' mt='20px' borderRadius="20px" border='1px' borderColor='#455C62' mb='20px'>
        <SortingMenu />
        <Center>
          <Flex color="white" width="95%" fontSize="14px" opacity="0.8">
            <Text mr="14%" mt='15px'>Strategy</Text>
            <Button mr="5%" mt='5px' bg='rgba(0,0,0,0.05)'>APY<Icon as={BiInfoCircle} /><Icon as={FaSort} /></Button>
            <Text mr="25%" mt='15px'>APR</Text>
            <Text mr="20%" mt='15px'>Leverage</Text>
          </Flex>
        </Center>
        <FarmItem
          name="ZBC"
          name2="USDC"
          img="https://lsvp.com/wp-content/uploads/2022/02/zebec-logo.png"
          img2="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" 
          tvl="172.18K"
          apy="38,481"
          oldApy="633.11"
          aprYieldFarming="595.41"
          aprTradingFeeIncome="28.83"
          aprBorrowingInterest="-20.3"
          totalAPR="603.94"
          dailyAPR="1.65"
        />
        <FarmItem
          name="ZBC"
          name2="USDC"
          img="https://lsvp.com/wp-content/uploads/2022/02/zebec-logo.png"
          img2="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" 
          tvl="172.18K"
          apy="38,481"
          oldApy="633.11"
          aprYieldFarming="595.41"
          aprTradingFeeIncome="28.83"
          aprBorrowingInterest="-20.3"
          totalAPR="603.94"
          dailyAPR="1.65"
        />
        <FarmItem
          name="ZBC"
          name2="USDC"
          img="https://lsvp.com/wp-content/uploads/2022/02/zebec-logo.png"
          img2="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" 
          tvl="172.18K"
          apy="38,481"
          oldApy="633.11"
          aprYieldFarming="595.41"
          aprTradingFeeIncome="28.83"
          aprBorrowingInterest="-20.3"
          totalAPR="603.94"
          dailyAPR="1.65"
        />
        <FarmItem
          name="ZBC"
          name2="USDC"
          img="https://lsvp.com/wp-content/uploads/2022/02/zebec-logo.png"
          img2="https://s2.coinmarketcap.com/static/img/coins/200x200/3408.png" 
          tvl="172.18K"
          apy="38,481"
          oldApy="633.11"
          aprYieldFarming="595.41"
          aprTradingFeeIncome="28.83"
          aprBorrowingInterest="-20.3"
          totalAPR="603.94"
          dailyAPR="1.65"
        />
      </Box>
    </>
  )
}

export default Farm
