const InitialState={
    products:[{
       
        _id:1,
        name:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        price:"$500",
        listPrice:"$455",
    category:{name:"Art Silk"},
        note:{note:"dry"},
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/71DoWOTwMAL._AC_UL320_.jpg",
        stock:18
        
    },{
        _id:2,
        name:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        price:"$500",
        listPrice:"$455",
        category:{name:"Art Silk"},
        note:{note:"dry"},
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/61P-5olvm0L._AC_UL320_.jpg",
        stock:5
    },{
        _id:3,
        name:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        price:"$500",
        listPrice:"$455",
        category:{name:"Art Silk"},
        note:{note:"dry"},
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/91ZahaPCunL._AC_UL320_.jpg",
        stock:100
    },{
        _id:4,
        name:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        price:"$500",
        listPrice:"$455",
        category:{name:"Art Silk"},
        note:{note:"dry"},
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/71DoWOTwMAL._AC_UL320_.jpg",
        stock:23
    },{
        _id:5,
        name:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        price:"$500",
        listPrice:"$455",
        category:{name:"Art Silk"},
        note:{note:"dry"},
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/71NF8yfOP5L._AC_UL320_.jpg",
        stock:22
    },{
        _id:6,
        name:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        price:"$500",
        listPrice:"$455",
        category:{name:"Art Silk"},
        note:{note:"dry"},
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/71BdH-YFiGL._AC_UL320_.jpg",
        stock:455
    }]
}
// const InitialState={
//     products:[{}]
// }
const ProductsReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'DELETE_PRODUCT':
            const { productId } = payload
            return {
                products: state.products.filter(prod => prod._id !== productId)
            }
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









