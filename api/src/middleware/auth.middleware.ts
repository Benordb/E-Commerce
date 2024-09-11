import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface CustomRequest extends Request {
  userId?: string;
}

export const verifyToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const auth = req.headers.authorization;
  const token = req.cookies.token || auth?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Нэвтрэнэ үү!-no token" });
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;
    if (!decoded)
      return res.status(401).json({ message: "Нэвтрэнэ үү!-invalid token" });
    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Нэвтрэнэ үү!" });
  }
};
