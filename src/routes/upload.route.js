import { Router } from "express";
import { checkAuth } from './../middlewares/auth.middleware.js'
import { uploadFile } from "../controllers/upload.controller";
import { upload } from './../config/storage.config.js'

const route = Router()

route.post('/file/upload', checkAuth, upload.single('image'), uploadFile,)

export default route;