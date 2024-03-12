import express from 'express'
import cors from 'cors'
import UserRouter from './routes/User/UserRouter.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use(UserRouter)



export default app