import { Field, FieldProps, Form, Formik } from 'formik';
import { useState } from 'react';
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

export function UsernameGenresForm() {
  // Set on username input blur, used in trpc query
  const [usernameQ, setUsernameQ] = useState('');
  const userMatchQuery = trpc.useQuery(['users.usernameExists', usernameQ]);

  const usernameMutation = trpc.useMutation('users.updateUsername');
  const genresMutation = trpc.useMutation('users.addLikedGenres');
  return (
    <Formik
      initialValues={{
        username: '',
        genres: [] as number[],
      }}
      onSubmit={(values) => {
        usernameMutation.mutate(values.username);
        const reformattedGenres = values.genres.map((g) => ({
          id: g,
        }));
        genresMutation.mutate(reformattedGenres);
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
            const userNameCheck = userMatchQuery.data;
            if (!userNameCheck || !userNameCheck.found) {
              return true;
            }
            return false;
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
                  placeholder={'NorwegianToBiased'}
                  onChange={(e) => {
                    form.handleChange(e);
                    setUsernameQ(e.target.value);
                    form.validateField('username');
                  }}
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
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}