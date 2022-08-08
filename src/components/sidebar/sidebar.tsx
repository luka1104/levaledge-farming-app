import React from 'react'
import {
  Button,
  Stack,
  Spacer,
  Link,
  Center,
  Box,
  Image,
} from '@chakra-ui/react'
import NavItem from './navItem'
import { AiOutlineDashboard } from 'react-icons/ai';
import { TbShovel, TbMathSymbols } from 'react-icons/tb';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { BsFillFlagFill } from 'react-icons/bs';
import { GiTrophy } from 'react-icons/gi';
import SideFooter from '../sideFooter/sideFooter'

const Sidebar = () => {
  return (
    <>
      <Stack height='100%' width='100%' bg="rgba(255,255,255,0.1)">
        <Link href='/' fontSize="4xl" fontWeight="300" width='100%' color='white' p='20px'>
          <Center>
            <Image 
              src='https://pbs.twimg.com/profile_images/1458984632364707840/b8oON0Za_400x400.jpg'
              alt='Logo Image' 
              boxSize='43px'
              objectFit='cover'
              borderRadius='100'
              mr='4px'
            />Farming App
          </Center>
        </Link>
        <NavItem name="My Page" icon={AiOutlineDashboard} navlink="/mypage" />
        <NavItem name="Farm" icon={TbShovel} navlink="/farm" />
        <NavItem name="Lend" icon={RiMoneyDollarCircleLine} navlink="/lend" />
        <Box border='1px' borderColor='#bbb' opacity='0.2' ></Box>
        <NavItem name="Calculator" icon={TbMathSymbols} navlink="/calculator" />
        <NavItem name="Vote" icon={BsFillFlagFill} navlink="/vote" />
        <NavItem name="Contributions" icon={GiTrophy} navlink="/contributions" />
        <Spacer />
        <SideFooter />
      </Stack>
    </>
  )
}

export default Sidebar
