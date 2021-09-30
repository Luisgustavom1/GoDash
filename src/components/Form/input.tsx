import React from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string
}

const Input = ({ name, label, ...rest }: InputProps) => {
  return(
    <FormControl>
        { !!label && <FormLabel htmlFor='email'>{label}</FormLabel> }
        <ChakraInput 
            name={name}
            id={label}
            type='text'
            bg='gray.900'
            focusBorderColor='pink.500'
            variant='filled'
            size='lg'
            _hover={{
                bg:'gray.900'
            }}
            {...rest}
        />
    </FormControl>
  );
}

export default Input;