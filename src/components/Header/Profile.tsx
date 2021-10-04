import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData: boolean;
}

export const Profile = ({ showProfileData }: ProfileProps) => {
    return (
        <Flex align='center'>
            { showProfileData && (
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
            ) }

            <Avatar 
                size='md' 
                name='Luis Gustavo' 
                src='https://github.com/luisgustavom1.png' 
            />
        </Flex>
    );
}