import { useEffect } from "react";
import AdminPage from "./components/admin/Admin";
import Home from "./components/Home";
import Login from "./components/auth/Login";
import MyOrders from "./components/MyOrders";
import Order from "./components/Order";
import Product from "./components/Product/Product";
import Products from "./components/Products";
import SignUp from "./components/auth/SignUp";
import NavBar from "./layout/NavBar";
import { Route,Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Footer from "./layout/Footer";
import {Toaster} from 'react-hot-toast'
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch= useDispatch()
  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token)
    {
        dispatch({
          type:"SET_AUTH_TOKEN",
          payload:{token}
        })
    }
  },[])
  return ( <>
<div><Toaster/></div>
  <NavBar/>
 
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Login" element={<PrivateRoute child={<Login/>}/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/shop/:productId" element={<Product/>}/>
  <Route path="/shop" element={<Products/>}/>
  <Route path="/Order" element={<Order/>}/>
  <Route path="/MyOrders" element={<MyOrders/>}/>
  <Route path="/admin" element={<AdminPage/>}/>
  

</Routes>
<Footer/>

  </> );
}
 
export default App;