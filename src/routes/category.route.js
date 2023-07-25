import { Router } from "express";
import { getCategories } from "../controllers/category.controller";
import { checkAuth } from './../middlewares/auth.middleware.js'

const route = Router()

route.get('/category', checkAuth, getCategories)

export default route;