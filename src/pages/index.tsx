import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";

export default function Home() {
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
            <FormControl>
              <FormLabel htmlFor='email'>E-mail</FormLabel>
              <Input 
                name='email'
                id='email'
                type='text'
                bg='gray.900'
                focusBorderColor='pink.500'
                variant='filled'
                size='lg'
                _hover={{
                  bg:'gray.900'
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input 
                name='email'
                id='password'
                type='text'
                bg='gray.900'
                focusBorderColor='pink.500'
                variant='filled'
                size='lg'
                _hover={{
                  bg:'gray.900'
                }}
              />
            </FormControl>
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