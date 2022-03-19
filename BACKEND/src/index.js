import express from 'express'
import dotenv from 'dotenv'
import connectDB from './services/mongodb/connectDb'
dotenv.config()
const app=express()
connectDB()
app.listen(3000,()=>{
    console.log("server started!!")
})