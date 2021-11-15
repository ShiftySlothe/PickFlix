import { Field, FieldProps, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { trpc } from '../../server/utils/trpc';
import * as Yup from 'yup';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { GenresSelection } from './components/GenresSelection';
import { DetailsFormProgress } from '../../lib/enums';

interface FormProps {
  setFormProgress: React.Dispatch<React.SetStateAction<number>>;
}
export function UsernameGenresForm({ setFormProgress }: FormProps) {
  // Set on username input blur, used in trpc query
  const [usernameQ, setUsernameQ] = useState('');
  const usernameQuery = trpc.useQuery(['user.getUsernameFromSession']);
  const userMatchQuery = trpc.useQuery([
    'user.usernameExistsElsewhere',
    { username: usernameQ },
  ]);

  const usernameMutation = trpc.useMutation('user.updateUsername');
  const genresMutation = trpc.useMutation('user.addLikedGenres');
  return (
    <Formik
      initialValues={{
        username: '',
        genres: [] as number[],
      }}
      onSubmit={async (values) => {
        await usernameMutation.mutateAsync({ username: values.username });
        const reformattedGenres = values.genres.map((g) => ({
          id: g,
        }));
        await genresMutation.mutateAsync(reformattedGenres);
        setFormProgress(DetailsFormProgress.Second);
      }}
      validationSchema={Yup.object({
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
            const userNameExists = userMatchQuery.data;
            return !userNameExists;
          }),
      })}
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
          <Button type="submit">Next</Button>
        </Form>
      )}
    </Formik>
  );
}
