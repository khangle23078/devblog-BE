import { Router } from "express";
import { checkAuth } from './../middlewares/auth.middleware.js'
import { deleteFile, uploadFile } from "../controllers/upload.controller";
import { upload } from './../config/storage.config.js'

const route = Router()

route.post('/file/upload', checkAuth, upload.single('image'), uploadFile,)
route.delete('/file/destroy', checkAuth, deleteFile)

export default route;