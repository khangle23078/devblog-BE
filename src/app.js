import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { connectDb } from './database/connectDb.js'
import authRoute from './routes/auth.route.js'

const app = express()
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use('/api', authRoute)
connectDb()

export default app;