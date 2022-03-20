import express from 'express'
import User from '../services/mongodb/models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import isAdmin from '../middlewares/isAdmin'
import {body,validationResult} from 'express-validator'
const router=express.Router()





router.get('/users',isAdmin,async(req,res)=>{
    try {
        const users= await User.find({})
        res.json({users})
    } catch (error) {
    console.log(error.message)
    res.status(500).json({users:[]})
    }
})


router.post('/signup',
body('firstName').isLength({min:5}),
body('email').isEmail(),
body('password').isLength({min:8})

,async(req,res)=>{
    const {errors}=validationResult(req)
    if(errors.length>0) return res.status(403).json({errors,message:"Bad Request"})
    
    try {
        const {firstName,lastName='',email,password}=req.body
        const salt=await bcrypt.genSalt(5)
        const HashedPassword=await bcrypt.hash(password,salt)
        const users= new User({firstName,lastName,email,password:HashedPassword})
        await users.save()
        res.json({users})
    } catch (error) {
    console.log(error.message)
    res.status(500).json({users:{}})
    }
})
router.post('/login',async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(user){
            const isVerified=await bcrypt.compare(password,user.password)
            if(isVerified){
                const {_id,role}=user
                const token=jwt.sign({_id,role},process.env.JWT_SECRET,{expiresIn:"1h"})
                return res.json({token})
            }else{
                return res.json({token:null,message:"Unauthorized"})
            }
          
        }else{
            return res.json({token:null,message:"User dose not exixst"})
        }
    } catch (error) {
    console.log(error.message)
    res.status(500).json({users:{}})
    }
})



export default router