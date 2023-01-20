import Express from "express";
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan";

import productsRoutes from "./routes/products.routes"
import UsersRoutes from "./routes/users.routes"
import authRoutes from "./routes/auth.routes"


//TODO data base

import './database'

dotenv.config()

const app = Express()

app.use(Express.json())
app.use(cors())
app.use(morgan("dev"))

app.use('/api/products', productsRoutes)
app.use('/api/users', UsersRoutes)
app.use('/api/auth', authRoutes)



export default app