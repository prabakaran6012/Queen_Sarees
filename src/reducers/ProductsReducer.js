const InitialState={
    products:[]
}
const ProductsReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        default:
            return state
    }
}
 
export default ProductsReducer;