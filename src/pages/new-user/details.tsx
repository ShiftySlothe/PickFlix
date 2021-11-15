import { Button } from '@chakra-ui/button';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { AddFriendsForm } from '../../components/SignUpFlowForms/AddFriendsForm';
import { GroupsForm } from '../../components/SignUpFlowForms/CreateGroupsForm';
import { UsernameGenresForm } from '../../components/SignUpFlowForms/UsernameGenresForm';
import { DetailsFormProgress } from '../../lib/enums';
import Router from 'next/router';
import { trpc } from '../../server/utils/trpc';

export default function UpdateDetails() {
  const [formProgress, setFormProgress] = useState(DetailsFormProgress.Base);
  const disableNewUser = trpc.useMutation('user.disableNewUser');
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
          {formProgress === DetailsFormProgress.Base && (
            <UsernameGenresForm setFormProgress={setFormProgress} />
          )}
          {formProgress === DetailsFormProgress.Second && (
            <AddFriendsForm setFormProgress={setFormProgress} />
          )}
          {formProgress === DetailsFormProgress.Third && (
            <GroupsForm setFormProgress={setFormProgress} />
          )}
          {formProgress === DetailsFormProgress.Final && (
            <>
              <Heading>Thanks!</Heading>
              <Button
                onClick={async () => {
                  await disableNewUser.mutateAsync();
                  Router.push('/dashboard');
                }}
              >
                To dashboard
              </Button>
            </>
          )}
        </Box>
      </Stack>
    </Flex>
  );
}
