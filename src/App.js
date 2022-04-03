import { useEffect } from "react";
import AdminPage from "./components/admin/Admin";
import Home from "./components/Home";
import About from "./components/About";
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
import { loadCart } from "./actions/cart";
import Cart from "./components/cart/Cart";
import Love from "./components/love/Love";
import AdminRoute from "./Routes/AdminRoute"
import { loadLove } from "./actions/love";
import Productlove from "./components/Product/Productlove";


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
    dispatch(loadCart())
    dispatch(loadLove())
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
  <Route path="/about" element={<About/>}/>
  <Route path="/shopbycat/:categoryId" element={<Products/>}/>
  <Route path="/Order" element={<Order/>}/>
  <Route path="/MyOrders" element={<MyOrders/>}/>
  <Route path="/admin" element={<AdminRoute child={<AdminPage/>}/>}/>
  <Route path='/cart' element={<Cart />} />
  <Route path='/love' element={<Love />} />
  <Route path='/productlove/:product_id' element={<Productlove/>}/>
</Routes>
<Footer/>

  </> );
}
 
export default App;