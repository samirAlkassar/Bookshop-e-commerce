import React from "react";
import "./itemcard.css" // Create a separate CSS file for the card.
import { useWishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom"

function ItemCard({ image, title, description, category, price, rating, id,handleItemClick }) {
  const { isFavorite, addToFavorites, removeFromFavorites, addToCart, removeFromCart, isInCart } =
    useWishlistContext();
  const favorite = isFavorite(id); //return true if in the favorites ,otherwise false
  const incart = isInCart(id); //return true if in the favorites ,otherwise false

  


  
  const toggleFavorite = () => {
    if (favorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({
        id,
        image,
        title,
        description,
        category,
        price,
        rating,
      });
    }
  };

  const toggleCart = () => {
    if (incart) {
      removeFromCart(id);
    } else {
      addToCart({
        id,
        image,
        title,
        description,
        category,
        price,
        rating,
      });
    }
  };
  
  return (
    <div className="card">

      <i
        onClick={toggleFavorite}
        className={favorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}
      ></i>
      <Link to="/item-details">
      <div onClick={handleItemClick} className="card-imagecontainer">
        <img src={image} alt={title} />
      </div>
      </Link>

      <div className="cardtext-container">
        <Link onClick={handleItemClick} to="/item-details">
          <h5 className="item-title">{title}</h5>

          <span className="category">
            <p className="item-category">{category}</p>
            <p>
              {rating} <i className="fa-solid fa-star"></i>
            </p>
          </span>
        </Link>
        <p className="item-description">{description}</p>

        <div className="card-bottom-section">
          <Link onClick={handleItemClick} to="/item-details">
            <div className="priceTage">
              <h6>EGP</h6>
              <h4>{price}</h4>
            </div>
          </Link>
          <button onClick={toggleCart} style={{backgroundColor:incart? "#28a745":"lightgray",color:incart?"white":"black"}} className="add-to-card-btn">Add to cart</button>
        </div>
      </div>

    </div>
  );
}

export default ItemCard;
