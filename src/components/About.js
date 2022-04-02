import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
     
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const About = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Heading as="h1">History of Handloom</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'http://www.chinmayaupahar.in/blog/wp-content/uploads/2018/04/shutterstock_109236137.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Traditional', 'Valuable']} />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
            What is Handloom?
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
       Handloom refers to wooden frames of different types which are used by skilled artisans to weave fabrics usually from natural fibers like Cotton, Silk, Wool, Jute etc.  It is a cottage industry where the entire family is involved in the production of cloth. Right from spinning the yarn, colouring, to weaving on the loom if done by them. Fabric produced from these looms is also referred to as Handloom.

The tools required for this entire process are made from wood, sometimes bamboo and they do not require any electricity to run them. The entire process of fabric production was totally manual in earlier times. Thus this is the most eco-friendly way of producing clothes.
          </Text>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
     
  
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">History of Handloom – Early Days</Heading>
        <Text as="p" fontSize="lg">
        Indian Handloom dates back to the Indus valley civilization. Even in ancient times, Indian fabrics were exported, Rome, Egypt and China.
        </Text>
        <Text as="p" fontSize="lg">
        In earlier times, almost every village had its own weavers who made all the clothing requirements needed by the villagers like sarees, dhotis, etc. Some areas where it is cold in winter there were specific wool weaving centers. But everything was Hand-Spun and Hand-Woven.
        </Text>
        <Text as="p" fontSize="lg">
        Traditionally, the entire process of cloth making was self-reliant. The cotton / silk / wool came from the farmers, foresters or shepherds, and the cotton was cleaned and transformed by weavers themselves or agricultural labour community.  Small handy instruments were used in the process, including the famous spinning wheel (also known as Charkha), mostly by women. This hand spun yarn was later made into cloth on the handloom by the weavers.
        </Text>
      </VStack>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">Handloom is Timeless</Heading>
        <Text as="p" fontSize="lg">
        Handloom is a beautiful fabric and special as no two fabrics can be alike. Of course the output depends on the skill set of the weaver. But even if we make two weavers with similar skills weave the same fabric it will be different in one way or the other. Each fabric is a reflection of the weaver’s moods – when a weaver is angry the fabric would be little tight while it would be lose when he is sad. Thus each piece is unique in itself.
        </Text>
        <Text as="p" fontSize="lg">
        In India there are different styles of weaving in different parts of the country, and sometimes in the same region there could be as wide a range as 20- 30 varied styles.  From simple plain fabrics, Tribal motifs, geometric designs, tye and dye, to exhaustive art on muslin. Our weavers have been master craftspeople. No other country can boast of such exclusive wide range of rich textile art, even today.
        </Text>
        
      </VStack>
      
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  'http://www.chinmayaupahar.in/blog/wp-content/uploads/2018/04/History-of-Handloom.jpg'
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)'
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={['Beautiful', 'Skill']} />
       
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
      In India there are different styles of weaving in different parts of the country, and sometimes in the same region there could be as wide a range as 20- 30 varied styles.  From simple plain fabrics, Tribal motifs, geometric designs, tye and dye, to exhaustive art on muslin. Our weavers have been master craftspeople. No other country can boast of such exclusive wide range of rich textile art, even today.
          </Text>
          {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
        </Box>
      </Box>
    </Container>
  );
};

export default About;
