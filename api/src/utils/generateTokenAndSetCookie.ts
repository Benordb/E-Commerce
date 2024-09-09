import jwt from 'jsonwebtoken';
import { Response } from 'express';

export const generateTokenAndSetCookie = (res:Response,userId:string) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
    res.cookie('token', token, { httpOnly: true, expires: new Date(Date.now() + 1000 * 60 * 60 * 24) });
    return token;
}
