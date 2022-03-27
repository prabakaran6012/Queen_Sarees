import {
    Box,
    Heading,
    Flex,
    Link
} from '@chakra-ui/react';
import ProductCard from './Product/ProductCard'
import Filters from './FilterDrawer'
import Values from './Values';
import { Link as lee } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import axios from 'axios';
// import { getAllProducts } from '../actions/product';

export default function Products() {
    // const {products,setproducts} = useState([]) 
    
// const {products,setproducts}=useState([])
// const dispatch = useDispatch()
// const getAllProducts = async() => {
//     const res = await axios.get('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/all')
//     const { products } = res.data
//     constproducts.map(pd=>{return pd}))
    
//     // setproducts(products)
//     dispatch({
//         type: "GET_PRODUCTS",
//         payload:{products}
//     })
// }
//     useEffect(() => {
//       getAllProducts()
      
//     }, [])
    const {products}=useSelector(state=>state.products)
    return (
        <Box w="100%" color="gary.600" >
            <Box p={6} textAlign={'center'} border={'none'} >
                <Flex justifyContent={'center'} flexDirection={'row'}>
                    <Heading >Showing All Products...</Heading>
                    <Filters />
                </Flex>
            </Box>
            <Flex justifyContent={'center'} flexWrap={'wrap'} >
                {products && products.map(product => <Link to={`/shop/${product._id}`} as={lee} ><ProductCard data={product} /></Link>)}
            </Flex>
        </Box >
    );
}