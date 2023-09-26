import { useContext, useState } from "react";
import "./dogs.css"
import { CartContext } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
 
const DogsCard = (props) => {
    const {id, name, breed, description, price, imageUrl} = props;
    const {addToCart, setTotal} = useContext(CartContext);
    const [isAdded, setAdded] = useState(false);
    const navigate = useNavigate();

    const handleClick = () =>{
         setAdded(true);
         const newItems = {
            name: name,
            price: price,
            imageUrl: imageUrl
         }
         addToCart((item) => [...item, newItems]);
         setTotal((total) => (total += Number(price)));
         navigate("/checkout")
    }
    return ( 
        <>
         <section className="dogs">
            <div className="dogs-info">
                <p>{name}</p>
                <p>{breed}</p>
            </div>
            <div className="dogs-image-container">
                <img className="dog-img" src={imageUrl} alt= {`image: ${name}`} />
            </div>
            <div className="dogs-desc">
                {description}
            </div>
            <div className="dogs-price">
                {price}$
            </div>
            {isAdded ? (
                <button className="dogs-btn-disabled">ADDED</button>
            ) : (
                <button className="dogs-btn" onClick={handleClick}>ADD TO CART</button>
            )}
         </section>
        </>
     );
}
 
export default DogsCard;