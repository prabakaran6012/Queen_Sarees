import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react'


const ProductCard = ({ data }) => {
    const {name, price, listPrice, category, imageUrl} = data
    console.log(data)
    return (
        <Box
            role={'group'}
            p={6}
            m={6}
            maxW={'350px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'full'}
                _after={{
                    transition: 'all .3s ease',
                    content: '""',
                    w: 'full',
                    h: 'full',
                    pos: 'absolute',
                    top: 5,
                    left: 0,
                    backgroundImage: `url(${imageUrl})`,
                    filter: 'blur(15px)',
                    zIndex: -1,
                }}
                _groupHover={{
                    _after: {
                        filter: 'blur(20px)',
                    },
                }}>
                <Image
                    rounded={'lg'}
                    height={'full'}
                    width={282}
                    objectFit={'cover'}
                    src={imageUrl}
                />
            </Box>
            <Stack pt={10} align={'center'}>
                <Text color={'gray.700'} fontSize={'2x0.5'} textTransform={'uppercase'}>
                   {name}
                </Text>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                   {category.name}
                </Heading>
                <Stack direction={'row'} align={'center'}>
                    <Text color={'gray.700'} fontWeight={800} fontSize={'xl'}>
                        {`₹${listPrice}`}
                    </Text>
                    <Text textDecoration={'line-through'} color={'gray.600'}>
                        {price}
                    </Text>
                </Stack>
            </Stack>
        </Box>
    );
}

export default ProductCard;