import { Router } from "express";
import { createCategory, getAllCategories, getCategoryById } from "../controllers/category.controller";

const categoryRouter=Router()
categoryRouter
    .get('/',getAllCategories)
    .get('/:id',getCategoryById)
    .post('/',createCategory)

export {categoryRouter}