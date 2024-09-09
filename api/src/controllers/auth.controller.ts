import { Request, Response } from 'express';
import { User } from '../models/user.model';
import bcrypt from 'bcrypt';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';
import { sendVerifyEmail, sendWelcomeEmail } from '../mailtrap/emails';

  export const login = async (req:Request, res:Response) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({ email });
        if (!user ||!(await bcrypt.compare(password, user.password)))
            return res.status(401).json({ message: "Invalid email or password" });
        if (!user.isVerified) return res.status(403).json({ message: "Email not verified" });
        const token = generateTokenAndSetCookie(res, user._id.toString());
        user.lastLogin=new Date();
        await user.save();
        res.json({ message: "Logged in successfully", token,user:{
            ...user.toObject(),
                password: undefined,
            }
        });
    }
    catch(err:any){
        res.status(500).json({ message: err.message })
    }
    
  };
  export const verifyEmail = async (req:Request, res:Response) => {
    const {verifyToken} = req.body;
    try{
        const user = await User.findOneAndUpdate(
            {verifyToken, verifyExpires: {$gt: Date.now()}},
            {$set: {verifyToken: null, verifyExpires: null}},
            {new: true}
        );
        if (!user) return res.status(400).json({ message: "Invalid or expired verification token" });
        user.isVerified = true;
        user.verifyToken=undefined;
        user.verifyExpires=undefined;
        await user.save();
        await sendWelcomeEmail(user.email, user.name)
        res.status(200).json({ message: "Email verified successfully",
            user:{
                ...user.toObject(),
                password: undefined,
            }
         });
    }
    catch(err:any){
        res.status(500).json({message: err.message})
    }
  };
  export const register = async (req:Request, res:Response) => {
    const {email, password,name} = req.body;
    try{
        const existingUser =await User.findOne({email});
        if (existingUser) return res.status(401).json({ message: "User already exists" });
        const hashedPassword = await bcrypt.hash(password, 10);
        const verifyToken = await Math.floor(1000+Math.random()*9000).toString();
        const user = new User({
    email,
    password: hashedPassword,
    name,
    verifyToken,
    verifyExpires: Date.now() + 24* 60* 60*1000,
  });
  await user.save();
  generateTokenAndSetCookie(res,user._id.toString())
  await sendVerifyEmail(user.email,verifyToken)
res.status(200).json({ message: "Success",
    user:{
        ...user.toObject(),
        password: undefined,
    }});

    }
    catch(err:any){
        res.status(500).json({message: err.message})
    }
  };
  export const logout=async (req:Request, res:Response)=>{
    res.clearCookie("token")
    res.status(200).json({message: "Logged out successfully"})
  }