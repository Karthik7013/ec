import express from "express";

const userRouter = express.Router();


import {
    userLogin,
    userRegister,
} from "../controllers/user.js"



userRouter.post('/login', userLogin)
userRouter.post('/register', userRegister)


export { userRouter }