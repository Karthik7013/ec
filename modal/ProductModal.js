import mongoose from "mongoose";

// const reviewSchema = mongoose.Schema({
//     userId: {
//         type: String,
//         required: true,
//         default: ""
//     },
//     rating: {
//         type: Number,
//         required: true,
//         default: 0
//     },
//     review: {
//         type: String,
//         required: true,
//         default: ""
//     }
// })


const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: []
},
    {
        timesStamps: true
    }
)

const Product = mongoose.model("Product", ProductSchema);
export { Product }