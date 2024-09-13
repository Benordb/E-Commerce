import { Router } from "express";
import {
  createReview,
  getAllReview,
  getReviewByProductId,
  getReviewId,
} from "../controllers/review.controller";
import { verifyToken } from "../middleware/auth.middleware";

const reviewRouter = Router();
reviewRouter
  .get("/", getAllReview)
  .get("/:id", getReviewId)
  .get("/product/:id", getReviewByProductId)
  .post("/", verifyToken, createReview);

export { reviewRouter };
