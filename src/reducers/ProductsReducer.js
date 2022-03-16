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
        imageUrl:"https://m.media-amazon.com/images/I/71DoWOTwMAL._AC_UL320_.jpg"
        
    },{
        id:2,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"dry",
        color:"blue",
        imageUrl:"https://m.media-amazon.com/images/I/61P-5olvm0L._AC_UL320_.jpg"
    },{
        id:3,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"normal",
        color:"mixed",
        imageUrl:"https://m.media-amazon.com/images/I/91ZahaPCunL._AC_UL320_.jpg"
    },{
        id:4,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"normal",
        color:"light Red",
        imageUrl:"https://m.media-amazon.com/images/I/71DoWOTwMAL._AC_UL320_.jpg"
    },{
        id:5,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"dry",
        color:"Red",
        imageUrl:"https://m.media-amazon.com/images/I/71NF8yfOP5L._AC_UL320_.jpg"
    },{
        id:6,
        productName:"Women Pure Cotton Traditional Handloom Bengal Tant Saree",
        description:"100% Bengali Original Tant Saree Of Bengal , Care Instructions: Dry Clean for the first wash, thereafter Hand Wash ",
        actualPrice:"$500",
        listingPrice:"$455",
        category:"Art Silk",
        note:"dry",
        color:"mixed",
        imageUrl:"https://m.media-amazon.com/images/I/71BdH-YFiGL._AC_UL320_.jpg"
    }]
}
const ProductsReducer = (state=InitialState,action) => {
    const {type,payload}=action
    switch(type){
        default:
            return state
    }
}
 
export default ProductsReducer;