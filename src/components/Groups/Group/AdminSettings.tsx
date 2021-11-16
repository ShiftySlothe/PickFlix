import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Divider, Heading } from '@chakra-ui/layout';
import { Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { trpc } from '../../../server/utils/trpc';
import { GroupProps } from './Group';
import { useToast } from '@chakra-ui/react';

export default function AdminSettings({ groupId }: GroupProps) {
  return (
    <>
      <Heading fontSize={'md'}>Admin Settings</Heading>
      <Divider />
      <ChangeGroupNameForm groupId={groupId} />
    </>
  );
}

function ChangeGroupNameForm({ groupId }: GroupProps) {
  const nameMutation = trpc.useMutation('group.updateGroupName');
  const toast = useToast();
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values, actions) => {
        const newName = values.name;
        const mutation = await nameMutation.mutateAsync({ groupId, newName });
        if (mutation.name === newName) {
          toast({
            title: 'Name updated.',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        } else {
          toast({
            title: 'Error updating name.',
            description: 'Please try again',
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        }
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={Yup.string().required()}>
            {({ field, form }: FieldProps) => (
              <FormControl
                isInvalid={!!form.errors.name && !!form.touched.name}
              >
                <FormLabel htmlFor="name">Update group name</FormLabel>
                <Input {...field} id="name" placeholder="Name" type="text" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Update
          </Button>
        </Form>
      )}
    </Formik>
  );
}
