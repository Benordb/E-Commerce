import mongoose, { model, Schema } from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    qty: {
      free: { type: Number, required: false },
      s: { type: Number, required: false },
      m: { type: Number, required: false },
      l: { type: Number, required: false },
      xl: { type: Number, required: false },
      "2xl": { type: Number, required: false },
      "3xl": { type: Number, required: false },
    },
    thumbnails: {
      type: String,
      required: false,
    },
    images: [
      {
        type: String,
        requiredd: false,
      },
    ],
    salePercent: {
      type: Number,
      required: true,
      default: 0,
    },
    coupon: {
      type: String,
      required: false,
    },
    viewsCount: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);
export const Product = model("Product", productSchema);
