import { Router } from "express";
import { createProduct, getAllProducts, getProductById, updateProduct } from "../controllers/product.controller";

const productRouter = Router();
productRouter
    .get('/', getAllProducts)
    .post('/', createProduct)
    .get('/:id', getProductById)
    .put('/:id', updateProduct)

export {productRouter}