import React, { ReactNode } from 'react'
import {
    Text,
    Flex,
    Center,
    Box,
    FormControl,
    FormLabel,
    Icon,
} from '@chakra-ui/react';
import Select from 'react-select'
import { BiSearch } from 'react-icons/bi';
import { components } from 'react-select';

const Search = () => {
    const options = [
        { value: "blue", label: "Blue"　},
        { value: "purple", label: "Purple" },
        { value: "red", label: "Red" }
    ];
    // @ts-ignore
    const Control = ({ children, ...props }) => (
        // @ts-ignore
        <components.Control {...props}>
          <Icon ml='10px' as={BiSearch} /> {children}
        </components.Control>
    );

    const customStyles = {
        control: (base: any) => ({
            ...base,
            background: "rgba(0,0,0,0.25)",
            border: 'none',
            marginRight: '15px',
            padding: '0px',
            color: 'white',
            width: '220px'
        })
      };
    return (
        <>
            <Box>
                <FormControl>
                    <Flex mb='10px'>
                        <FormLabel color='white'>
                            Search:
                        </FormLabel>
                        <Box width='300px'>
                            <Select 
                            options={options}
                            styles={customStyles}
                            placeholder="Filter by symbol"
                            components={{
                                Control,
                                DropdownIndicator: () => null,
                                IndicatorSeparator: () => null,
                            }} 
                        />
                        </Box>
                    </Flex>
                </FormControl>
            </Box>
        </>
    )
}

export default Search
