import { RequestHandler, Request } from "express";
import { Review } from "../models";
interface CustomRequest extends Request {
  userId?: string;
}
export const getAllReview: RequestHandler = async (req, res) => {
  try {
    const review = await Review.find({}).populate("user").populate("product");
    res.status(200).json({ review });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const getReviewId: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id)
      .populate("user")
      .populate("product");
    res.status(200).json({ review });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const getReviewByProductId: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.find({ product: id }).populate("user");
    res.status(200).json({ review });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const createReview: RequestHandler = async (req: CustomRequest, res) => {
  const { productId, star, comment } = req.body;
  try {
    const newReview = new Review({
      product: productId,
      star,
      comment,
      user: req.userId,
    });
    await newReview.save();
    res.status(201).json({ message: "Success created review" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
