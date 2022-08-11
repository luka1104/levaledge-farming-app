import React from 'react'
import {
    Image,
    Text,
    Flex,
    Box,
    extendTheme,
    Button,
    Center,
    Icon,
    Spacer,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react';
import {BiInfoCircle} from 'react-icons/bi'

const FarmItem = (props: any) => {
    return (
        <>
            <Flex w="95%" mt="10px" h="170px" >
                <Box mt='auto' mb='auto' ml="3%" w="20%">
                    <Flex>
                        <Image
                            boxSize='16px'
                            objectFit='cover'
                            borderRadius='100'
                            mr='5px'
                            src={props.img}
                            alt={props.name}
                        />
                        <Image
                            boxSize='16px'
                            objectFit='cover'
                            borderRadius='100'
                            mr='5px'
                            src={props.img2}
                            alt={props.name2}
                        />
                        <Text color="white" opacity="0.8" fontSize="15px">{props.name}-{props.name2}</Text>
                    </Flex>
                    <Text color="white" opacity="0.8" fontSize="15px" fontWeight="600">TVL&nbsp;&nbsp;${props.tvl}<Icon as={BiInfoCircle} /></Text>
                </Box>
                <Box mt='auto' mb='auto' w="12%">
                    <Flex>
                        <Text fontSize="16px" bgGradient='linear(to-r, #55D2F4, #BA71D4)' bgClip='text'>{props.apy}%</Text>
                        <Icon color="white" opacity="0.8" fontSize="15px" as={BiInfoCircle} />
                    </Flex>
                    <Text color="white" opacity="0.8" fontSize="14px" as='del'>{props.oldApy}%</Text>
                </Box>
                <Box mt='auto' mb='auto' w="28%" mr='10px'>
                    <Flex color="white" opacity="0.8" fontSize="14px" mb="10px">
                        <Text>Yield Farming:</Text>
                        <Spacer />
                        <Text>{props.aprYieldFarming}%</Text>
                    </Flex>
                    <Flex color="white" opacity="0.8" fontSize="14px" mb="10px">
                        <Text>Trading Fee Income:<Icon as={BiInfoCircle} /></Text>
                        <Spacer />
                        <Text>{props.aprTradingFeeIncome}%</Text>
                    </Flex>
                    <Flex color="white" opacity="0.8" fontSize="14px" mb="10px">
                        <Text>Borrowing Interest:</Text>
                        <Spacer />
                        <Text>{props.aprBorrowingInterest}%</Text>
                    </Flex>
                    <Flex mb="10px">
                        <Text color="white" opacity="0.8" fontSize="14px">Total APR:</Text>
                        <Spacer />
                        <Text fontSize="14px" bgGradient='linear(to-r, #55D2F4, #BA71D4)' bgClip='text'>{props.totalAPR}%</Text>
                    </Flex>
                    <Flex color="white" opacity="0.8" fontSize="14px" mb="10px">
                        <Text>Daily APR:</Text>
                        <Spacer />
                        <Text>{props.dailyAPR}%</Text>
                    </Flex>
                </Box>
                <Flex mt='auto' mb='auto' w="20%">
                    <NumberInput color='white' bg='rgba(0, 0, 0, 0.1)' size='md' w='100px' defaultValue={3} min={1}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <Button color='white' ml="80px" borderRadius='25%' w='300px' bgGradient='linear(to-r, #E23E8E, #5264E3)'>Farm</Button>
                    <Button color="white" ml="20px" borderRadius='25%' w='50px' bgGradient='linear(to-r, #E23E8E, #5264E3)'>test</Button>
                </Flex>
            </Flex>
        </>
    )
}

export default FarmItem
