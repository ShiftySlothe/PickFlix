import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import NavBar from '../../components/NavBar/NavBar';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomePage = () => {
  const buttonSize = useBreakpointValue({
    base: 'xs',
    md: 'md',
    lg: 'lg',
  });
  const { data: session } = useSession();
  const router = useRouter();

  const toDashboard = () => {
    if (session?.user) router.push('/dashboard');
  };

  return (
    <Box w="100vw" color="white">
      <Box position="fixed" w="100vw" h="80px" top="0" overflow="hidden">
        <NavBar />
      </Box>
      <Flex
        h="calc(100vh - 80px)"
        mt="80px"
        backgroundImage="url('/homepage/background.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justifyContent="center"
        alignItems="center"
        pb={20}
      >
        <Flex
          flexDir="column"
          alignItems="center"
          maxW={{ base: '90vw', md: '50vw' }}
          textAlign="center"
        >
          <Heading
            textAlign="center"
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            m={{ base: 1, md: 3 }}
          >
            Find the shows you both want to watch.
          </Heading>
          <Text
            fontSize={{ base: 'lg', md: '3xl', lg: '4xl' }}
            mb={{ base: 1, md: 3 }}
          >
            Swipe anywhere, anytime.
          </Text>
          <Box m={3} textAlign="center">
            <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
              {session?.user
                ? 'Get back to swiping'
                : 'Ready to swipe? Get started now.'}
            </Text>
            <Flex justifyContent="center" mt={1}>
              <Button
                backgroundColor="#e50914"
                color="white"
                size={buttonSize}
                variant="red-button"
                onClick={session ? toDashboard : () => signIn()}
              >
                {session?.user ? 'Get started' : 'Go to dashboard'}
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomePage;
