import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from '../components/Form/input';

type SignFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm(); 

  const handleSignIn: SubmitHandler<SignFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('oi', values);
  };
  console.log(formState.errors);
  
  return (
    <>
      <Flex
        w='100vw'
        h='100vh'
        align='center'
        justify='center'
      >
        <Flex 
          as='form'
          width='100%'
          maxWidth={360}
          bg='gray.800'
          p='8'
          borderRadius={8}
          flexDirection='column'
          onSubmit={handleSubmit(handleSignIn)}
          >
          <Stack>
            <Input
              type='text'
              name='email'
              placeholder='Email'
              {...register('email', {
                required: 'E-mail is required'
              })}
              error={formState.errors.email}
            />
            <Input 
              type='password'
              name='password'
              placeholder='password'
              {...register('password', { 
                required: 'Password is required'
              })}
              error={formState.errors.password}
            />
          </Stack>
          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            isLoading={formState.isSubmitting}
          >
            Enviar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
