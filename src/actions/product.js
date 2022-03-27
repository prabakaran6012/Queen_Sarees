import axios from "axios"
import toast from "react-hot-toast"

export const deleteProduct = (productId) => {

    return {
        type: "DELETE_PRODUCT",
        payload: { productId }
    }
}

export const addProduct = (product) => async (dispatch) => {
    try {
        const res = await axios.post('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/add', product)
        const {products,message}=res.data
        if(message=="Saved product in DB"){
            toast.success('Product added')
            dispatch({
                type: "GET_PRODUCTS",
                payload:{products}
            })
           
        }else{
            toast.error(message)
            dispatch({
                type: "ADD_PRODUCT_FAILED",
            })
        }
      

    } catch (error) {
        console.log(error)
        // toast.error(error.message)
    }
}

export const getProducts = (name, description) => async (dispatch) => {
    const res = await axios.get('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/all')
    const { products } = res.data
    dispatch({
        type: "GET_PRODUCTS",
        payload: { products }
    })
}
// export const getAllProducts = () => async (dispatch) => {
//     const res = await axios.get('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/all')
//     const { products } = res
//     console.log("haiii")
//     console.log(products)
//     dispatch({
//         type: "GET_ALL_PRODUCTS",
//         payload: { products}
//     })
// }
export const getAllProducts = () => async (dispatch)=> {
    const res = await axios.get('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/all')
    const { products } = res.data
    
    console.log(products)
    dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: { products}
            })
}