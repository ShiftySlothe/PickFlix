import { Button } from '@chakra-ui/button';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useToast } from '@chakra-ui/toast';
import { Field, FieldProps, Form, Formik } from 'formik';
import { GroupProps, useRefetchGroupContext } from '../..';
import { useRefetchAllGroupsContext } from '../../..';
import { trpc } from '../../../../../server/utils/trpc';
import * as Yup from 'yup';

export function UpdateName({ groupId }: GroupProps) {
  const nameMutation = trpc.useMutation('group.updateGroupName');
  const toast = useToast();
  const { refetch: refetchAllGroups } = useRefetchAllGroupsContext();
  const { refetch: refetchGroup } = useRefetchGroupContext();
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values) => {
        const newName = values.name;
        const mutation = await nameMutation.mutateAsync({
          groupId,
          newName,
        });
        refetchGroup();
        refetchAllGroups();
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
            status: 'error',
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
                <FormLabel htmlFor="name">Update Group Name</FormLabel>
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
