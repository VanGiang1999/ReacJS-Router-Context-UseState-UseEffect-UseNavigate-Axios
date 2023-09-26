import { useContext } from "react";
import { CartContext } from "../../Contexts/CartContext";
import "./cart.css"
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const {myCart,total,addToCart,setTotal} = useContext(CartContext);
    const navigate = useNavigate();
    const handleCheckout = () =>{
      setTotal(0);
      addToCart([{}])
    };
    const handleHome = () =>{
        navigate("/")
    }
    return ( 
        <>
         <div className="cart-container">
            <div className="cart-header">
                CHECKOUT:
            </div>
            <div className="cart-items">
               {myCart.slice(1).map((item) => {
                    return(
                      <div className="cart-item" key={item.id}>
                        <img src={item.imageUrl} className="cart-item-img" alt="" />
                        {item.name} : {item.price}$
                      </div>
                    )
                 })}
                 <div className="cart-total">Total: {total}$</div>
            </div>
            <button className="cart-checkout" onClick={handleCheckout}>
                DONE
            </button>
            <button className="cart-gohome" onClick={handleHome}>Back Home</button>
         </div>
        </>
     );
}
 
export default Cart;