import AdminPage from "./components/AdminPage";
import Home from "./components/Home";
import Login from "./components/Login";
import MyOrders from "./components/MyOrders";
import Order from "./components/Order";
import Product from "./components/Product";
import Products from "./components/Products";
import SignUp from "./components/SignUp";
import NavBar from "./layout/NavBar";
import { Route,Routes } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import Footer from "./layout/Footer";

const App = () => {
  return ( <>

  <NavBar/>
  
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Login" element={<PrivateRoute child={<Login/>}/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/Product" element={<Product/>}/>
  <Route path="/shop" element={<Products/>}/>
  <Route path="/Order" element={<Order/>}/>
  <Route path="/MyOrders" element={<MyOrders/>}/>
  <Route path="/admin" element={<AdminPage/>}/>

</Routes>
<Footer/>

  </> );
}
 
export default App;