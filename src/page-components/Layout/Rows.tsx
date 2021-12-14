import { Flex, Stack, Center, useColorModeValue, Box } from '@chakra-ui/react';
import React from 'react';

export default function Rows({
  children,
}: React.PropsWithChildren<Record<string, unknown>>) {
  const childrenArray = React.Children.toArray(
    children,
  ) as React.ReactElement[];
  return (
    <Flex
      height={'100vh'}
      width={'100vw'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      {childrenArray.map((el, i) => (
        <Row element={el} key={i} />
      ))}
    </Flex>
  );
}

interface RowProps {
  element: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
function Row({ element }: RowProps) {
  return (
    <Stack spacing={8} mx={'auto'} py={2} px={2}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={3}
        h="80vh"
        w="30vw"
      >
        {element}
      </Box>
    </Stack>
  );
}
