import { Router } from "express";
import { createCategory, getCategories, getCategory } from "../controllers/category.controller";
import { checkAuth } from './../middlewares/auth.middleware.js'

const route = Router()

route.get('/categories', checkAuth, getCategories)
route.get('/category/:id', checkAuth, getCategory)
route.post('/category', checkAuth, createCategory)

export default route;