import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  updateProductSize,
} from "../controllers/product.controller";

const productRouter = Router();
productRouter
  .get("/", getAllProducts)
  .post("/", createProduct)
  .get("/:id", getProductById)
  .put("/:id", updateProduct)
  .put("/size/:id", updateProductSize);

export { productRouter };
