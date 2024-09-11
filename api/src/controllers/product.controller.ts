import { RequestHandler } from "express";
import { Product } from "../models";

export const getAllProducts: RequestHandler = async (_req, res) => {
  try {
    const products =await Product.find({});
    return res.status(200).json({
      products,
    });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const getProductById: RequestHandler = async (req, res) => {
  const {id}=req.params;
  try{
    const product = await Product.findById(id).populate("category");
    if(!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({product});
  }catch (err:any) {
    return res.status(500).json({ message: err.message });
  }
}

export const createProduct: RequestHandler = async (req, res) => {
  try {
    const { name, price, description,salePercent,images } = req.body;
    const newProduct = new Product({ name, price, description,images,salePercent });
    await newProduct.save();
    return res.status(201).json({
      product: newProduct,
    });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}

export const updateProduct: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { name,price,description, thumbnails,salePercent,coupon,viewsCount,category, images } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {name, price,thumbnails,salePercent,coupon,viewsCount,category, images},
      { new: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" });
    await updatedProduct.save();
    res.status(200).json({ product: updatedProduct });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
}