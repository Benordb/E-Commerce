import bcrypt from "bcrypt";
import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config();

import { Request, Response } from "express";

import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie";
import {
  sendPasswordResetEmail,
  sendVerifyEmail,
  sendWelcomeEmail,
  sendResetSuccessEmail,
} from "../mailtrap/emails";
import { User } from "../models";

interface CustomRequest extends Request {
  userId?: string;
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: "Invalid email or password" });
    // if (!user.isVerified)
    //   return res.status(403).json({ message: "Email not verified" });
    const token = generateTokenAndSetCookie(res, user._id.toString());
    user.lastLogin = new Date();
    await user.save();
    res.json({
      message: "Амжилттай нэвтэрлээ",
      token,
      user: {
        ...user.toObject(),
        password: undefined,
      },
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const verifyEmail = async (req: Request, res: Response) => {
  const { verifyToken } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { verifyToken, verifyExpires: { $gt: Date.now() } },
      { $set: { verifyToken: null, verifyExpires: null } },
      { new: true }
    );
    if (!user)
      return res
        .status(400)
        .json({ message: "Invalid or expired verification token" });
    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyExpires = undefined;
    await user.save();
    await sendWelcomeEmail(user.email, user.name);
    res.status(200).json({
      message: "Email verified successfully",
      user: {
        ...user.toObject(),
        password: undefined,
      },
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(401).json({ message: "User already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const verifyToken = await Math.floor(
      1000 + Math.random() * 9000
    ).toString();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verifyToken,
      verifyExpires: Date.now() + 24 * 60 * 60 * 1000,
    });
    await user.save();
    generateTokenAndSetCookie(res, user._id.toString());
    // await sendVerifyEmail(user.email, verifyToken);
    res.status(200).json({
      message: "Success",
      user: {
        ...user.toObject(),
        password: undefined,
      },
    });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out" });
};
export const forgotPassword = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = resetExpires;

    await user.save();

    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}/forget/${resetToken}`
    );

    res.status(200).json({ message: "Reset password code sent to your email" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(404)
        .json({ message: "Password reset token expired or invalid" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    await sendResetSuccessEmail(user.email);

    res.status(200).json({ message: "Password reset successfully" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
export const checkAuth = async (req: CustomRequest, res: Response) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "user not found" });
    res.json({ user });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
