import { Router } from "express";
import { checkAuth } from "../middlewares/auth.middleware";
import { createPost, deletePost, editPost, getPost, getPosts } from "../controllers/post.controller";

const route = Router()

route.get('/posts/', getPosts)
route.get('/posts/:id', getPost)
route.post('/posts', checkAuth, createPost)
route.put('/posts/:id', checkAuth, editPost)
route.delete('/posts/:id', checkAuth, deletePost)

export default route;