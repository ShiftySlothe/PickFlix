import {
  Flex,
  Box,
  Stack,
  Link,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { AddFriendsForm } from '../../components/SignUpFlowForms/AddFriendsForm';
import { GroupsForm } from '../../components/SignUpFlowForms/CreateGroupsForm';

export default function Home() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Update your details</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <GroupsForm />
        </Box>
      </Stack>
    </Flex>
  );
}
