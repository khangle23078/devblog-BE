import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware";
import { getPosts } from "../controllers/post.controller";

const route = Router()

route.get('/posts/', checkAuth, getPosts)

export default route;