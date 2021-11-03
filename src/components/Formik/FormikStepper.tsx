import { Box, Stack, Button, Flex } from '@chakra-ui/react';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React, { useState } from 'react';

export interface FormikStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string;
}

export function FormikStep({ children }: FormikStepProps) {
  return <>{children}</>;
}

export interface FormikStepperProps extends FormikConfig<FormikValues> {
  heading: React.ReactNode;
  subheading: React.ReactNode;
}
export function FormikStepper({ children, ...props }: FormikStepperProps) {
  const childrenArray = React.Children.toArray(
    children,
  ) as React.ReactElement<FormikStepProps>[];
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  const [completed, setCompleted] = useState(false);

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers);
          setCompleted(true);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
        }
      }}
    >
      {({ isSubmitting }) => (
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            {props.heading}
            {props.subheading}
          </Stack>
          <Form>
            <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} pb={2}>
              <Stack spacing={4}>{currentChild}</Stack>
              <Flex my={3} justifyContent={'center'}>
                <Button
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  type="submit"
                >
                  {isSubmitting
                    ? 'Submitting'
                    : isLastStep()
                    ? 'Submit'
                    : 'Next'}
                </Button>
              </Flex>
            </Box>
          </Form>
        </Stack>
      )}
    </Formik>
  );
}
