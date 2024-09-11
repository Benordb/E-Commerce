import mongoose, { model, Schema } from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    product: {
      type: [Schema.Types.ObjectId],
      ref: "Product",
      required: true,
    },
    user: {
      type: [Schema.Types.ObjectId],
      ref: "User",
      required: true,
    },
    star: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Review = model("Review", reviewSchema);
