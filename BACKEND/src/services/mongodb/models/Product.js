import mongoose from 'mongoose'


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    listPrice: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    note: {
        type: mongoose.Types.ObjectId,
        ref: "Note"
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category"
    },
    imageUrl: {
        type: String,
    },
    stock: {
        type: Number,
        required: true
    },
    // reviews: [
    //     {
    //         type: mongoose.Types.ObjectId,
    //         ref: "reviews"
    //     }
    // ]

})


const Product = mongoose.model("Product", ProductSchema)

export default Product