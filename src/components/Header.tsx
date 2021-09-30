import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

const Header: React.FC = () => {
  return(
      <Flex
        as='header'
        w='100%'
        maxWidth={1480}
        h='20'
        mx='auto'
        mt='4'
        px='6'
        align='center'
      >
          <Text
            fontSize='3xl'
            fontWeight='bold'
            letterSpacing='tight'
            w='64'
          >
            Dashgo
            <Text
                as='span'
                color='pink.500'
                ml='1'
            >
                .
            </Text>
          </Text>

        <Flex
            as='label'
            flex='1'
            maxWidth={400}
            py='4'
            px='8'
            ml='6'
            bg='gray.800'
            color='gray.200'
            position='relative'
            alignSelf='center'
            borderRadius='full'
        >
            <Input 
            variant='unstyled'
            color='gray.50'
            placeholder='Buscar na plataforma'
            px='4'
            mr='4'
            _placeholder={{
                color: 'gray.400'
            }}
            />
            <Icon as={RiSearchLine} font-size='20'/>
        </Flex>
      
        <Flex
            align='center'
            ml='auto'
        >
        <HStack
            spacing='8'
            mx='8'
            pr='8'
            py='1'
            color='gray.300'
            borderRightWidth={1}
            borderColor='gray.700'
        >
            <Icon as={RiNotificationLine} fontSize='20'/>
            <Icon as={RiUserAddLine} fontSize='20'/>
        </HStack>
        </Flex>
      
        <Flex align='center'>
            <Box
                textAlign='right'
                mr='4'
            >
                <Text>Luis Gustavo</Text>
                <Text 
                    fontSize='small' 
                    color='gray.300'>
                    luisgustavomacedo13@gmail.com
                </Text>
            </Box>

            <Avatar 
                size='md' 
                name='Luis Gustavo' 
                src='https://github.com/luisgustavom1.png' 
            />
        </Flex>
      </Flex>
  );
}

export default Header;