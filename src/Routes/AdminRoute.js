import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import jwt_decode from "jwt-decode";
const decode=(token)=>{
const decoded=jwt_decode(token);
return decoded
}

const AdminRoute = ({child}) => {
    const {token}=useSelector(state=>state.auth)
   const decoded= decode(token)
   const {role}=decoded
   console.log(role)

    return role == 1 ? child:<Navigate to="/"/>
}
 
export default AdminRoute;