import { Router } from "express";
import { createCategory, getCategories } from "../controllers/category.controller";
import { checkAuth } from './../middlewares/auth.middleware.js'

const route = Router()

route.get('/categories', checkAuth, getCategories)
route.post('/category', checkAuth, createCategory)

export default route;