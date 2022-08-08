import React from 'react'
import {
  Button,
  Flex,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from '@chakra-ui/react'
import { TbWorld } from 'react-icons/tb';
import { BsMegaphone, BsChevronDown } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { MdOutlineVerifiedUser } from 'react-icons/md';


const Navbar = () => {
  return (
    <>
      <Flex minWidth='max-content' alignItems='center' gap='5' height='100%' padding='20px'>
        <Spacer />
          <Menu>
            <MenuButton bg='#1F2D45' color='white' as={Button} rightIcon={<BsChevronDown />}>
              <Icon verticalAlign='-15%' as={MdOutlineVerifiedUser} />&nbsp;&nbsp;Get Cover
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
          <Button bg='#1F2D45' color='white'><BsMegaphone /></Button>
          <Button bg='#1F2D45' color='white'><TbWorld /></Button>
          <Button bgGradient='linear(to-br, #0EA4FF, #0AB7AA)' color='white'><BiWallet />&nbsp;&nbsp;Connect Wallet</Button>
      </Flex>
    </>
  )
}

export default Navbar
