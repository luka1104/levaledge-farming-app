import React from 'react'
import {
    Text,
    Flex,
    Center,
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortBy = () => {
    return (
        <>
            <Flex>
                <Text color='white'>Sort By:</Text>
                <Button ml='15px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">Default</Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">TVL</Button>
                <Button ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='32px' color="white">APY</Button>
                <Menu>
                    <MenuButton ml='10px' bg="rgba(0,0,0,0.25)" p='12px' fontSize='14px' height='35px' w='120px' color="white" as={Button} rightIcon={<BsChevronDown />}>
                        <Text pr='42px' pb='4px'>More</Text>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </>
    )
}

export default SortBy
