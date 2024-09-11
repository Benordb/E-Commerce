import { RequestHandler } from "express";
import { Product } from "../models";

export const getAllProducts: RequestHandler = async (req, res) => {
  try {
    const products = Product.find();
    res.json(products);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
