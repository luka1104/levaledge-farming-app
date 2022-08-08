import React from 'react'
import {
    Grid,
    GridItem,
    Flex,
    Link,
    Text,
    Center,
    Button,
    Icon
} from '@chakra-ui/react'
import SnsIcon from './snsLink'
import { BsTwitter, BsMedium, BsYoutube, BsGithub } from 'react-icons/bs';
import { FaTelegramPlane, FaDiscord } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';


const SideFooter = () => {
    return (
        <>
            <Center pb='20px'>
                <Grid bg="rgba(255,255,255,0.1)" width="80%" borderRadius='20' alignItems='center' color='white' opacity='0.8' height='150px'>
                    <GridItem textAlign="center" fontSize='23px'>
                        <SnsIcon snsIcon={BsTwitter} snsLink="https://twitter.com/" />
                        <SnsIcon snsIcon={FaTelegramPlane} snsLink="https://t.me/" />
                        <SnsIcon snsIcon={FaDiscord} snsLink="https://discord.com/" />
                        <SnsIcon snsIcon={BsMedium} snsLink="https://medium.com/" />
                        <SnsIcon snsIcon={BsYoutube} snsLink="https://www.youtube.com/" />
                        <SnsIcon snsIcon={BsGithub} snsLink="https://github.com/" />
                    </GridItem>
                    <GridItem textAlign="left" pl='20px' fontSize='15px'>
                        <Link><Icon as={IoDocumentText} verticalAlign='-20%' mr='10px' fontSize='20px' />Farming Docs</Link>
                    </GridItem>
                    <GridItem textAlign="left" pl='20px' fontSize='15px'>
                        <Link><Icon as={MdMail} verticalAlign='-20%' mr='10px' fontSize='20px' />Contact Us</Link>
                    </GridItem>
                    <GridItem textAlign="center" pb='5px'>
                        <Text fontSize="13px" fontWeight='300'>@2022 Farming Protocol&nbsp;<Button p="2px" bg="rgba(255,255,255,0.3)" size="20px" >Audits</Button></Text>
                    </GridItem>
                </Grid>
            </Center>
        </>
    )
}

export default SideFooter
