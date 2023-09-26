import { Link } from "react-router-dom";
import "./navBar.css"
const Navbar = () => {
    return ( 
        <>
         <nav className="navbar">
            <Link to = "/">Home</Link>
            <Link to = "/dogs">Dogs</Link>
            <Link to = "/checkout">My Cart</Link>
         </nav>
        </>
     );
}
 
export default Navbar;