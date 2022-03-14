import jwt from 'jsonwebtoken'
import toast from 'react-hot-toast'
const loginUser = (email,password) => {
    const users=JSON.parse(localStorage.getItem('users'))
    const user=users.find(u=>u.Email===email)
    if(user.Email === email && user.Password===password){
        toast.success("LOGIN SUCCESS")
        const token=jwt.sign({email:user.Email},'SECRET')
        return {
            type:"LOGIN_SUCCESS",
            payload:{token}
        }
    }
    else{
        toast.error("Something Went Wrong")
        return {
        type:"LOGIN_FAILL",
        payload:{token:null}
    }
    }
    
}
 
export default loginUser;