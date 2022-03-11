import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const Login = () => {
    const {token}=useSelector(state=>state.auth)
    return token!=null ? <Navigate to="/"/> :
    ( <><h1>Login Page</h1></> )

}
 
export default Login;