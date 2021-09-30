import { Flex, Button, Stack } from "@chakra-ui/react";

import Input from '../components/Form/input';

export default function SignIn() {
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
          >
          <Stack>
            <Input
              type='text'
              name='email'
              placeholder='Email'
            />
            <Input 
              type='password'
              name='password'
              placeholder='password'
            />
          </Stack>
          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
          >
            Enviar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
