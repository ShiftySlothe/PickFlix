import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Link,
  Heading,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Button,
} from '@chakra-ui/react';
import { Field, FieldArray, FieldProps } from 'formik';
import React, { useState, useRef, useEffect } from 'react';
import { FormikStep, FormikStepper } from '../../components/FormikStepper';
import { genres } from '../../server/db';
import * as Yup from 'yup';
import { useDisclosure } from '@chakra-ui/hooks';
import { Collapse } from '@chakra-ui/transition';
import { trpc } from '../../server/utils/trpc';
import NextError from 'next/error';
import { User } from '.prisma/client';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

export default function Home() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <FormikStepper
        initialValues={{
          username: '',
          genres: [],
          friends: [],
        }}
        onSubmit={(values) => {
          console.log('values', values);
        }}
        heading={
          <Heading fontSize={'3xl'} textAlign="center">
            Update your account details
          </Heading>
        }
        subheading={
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        }
      >
        <PersonalDetailsStep />
      </FormikStepper>
    </Flex>
  );
}

const PersonalDetailsStep = () => {
  const [usernameQ, setUsernameQ] = useState('');
  const userMatchQuery = trpc.useQuery(['users.usernameExists', usernameQ]);
  return (
    <FormikStep
      label="Personal Details"
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
    >
      <>
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
                onBlur={(e) => {
                  setUsernameQ(e.target.value);
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
          {genres &&
            genres.map((genre) => (
              <Field name="genres" key={genre.id}>
                {({ field, form }: FieldProps) => (
                  <FormControl
                    id={genre.name}
                    isInvalid={!!form.errors.genre && !!form.touched.genres}
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
        </Box>
      </>
    </FormikStep>
  );
};

interface AddFriendsStepProps {
  friends: User[] | [];
}
const AddFriendsStep = ({ friends }: AddFriendsStepProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { isOpen, onOpen } = useDisclosure();
  const handleChange = (e) => setSearchQuery(e.target.value);

  return (
    <FormikStep label="Add friends">
      <>
        <FormLabel>Add some friends</FormLabel>
        <Input placeholder="Search for user" onChange={handleChange}></Input>
        <FieldArray
          name="friends"
          render={(arrayHelpers) =>
            searchQuery && (
              <SearchFormResponse username={searchQuery} friends={friends} />
            )
          }
        />
      </>
    </FormikStep>
  );
};

interface SearchFormResponseProps {
  username: string;
  friends: [] | User[];
}
function SearchFormResponse({ username, friends }: SearchFormResponseProps) {
  const userMatchQuery = trpc.useQuery(['users.search', username]);
  const userMatches = userMatchQuery.data;

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

  const userMatchJSX = userMatches.map((user) => (
    <Field name="friends" key={user.id}>
      {({ field, form }: FieldProps) => (
        <FormControl
          id={user.id}
          isInvalid={!!form.errors.friends && !!form.touched.friends}
        >
          {/* TODO TURN INTO ADD FRIEND BUTTON */}
          <Checkbox p={2} {...field} value={user.id}>
            {user.name}
          </Checkbox>
        </FormControl>
      )}
    </Field>
  ));

  return <>{userMatchJSX}</>;
}

// interface CreateGroupStepProps {
//   friends: User[];
// }
// const CreateGroupsStep = ({ friends }: CreateGroupStepProps) => {
//   const [inputText, setinputText] = useState('');
//   const [groups, setGroups] = useState<Array<string>>([]);
//   const AddGroup = () => {
//     setGroups([...groups, inputText]);
//     console.log(groups);
//   };

//   return (
//     <FormikStep label="Create Group">
//       <>
//         <FormControl id="group">
//           <FormLabel>Create a group</FormLabel>
//           <Input
//             type="text"
//             placeholder="Group name"
//             onChange={(e) => {
//               setinputText(e.target.value);
//             }}
//           />
//           <Button onClick={AddGroup} disabled={!inputText}>
//             Add group
//           </Button>
//         </FormControl>
//         {groups.map((g, i) => (
//           <Box key={i}>{g}</Box>
//         ))}
//       </>
//     </FormikStep>
//   );
// };
