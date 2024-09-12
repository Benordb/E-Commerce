import { Router } from "express";
import {
  createReview,
  getAllReview,
  getReviewByProductId,
  getReviewId,
} from "../controllers/review.controller";

const reviewRouter = Router();
reviewRouter
  .get("/", getAllReview)
  .get("/:id", getReviewId)
  .get("/product/:id", getReviewByProductId)
  .post("/", createReview);

export { reviewRouter };
