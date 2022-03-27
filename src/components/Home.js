import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
  import { Link as lee } from 'react-router-dom'
  export default function Home() {
    return (
        
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Kalai
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
               HandLoom Sarees
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Explore mesmerizing handloom sarees, dupattas & ikkat cotton/linen fabric directly from weavers and artisans online in India at QueenSarees
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                as={lee}
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                to={"/shop"}
                _hover={{
                  bg: 'blue.500',
                }}>
                Shop now
              </Button>
             
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1640292343595-889db1c8262e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHx3ZWF2aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            }
          />
        </Flex>
      </Stack>
      
    );
  }
  