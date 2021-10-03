import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import NavBar from '../../components/NavBar/NavBar';
import HeroImg from '../../../public/homepage/Mar-Business_.png';
import Image from 'next/image';
import { useBreakpointValue } from '@chakra-ui/media-query';

const HomePage = () => {
  const buttonSize = useBreakpointValue({
    base: 'xs',
    md: 'md',
    lg: 'lg',
  });
  return (
    <Box w="100vw">
      <Box position="fixed" w="100vw" h="80px" top="0" overflow="hidden">
        <NavBar />
      </Box>
      <Box
        h="calc(100vh - 80px)"
        mt="80px"
        backgroundImage="url('/homepage/Cloudy.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex flexDir="column" alignItems="center">
          <Box
            w={{ base: '250px', md: '400px', lg: '500px', xl: '600px' }}
            pt={{ base: 4, md: 0 }}
          >
            <Image src={HeroImg} />
          </Box>
          <Heading textAlign="center">Automate your sales process.</Heading>
          <Flex pt={6}>
            <ButtonGroup spacing="4">
              <Button backgroundColor="#3C9482" color="white" size={buttonSize}>
                Get started
              </Button>
              <Button backgroundColor="#3C9482" color="white" size={buttonSize}>
                Learn more
              </Button>
            </ButtonGroup>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default HomePage;
