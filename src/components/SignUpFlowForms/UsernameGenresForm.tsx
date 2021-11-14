import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { trpc } from '../../server/utils/trpc';
import * as Yup from 'yup';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { DetailsFormProgress } from '../../lib/enums';
import { UseQueryResult } from 'react-query';
import NextError from 'next/error';
import { Skeleton } from '@chakra-ui/skeleton';
import { Checkbox } from '@chakra-ui/checkbox';

interface FormProps {
  setFormProgress: React.Dispatch<React.SetStateAction<number>>;
}

export function UsernameGenresForm({ setFormProgress }: FormProps) {
  // Set on username input change, used in trpc query
  const [usernameQ, setUsernameQ] = useState('');
  const usernameQuery = trpc.useQuery(['users.getUsername']);
  const userMatchQuery = trpc.useQuery([
    'users.usernameOwnedElsewhere',
    usernameQ,
  ]);

  const updateUsername = trpc.useMutation('users.updateUsername');
  const addLikedGenres = trpc.useMutation('users.addLikedGenres');

  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is requried')
      .max(20, 'Username cannot be longer than 20 characters')
      .trim()
      .test(
        'username-backend-validation-waiting',
        'Checking username...',
        () => {
          if (userMatchQuery.isSuccess) {
            return true;
          }
          return false;
        },
      )
      .test('username-backend-validation', 'Username taken', () => {
        const userNameCheck = userMatchQuery.data;
        if (!userNameCheck || !userNameCheck.found) {
          return true;
        }
        return false;
      }),
    genres: Yup.array().min(1, 'You have to like something!'),
  });

  const onSubmit = async (values: { username: string; genres: number[] }) => {
    await updateUsername.mutateAsync(values.username);
    const reformattedGenres = values.genres.map((g) => ({
      id: g,
    }));
    await addLikedGenres.mutateAsync(reformattedGenres);
    setFormProgress(DetailsFormProgress.Second);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        genres: [] as number[],
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}
    >
      {(props) => (
        <Form>
          <Field name="username">
            {({ field, form }: FieldProps) => (
              <FormControl
                id="username"
                isInvalid={!!form.errors.username && !!form.touched.username}
                isRequired
              >
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  {...field}
                  type="text"
                  placeholder={
                    usernameQuery.data && usernameQuery.data.userName
                      ? usernameQuery.data.userName
                      : 'Username...'
                  }
                  onChange={(e) => {
                    form.handleChange(e);
                    setUsernameQ(e.target.value);
                    form.validateField('username');
                  }}
                  disabled={usernameQuery.isLoading}
                />
                <FormErrorMessage>{form.errors.username}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <FormLabel htmlFor="genres" mt={3}>
            Select Fav Genres
          </FormLabel>
          <Box h={'200px'} overflowY={'scroll'}>
            <GenresSelection />
          </Box>

          <FormControl>
            <FormHelperText>Must select at least one!</FormHelperText>
          </FormControl>
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
}

function GenresSelection() {
  const genreQuery = trpc.useQuery(['movies.getAllGenres']);
  return (
    <>
      {genreQuery.error && (
        <NextError
          title={genreQuery.error.message}
          statusCode={genreQuery.error.data?.httpStatus || 500}
        />
      )}
      <Skeleton isLoaded={genreQuery.isSuccess}>
        {genreQuery?.data?.map((genre) => (
          <Field name="genres" key={genre.id}>
            {({ field, form }: FieldProps) => (
              <FormControl
                id={genre.name}
                isInvalid={!!form.errors.genres && !!form.touched.genres}
              >
                <Box
                  borderRadius="10%"
                  border="2px"
                  borderColor="gray.200"
                  m={1}
                >
                  <Checkbox p={2} {...field} value={genre.id}>
                    {genre.name}
                  </Checkbox>
                </Box>
              </FormControl>
            )}
          </Field>
        ))}
      </Skeleton>
    </>
  );
}
