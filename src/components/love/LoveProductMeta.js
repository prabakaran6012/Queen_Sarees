import {
    Box,
    HStack,
    Icon,
    Image,
    Button,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { addToCart } from '../../actions/cart';
import { useDispatch } from 'react-redux';
import {IoCartOutline} from 'react-icons/io5'
import { toast } from 'react-hot-toast'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Productlove from '../Product/Productlove'
import { Link as lee } from 'react-router-dom'
export const LoveProductMeta = (props) => {

    const { image, name, description, product_id } = props
    
   
   
   

    
    
    return (
        <Stack direction="row" spacing="5" width="full">
            <Image
                rounded="lg"
                width="120px"
                height="150px"
                fit="inherit"
                src={image}
                alt={name}
                draggable="false"
                loading="lazy"
            />
            <Box pt="4">
                <Stack spacing="0.5">
                    <Text fontWeight="medium">{name}</Text>
                    <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
                        {description}
                    </Text>
                    <Button
                    to={`/productlove/${product_id}`} as={lee}
                            onClick={() => {
                                
                                
                                console.log(product_id)
                            }}
                            width="120px"
                            loadingText="Submitting"
                            
                            bg={'gray.900'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.400',
                            }}>
                            View &nbsp; &nbsp;
                        </Button>
                </Stack>
               
                
            </Box>
        </Stack>
    )
}
