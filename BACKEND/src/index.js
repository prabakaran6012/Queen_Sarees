import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDb'
import cors from 'cors'
import authRoutes from './routes/authRoutes'
dotenv.config()
const app=express()
connectDB()
const port=process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use("/api/v1/auth",authRoutes)
app.listen(port,()=>{
    console.log(`server started!! ${port}`)
})