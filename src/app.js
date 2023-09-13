import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { connectDb } from './database/connectDb.js'
import authRoute from './routes/auth.route.js'
import categoryRoute from './routes/category.route.js'
import postRoute from './routes/post.route.js'
import uploadRoute from './routes/upload.route.js'
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('common'))
app.use('/api', authRoute)
app.use('/api', categoryRoute)
app.use('/api', postRoute)
app.use('/api', uploadRoute)
connectDb()

export default app;