import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, error, ...rest }, ref) => {
  return(
    <FormControl isInvalid={!!error}>
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
          ref={ref}
          {...rest}
        />
        {
          !!error && (
            <FormErrorMessage>
              {error.message}
            </FormErrorMessage>
          )
        }
    </FormControl>
  );
}

export const Input = forwardRef(InputBase);