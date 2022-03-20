import jwt from "jsonwebtoken";
const isAdmin=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        const {role}=decoded
        if(role==1){
            return next()
        }else{
            return res.json({message:"ACCESS DENIED!"})
        }
    }else{
        return res.json({message:"UNAUTHORISED"})
    }
}
export default isAdmin