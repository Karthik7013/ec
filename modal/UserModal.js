import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email Already Used"]
    },
    password: {
        type: String,
        require: true
    },
    cart: [],
    whishList: [],
    orders: []
})


const User = mongoose.model('User', UserSchema)

export { User }