import axios from "axios"
import toast from "react-hot-toast"

export const deleteProduct = (productId)=>async(dispatch) => {
try {
    const res = await axios.delete(`https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/delete/${productId}`)
    const {product,message}=res.data
    if(message=="deleted category in DB"){
        toast.success('Product Deleted successfully!')
        dispatch({
            type: "DELETE_PRODUCT",
            payload:{product}
        })
       
    }else{
        toast.error(message)
        
    }
  

} catch (error) {
    console.log(error)

}
}

export const addProduct = (product) => async (dispatch) => {
    try {
        const res = await axios.post('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/add', product)
        const {products,message}=res.data
        const Products=products
        if(message=="Saved product in DB"){
            toast.success('Product added')
            dispatch({
                type: "ADD_PRODUCTS",
                payload:{Products}
            })
           
        }else{
            toast.error(message)
            dispatch({
                type: "ADD_PRODUCT_FAILED",
            })
        }
      

    } catch (error) {
        console.log(error)
       
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

export const getAllProducts = () => async (dispatch)=> {
    const res = await axios.get('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/all')
    const { products } = res.data
    
    console.log(products)
    dispatch({
                type: "GET_ALL_PRODUCTS",
                payload: { products}
            })
}