import jwt from 'jsonwebtoken'
const loginUser = (email,password) => {
    if(email==="admin@mail.com" && password==="password"){
        const token=jwt.sign({email},'SECRET')
        return {token}
    }
    else{
        return {token:null}
    }
    console.log(email,password)
}
 
export default loginUser;