import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware";
import { createPost, getPosts } from "../controllers/post.controller";

const route = Router()

route.get('/posts/', checkAuth, getPosts)
route.post('/post/:id', checkAuth, createPost)

export default route;