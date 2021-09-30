import dynamic from 'next/dynamic';
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react';

import Header from '../components/Header';
import Sidebar from '../components/Siderbar';

const Charts = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const options = {};

const series = [
  {name: 'series1', data: [314, 54, 135, 98, 130, 231, 60]}
];

const Dashboard: React.FC = () => {
  return(
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex
        w='100%'
        maxWidth={1480}
        mx='auto'
        my='6'
        px='6'
      >
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            // pb='4'
          >
            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
            <Charts options={options} series={series} type='area' height={160}/>
          </Box>
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            // pb='4'
          >
            <Text fontSize='lg' mb='4'>Taxa de aberturas</Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;