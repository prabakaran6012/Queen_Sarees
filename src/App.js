import AdminPage from "./components/AdminPage";
import Home from "./components/Home";
import Login from "./components/Login";
import MyOrders from "./components/MyOrders";
import Order from "./components/Order";
import Product from "./components/Product";
import Products from "./components/Products";
import SignUp from "./components/SignUp";

const App = () => {
  return ( <>
  <h1>Hai Cap Well come to Queen_Sarees Project</h1>
  <Home/>
  <SignUp/>
  <Login/>
  <Product/>
  <Products/>
  <MyOrders/>
  <Order/>
  <AdminPage/>
  </> );
}
 
export default App;