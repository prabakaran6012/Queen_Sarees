const InitialState={
    products:[{
        id:1,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"dry",
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/71DoWOTwMAL._AC_UL320_.jpg",
        stock:18
        
    },{
        id:2,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"dry",
        color:"blue",
        imageUrl:"https://m.media-amazon.com/images/I/61P-5olvm0L._AC_UL320_.jpg",
        stock:5
    },{
        id:3,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"normal",
        color:"mixed",
        imageUrl:"https://m.media-amazon.com/images/I/91ZahaPCunL._AC_UL320_.jpg",
        stock:100
    },{
        id:4,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"normal",
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/71DoWOTwMAL._AC_UL320_.jpg",
        stock:23
    },{
        id:5,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"dry",
        color:"Red",
        imageUrl:"https://m.media-amazon.com/images/I/71NF8yfOP5L._AC_UL320_.jpg",
        stock:22
    },{
        id:6,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"dry",
        color:"mixed",
        imageUrl:"https://m.media-amazon.com/images/I/71BdH-YFiGL._AC_UL320_.jpg",
        stock:455
    }]
}
const ProductsReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        case 'DELETE_PRODUCT':
            const { productId } = payload
            return {
                products: state.products.filter(prod => prod.id !== productId)
            }
        case 'ADD_PRODUCT':
            const { product } = payload
            return {
                products: [...state.products, product]
            }
        default:
            return state
    }
}
 
export default ProductsReducer;