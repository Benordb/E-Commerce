import { RequestHandler } from "express";
import { Category } from "../models";

export const getAllCategories:RequestHandler=async (_req,res)=>{
    try{
        const categories = await Category.find({});
        res.status(200).json({categories});
    }catch(err:any){
        res.status(500).json({message:err.message});
    }
}
export const getCategoryById:RequestHandler=async (req,res)=>{
    const {id}=req.params;
    try{
        const category = await Category.findById(id);
        if(!category) return res.status(404).json({message:"Category not found"});
        res.status(200).json({category});
    }catch(err:any){
        res.status(500).json({message:err.message});
    }
}
export const createCategory:RequestHandler=async (req,res)=>{
    const {name}=req.body;
    try{
        const newCategory = new Category({name});
        await newCategory.save();
        res.status(201).json({category:newCategory});
    }catch(err:any){
        res.status(500).json({message:err.message});
    }
}