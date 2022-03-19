import express from 'express'
import User from '../services/mongodb/models/User'
const router=express.Router()





router.get('/users',async(req,res)=>{
    try {
        const users= await User.find({})
        res.json({users})
    } catch (error) {
    console.log(error.message)
    res.status(500).json({users:[]})
    }
})


router.post('/signup',async(req,res)=>{
    try {
        const {firstName,lastName='',email,password}=req.body
        const users= new User({firstName,lastName,email,password})
        res.json({users})
    } catch (error) {
    console.log(error.message)
    res.status(500).json({users:{}})
    }
})




export default router