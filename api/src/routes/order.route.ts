import { Router } from "express";
import { createOrder, getAllOrders } from "../controllers/order.controller";
import { verifyToken } from "../middleware/auth.middleware";

const orderRouter = Router();
orderRouter.get("/", getAllOrders).post("/", verifyToken, createOrder);

export { orderRouter };
