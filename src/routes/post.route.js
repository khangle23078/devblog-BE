import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware";
import { createPost, editPost, getPosts } from "../controllers/post.controller";

const route = Router()

route.get('/posts/', checkAuth, getPosts)
route.post('/posts/:id', checkAuth, createPost)
route.put('/posts/:id', checkAuth, editPost)

export default route;