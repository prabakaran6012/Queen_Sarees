const InitialState={
    products:[]
}
const ProductsReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'DELETE_PRODUCT':
            return products
       
        case 'GET_PRODUCTS':
            const{products}=payload
            return {
                products
            }


        case 'ADD_PRODUCT':
            const { Products } = payload
                return {
                    products: [...state.products,...Products]
                }
       
        case 'ADD_PRODUCT_FAILED':
            return state
        default:
            return state
    }
}
 
export default ProductsReducer;









