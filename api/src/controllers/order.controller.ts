import { RequestHandler, Request } from "express";
import { Order } from "../models/order.model";

interface CustomRequest extends Request {
  userId?: string;
}

export const getAllOrders: RequestHandler = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", {
      name: true,
      email: true,
    });
    //   .populate("products.product");
    return res.status(200).json({
      orders,
    });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const createOrder: RequestHandler = async (req: CustomRequest, res) => {
  try {
    const { firstName, lastName, phoneNumber, address, products, totalPrice } =
      req.body;
    const newOrder = new Order({
      user: req.userId,
      firstName,
      lastName,
      phoneNumber,
      address,
      products,
      totalPrice,
    });
    await newOrder.save();
    res.status(201).json({ message: "Success created order" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
