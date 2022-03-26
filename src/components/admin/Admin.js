import { Box, Heading, } from '@chakra-ui/react'
import AddCategory from './AddCategory';
import AddNote from './AddNote';
import AddProduct from './AddProduct';
import ProductsTable from './ProductsTable'


const Admin = () => {
    return (
        <Box p={4}>
            <Heading textAlign={'center'} >ADMIN</Heading>
            <Box m={4}>
                <ProductsTable />
            </Box>
            <Box m={4}>
                <AddProduct />
            </Box>
            <hr />
            <Box m={4}>
                <AddCategory />
            </Box>
            <hr />
            <Box m={4}>
                <AddNote />
            </Box>

        </Box >
    );
}

export default Admin;