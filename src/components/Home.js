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
  import main_logo from './src_img/homeImg.jpg'
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
                Queen
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
              main_logo
            }
          />
        </Flex>
      </Stack>
      
    );
  }
  