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
import axios from "axios";

const App = () => {
  const getAllProducts = async() => {
    const res = await axios.get('https://prabakaran-queen-s-backend.herokuapp.com/api/v1/product/all')
    const { products } = res.data
    const a=products.map(pd=>{return pd})
    console.log(a)
    
    // setproducts(products)
    dispatch({
        type: "GET_PRODUCTS",
        payload:{products}
    })
}
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
    getAllProducts()
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