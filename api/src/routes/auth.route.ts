import { Router } from "express";
import { login, logout, register, verifyEmail,forgotPassword,resetPassword, checkAuth } from "../controllers/auth.controller";
import { verifyToken } from "../middleware/auth.middleware";

const authRouter = Router();

authRouter
    .get("/check-auth",verifyToken, checkAuth)
    .post("/login", login)
    .post("/register", register)
    .post("/logout",logout)
    .post("/verify-email",verifyEmail)
    .post("/forgot-password",forgotPassword)
    .post("/reset-password/:token",resetPassword)

export default authRouter;