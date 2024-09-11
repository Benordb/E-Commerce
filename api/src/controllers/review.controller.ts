import { RequestHandler,Request } from "express";
import { Review } from "../models";
interface CustomRequest extends Request {
    userId?: string;
  }
const getReviewByCategoryId:RequestHandler =async (req, res) => {
    const { productId } = req.params;
    try{
        const review=await Review.find({product: productId}).populate("user")
        res.status(200).json({review})
    }catch(err:any) {
        res.status(500).json({message:err.message});
    }
}
const createReview:RequestHandler =async (req:CustomRequest, res) => {
    const { productId, star, comment } = req.body;
    try{
        const newReview = new Review({ product: productId, star, comment, user: req.userId });
        await newReview.save();
        res.status(201).json({ review: newReview });
    }catch(err:any) {
        res.status(500).json({message:err.message});
    }
}