import mongoose, { model, Schema } from "mongoose";

const orderProductSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      enum: ["free", "s", "m", "l", "xl", "2xl", "3xl"],
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
      require: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    info: {
      type: String,
      require: false,
    },
    coupon: {
      type: String,
      required: false,
    },
    products: {
      type: [orderProductSchema],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, "Total price cannot be negative"],
    },
  },
  { timestamps: true }
);
export const Order = model("Order", orderSchema);
