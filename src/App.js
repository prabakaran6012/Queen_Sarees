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
const App = () => {
  return ( <>
  <h1>Hai Cap Well come to Queen_Sarees Project</h1>
  <NavBar/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Login" element={<Login/>}/>
  <Route path="/SignUp" element={<SignUp/>}/>
  <Route path="/Product" element={<Product/>}/>
  <Route path="/products" element={<Products/>}/>
  <Route path="/Order" element={<Order/>}/>
  <Route path="/MyOrders" element={<MyOrders/>}/>
  <Route path="/AdminPage" element={<AdminPage/>}/>

</Routes>
  </> );
}
 
export default App;