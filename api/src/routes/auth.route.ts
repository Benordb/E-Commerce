import { Router } from "express";
import { login, logout, register, verifyEmail } from "../controllers/auth.controller";

const authRouter = Router();

authRouter
    .post("/login", login).post("/register", register).post("/logout",logout).post("/verify-email",verifyEmail)

export default authRouter;