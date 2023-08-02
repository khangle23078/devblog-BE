import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware";
import { createPost, deletePost, editPost, getPosts } from "../controllers/post.controller";

const route = Router()

route.get('/posts/', checkAuth, getPosts)
route.post('/posts/:id', checkAuth, createPost)
route.put('/posts/:id', checkAuth, editPost)
route.delete('/posts/:id', checkAuth, deletePost)

export default route;