import express from "express";
const productRouter = express.Router();

import {
    getAllProducts,
    getCategory,
    getProductByCategory,
    getProductById,
} from "../controllers/product.js";


productRouter.get('/all', getAllProducts);
productRouter.get('/category', getCategory);
productRouter.get('/category/:category', getProductByCategory);
productRouter.get('/:id', getProductById);
export { productRouter }