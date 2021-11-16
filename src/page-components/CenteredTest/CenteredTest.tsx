import {
  Flex,
  Box,
  Stack,
  Center,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Group from '../../components/Groups/Group/Group';
import Groups from '../../components/Groups/Groups';

export default function CenteredTest() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Testy mcTestFace</Heading>
        </Stack>
        <Center
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Groups />
        </Center>
      </Stack>
    </Flex>
  );
}
