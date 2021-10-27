import { Box, Center } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { trpc } from '../server/utils/trpc';
import { Formik, Form, Field, FieldProps, FormikHelpers } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import NextError from 'next/error';
import * as Yup from 'yup';
interface FormValues {
  userName: string;
}

const formValidationSchema = Yup.object({
  userName: Yup.string().required("Can't be empty"),
});

const formInitialValues = {
  userName: '',
};

export default function SearchUsersForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [usernameQuery, setUsernameQuery] = useState('');

  useEffect(() => {
    console.log(usernameQuery);
  }, [usernameQuery]);

  const onSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ) => {
    setUsernameQuery(values.userName);
    setSubmitting(false);
  };

  return (
    <>
      <Center w="100vw" h="100vh" bg="beige" overflow="hidden">
        <Button ml={1} onClick={onOpen}>
          Add friends
        </Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search for friend</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SearchForm onSubmit={onSubmit} />
            {!!usernameQuery && <SearchFormResponse username={usernameQuery} />}
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

interface SearchFormProps {
  onSubmit: (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>,
  ) => Promise<void>;
}
function SearchForm({ onSubmit }: SearchFormProps) {
  return (
    <Formik
      initialValues={formInitialValues}
      validationSchema={formValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Field name="userName">
            {({ field, form }: FieldProps) => (
              <FormControl
                isRequired
                isInvalid={!!form.errors.userName && !!form.touched.userName}
              >
                <FormLabel htmlFor="userName">Username</FormLabel>
                <Input
                  {...field}
                  id="userName"
                  placeholder="Sir Rob Stevenson"
                />
                <FormErrorMessage>{form.errors.userName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button type="submit" mb={3} width="50%">
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
}

interface SearchFormResponseProps {
  username: string;
}
function SearchFormResponse({ username }: SearchFormResponseProps) {
  const userMatchQuery = trpc.useQuery(['users.search', username]);
  const userMatches = userMatchQuery.data;

  useEffect(() => {
    console.log('USER MATCHES');
    console.log(userMatches);
  }, [userMatches]);

  // Handle loading/errors
  if (userMatchQuery.error) {
    return (
      <NextError
        title={userMatchQuery.error.message}
        statusCode={userMatchQuery.error.data?.httpStatus ?? 500}
      />
    );
  }
  if (userMatchQuery.status !== 'success') {
    return <>Loading...</>;
  }
  if (!userMatches) {
    return <NextError title={'No users found'} statusCode={404} />;
  }
  if (userMatches.length === 0) {
    return <Box>No users found</Box>;
  }

  return <Box>MATCH {userMatches[0].name}</Box>;
}
