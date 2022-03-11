import { Link } from "react-router-dom";
const NavBar = () => {
    return ( <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/SignUp">SignUp</Link></li>
        <li><Link to="Product">Product</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/Order">Order</Link></li>
        <li><Link to="/MyOrders">MyOrders</Link></li>
        <li><Link to="/AdminPage">AdminPage</Link></li>
    </ul>
    
    </> );
}
 
export default NavBar;