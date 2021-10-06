import { Box, Center, Flex } from '@chakra-ui/layout';
import React from 'react';
import NextError from 'next/error';
import { Button } from '@chakra-ui/button';
import Link from 'next/link';

interface ErrorPageProps {
  errorTitle: string;
  statusCode: number;
  hideReturnButton?: boolean;
  redirectURL: string;
  redirectMessage: string;
}

export default function ErrorPage({
  errorTitle,
  statusCode,
  hideReturnButton,
  redirectURL,
  redirectMessage,
}: ErrorPageProps) {
  return (
    <Box>
      <Center>
        <Flex h="80vh" flexDir="column" alignItems="center">
          <NextError title={errorTitle} statusCode={statusCode} />
          {!hideReturnButton && (
            <Link href={redirectURL}>
              <Button w="50%">{redirectMessage}</Button>
            </Link>
          )}
        </Flex>
      </Center>
    </Box>
  );
}

export function NotAuthorisedPage() {
  return (
    <ErrorPage
      errorTitle={'You must be signed in to view this page'}
      statusCode={401}
      redirectURL={'/'}
      redirectMessage={'Return to homepage'}
    />
  );
}
