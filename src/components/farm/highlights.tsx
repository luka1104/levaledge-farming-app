import React from 'react'
import {
    Image,
    Text,
    Flex,
} from '@chakra-ui/react';

const Highlights = (props: any) => {
    return (
        <Flex>
            <Image alt='Logo Image' 
              boxSize='28px'
              objectFit='cover'
              borderRadius='100'
              mr='10px'
              mt='auto' mb='auto'
              src={props.chainIcon} 
            />
            <Text mr='20px' mt='auto' mb='auto' color='white'>{props.chainName}</Text>
            <Text fontSize='20px' mr='10px' mt='auto' mb='auto' bgGradient='linear(to-r, #55D2F4, #BA71D4)' bgClip='text'>{props.apr}%</Text>
        </Flex>
    )
}

export default Highlights
