import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { trpc } from '../../server/utils/trpc';
import * as Yup from 'yup';
import NextError from 'next/error';
import { UpdateDetailsForm } from '../../components/UpdateDetailsForm1';

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
          <UpdateDetailsForm />
        </Box>
      </Stack>
    </Flex>
  );
}
