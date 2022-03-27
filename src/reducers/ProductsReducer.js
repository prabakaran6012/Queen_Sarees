const InitialState={
    products:[]
}
// const InitialState={
//     products:[{}]
// }
const ProductsReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'DELETE_PRODUCT':
            // const { productId } = payload
            return state.products
        case 'GET_PRODUCTS':
            const{products}=payload
            return {
                products: [...state.products,...products]
            }


        // case 'ADD_PRODUCT':
        //     const { products } = payload
        //     return {
        //         products: [...state.products,...products]
        //     }
        // case 'GET_PRODUCTS':
        //     const { products } = payload
        //     return {
        //         products: [...products]
        //     }
        case 'GET_ALL_PRODUCTS':
                const { Products } = payload
                return {
                    products: [...{products:Products}]
                }
        case 'ADD_PRODUCT_FAILED':
            return state
        default:
            return state
    }
}
 





// const InitialState={
//     products:[]
// }
// const ProductsReducer = (state=InitialState,action) => {
//     const {type,payload}=action
//     switch(type){
//         case "ADD_PRODUCT":
//             return state
//         case "ADD_PRODUCT_FAILED":
//             return state
//         default:
//             return state
//     }
// }
 
export default ProductsReducer;









