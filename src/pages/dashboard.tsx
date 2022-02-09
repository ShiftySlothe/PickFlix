import type { NextPage } from 'next';
import Dashboard from '../page-components/Dashboard/Dashboard';
import CheckLoggedIn from '../components/Helpers/Next-Auth/CheckLoggedIn';
import { Flex, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <CheckLoggedIn>
      <Flex
        align={'center'}
        justify={'center'}
        w={'100vw'}
        display={{ base: 'block', md: 'none' }}
      >
        <Text>This site is not currently optimised for mobile.</Text>
      </Flex>
      <Dashboard />
    </CheckLoggedIn>
  );
};

export default Home;
