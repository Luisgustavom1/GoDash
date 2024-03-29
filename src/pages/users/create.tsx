import Link from 'next/link';
import { Box, Flex, Heading, Divider, SimpleGrid, VStack, HStack, Button } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Input } from '../../components/Form/input';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { useMutation } from 'react-query';
import { api } from '../../services/api';
import queryClient from '../../services/queryClient';
import { useRouter } from 'next/dist/client/router';

type CreateUserFormData = {
    email: string;
    name: string;
    password: string;
    password_confirmation: string;
}

interface CreateResponse {
    data: {
        user: CreateUserFormData
    }
}

const createUserSchema = yup.object().shape({
    name: yup.string().required('Name é obrigatório'),
    email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
    password: yup.string().required('Password é obrigatório').min(6, 'Mínimo de 6 caracteres'),
    password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas devem ser iguais'),
})

export default function CreateUser() {
    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData) => {
        const response: CreateResponse = await api.post('users', {
            user: {
                ...user,
                created_at: new Date(),
            }
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        }
    })

    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserSchema),
    });

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await createUser.mutateAsync(values);

        router.push('/users')
    };

    return (
        <Box>
            <Header /> 

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box 
                    flex='1' 
                    as='form' 
                    borderRadius={8} 
                    p={['6', '8']} 
                    bg='gray.800'
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size='lg' fontWeight='normal'>Criar Usuário</Heading>

                    <Divider my='6' borderColor='gray.700'/>

                    <VStack spacong='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input 
                                name='name' 
                                label='Nome completo'
                                error={formState.errors.name}
                                {...register('name')}
                            />
                            <Input 
                                name='email' 
                                type='email' 
                                label='E-mail'
                                error={formState.errors.email}
                                {...register('email')}
                            />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6', '8']} w='100%'>
                            <Input 
                                name='password' 
                                type='password' 
                                label='Senha'
                                error={formState.errors.password}
                                {...register('password')}    
                            />
                            <Input 
                                name='password_confirmation' 
                                type='password' 
                                label='Confirmação de senha'
                                error={formState.errors.password_confirmation}
                                {...register('password_confirmation')}
                            />
                        </SimpleGrid>
                    </VStack> 
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button colorScheme='whiteAlpha'>Cancelar</Button>                            
                            </Link>
                            <Button 
                                type='submit' 
                                colorScheme='pink'
                                isLoading={formState.isSubmitting}
                                >Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>  
            </Flex>
        </Box>  
    );
}