import { GetServerSideProps } from "next";
import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../components/Form/input';
import { withSSRGuest } from "../Utils/withSSRGuest";

type SignFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Password obrigatório')
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  }); 

  const handleSignIn: SubmitHandler<SignFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(values);
  };
  
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
              {...register('email')}
              error={formState.errors.email}
            />
            <Input 
              type='password'
              name='password'
              placeholder='password'
              {...register('password')}
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
};

export const getServerSideProps: GetServerSideProps = withSSRGuest(async (ctx) => {

  return {
    props: {}
  }
})
