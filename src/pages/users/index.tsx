import Link from 'next/link';

import { Box, Flex, Heading, Button, Icon, Table, Thead, Checkbox, Tr, Th, Td, Tbody, Text, useBreakpointValue } from '@chakra-ui/react';
import { RiAddLine, RiEditLine } from 'react-icons/ri';

import Header from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import Sidebar from '../../components/Sidebar';

export default function UsersList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box>
            <Header /> 

            <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} p='8' bg='gray.800'>
                    <Flex mb='8' align='center' justifyContent='space-between'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                        <Link href='/users/create' passHref>
                            <Button 
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                                py='1'
                                px='2'
                            >
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th width='8' px='6' color='gray.300'>
                                    <Checkbox colorScheme='pink'/>
                                </Th>
                                <Th>Usuário</Th>
                                {isWideVersion && <Th>Data de Cadastro</Th>}
                                <Th width='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td p={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Luis Gustavo</Text>
                                        <Text fontSize='sm' color='gray.300'>luisgustavomacedo13@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>
                                    04 de Outubro, 2021
                                </Td> }
                                {isWideVersion && <Td>
                                    <Button 
                                        as='a'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiEditLine}/>}
                                        fontSize='sm'
                                        size='sm'
                                    >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td p={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Luis Gustavo</Text>
                                        <Text fontSize='sm' color='gray.300'>luisgustavomacedo13@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>
                                    04 de Outubro, 2021
                                </Td> }
                                {isWideVersion && <Td>
                                    <Button 
                                        as='a'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiEditLine}/>}
                                        fontSize='sm'
                                        size='sm'
                                    >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td p={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Luis Gustavo</Text>
                                        <Text fontSize='sm' color='gray.300'>luisgustavomacedo13@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>
                                    04 de Outubro, 2021
                                </Td> }
                                {isWideVersion && <Td>
                                    <Button 
                                        as='a'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiEditLine}/>}
                                        fontSize='sm'
                                        size='sm'
                                    >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                            <Tr>
                                <Td p={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink'/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Luis Gustavo</Text>
                                        <Text fontSize='sm' color='gray.300'>luisgustavomacedo13@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>
                                    04 de Outubro, 2021
                                </Td> }
                                {isWideVersion && <Td>
                                    <Button 
                                        as='a'
                                        colorScheme='purple'
                                        leftIcon={<Icon as={RiEditLine}/>}
                                        fontSize='sm'
                                        size='sm'
                                    >
                                        Editar
                                    </Button>
                                </Td>}
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>  
    );
}