import React, { useState } from 'react'
import {
    Button,
    Stack,
    Spacer,
    Link,
    Flex,
    Icon,
    Image,
    transition,
} from '@chakra-ui/react'
import { useRouter } from "next/router";

const NavItem = (props: any) => {
    const router = useRouter(); 
    return (
        <>
            <Link color='white' href={props.navlink} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                <Flex
                    align="center"
                    height='40px'
                    opacity={router.pathname === props.navlink ? '0.9' : '0.65'}
                    borderRight={router.pathname === props.navlink ? '5px solid' : 'none' }
                    p="6"
                    width='100%'
                    borderRadius={router.pathname === props.navlink ? '0' : 'none'}
                    role="group"
                    cursor="pointer"
                    _hover={{
                    opacity:'0.9',
                    borderRight:'5px solid',
                    borderColor:'white',
                    borderRadius:'0',
                    transition:'400ms'
                    }}
                >
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                        color: 'white',
                        }}
                        as={props.icon}
                    />
                    {props.name}
                </Flex>
            </Link>
        </>
    )
}

export default NavItem
