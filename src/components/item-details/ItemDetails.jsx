import React, { useState } from 'react';
import './itemDetails.css'; // Import the CSS
import {Link, useAsyncError} from "react-router-dom"
import Filter from "../ui-elements/Filter"
import Avatar from "../../assets/avatar.jpg"
import Samir from "../../assets/samir.jpeg"
import { enhancedItems } from "../../constants/items.js";
import { useWishlistContext } from "../../context/WishlistContext.jsx";
import {Comments_list} from "../../constants/constants.js"

const ItemDetails = () => {
    const { addToCart, removeFromCart, isInCart ,addToFavorites,removeFromFavorites,isFavorite,clickedItem, quantities, setQuantities } = useWishlistContext();
    const currentItem = enhancedItems.find(item => item.id == clickedItem);
    console.log(currentItem, clickedItem)
    const {id, image, title, description, category, price, rating} = currentItem
    const favorite = isFavorite(id); //return true if in the favorites ,otherwise false
    const incart = isInCart(id); //return true if in the cart ,otherwise false

    const handleSelection = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Number(value),
        }));
    };
    
    
      
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
        <section className="item-details">
            <div className="box-container">
                <div className="sub-header">
                    <p><Link to="/"><a href="#">Home</a></Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <a href="#">{currentItem.title}</a>
                </p>
                </div>
                <div className="top-section">
                    <LeftSection handleSelection={handleSelection} id={id}  quantity={quantities[id] || 1} currentItem={currentItem} favorite={favorite} incart={incart} toggleFavorite={toggleFavorite} toggleCart={toggleCart}/>
                    <MiddleSection currentItem={currentItem}/>
                    <RightSection />
                </div>
                <div className="overview">
                    <OverView />
                </div>
                <div className="product-rating">
                    <ProductRating />
                </div>
                <div className="Recomendations">
                    <Recomendations />
                </div>
            </div>
        </section>
    )
};


function LeftSection({currentItem,toggleFavorite,toggleCart,favorite, incart,handleSelection,quantity,id}){
    return (
        <div className="show-item-container">
            <div className="top-wrapper">
                <div className="side-carasel">
                <img src={currentItem.image} alt={currentItem.tilte} />
                <img src={currentItem.image} alt={currentItem.tilte} />
                <img src={currentItem.image} alt={currentItem.tilte} />
                <img src={currentItem.image} alt={currentItem.tilte} />
                </div>
                <div className="main-image">
                    <img src={currentItem.image} alt={currentItem.tilte} />
                </div>
            </div>
            <div className="bottom-wrapper">
                <select onChange={(e) => handleSelection(id, e.target.value)} 
                        value={quantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button style={{background:incart? "#28A745":"#0056B3"}} onClick={toggleCart} className='add-btn'>Add To Cart</button>
                <button  onClick={toggleFavorite} className='favorite-btn'><i className={favorite ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i></button>
            </div>
        </div>
    )
}
function MiddleSection({currentItem}){
    return (
        <div className="item-info-container">
            <div className="top-header">
                <p className='best-seller'><span>best seller</span> in Books <i class="fa-solid fa-chevron-right"></i></p>
                <p className='incart'><i class="fa-solid fa-cart-shopping"></i> in Your Cart</p>
            </div>
            <h1>{currentItem.title}</h1>
            <h5>{currentItem.description}</h5>
            <p>was: <del>EGP 8888.00</del></p>
            <p>Now: <b>EGP {currentItem.price}</b></p>
            <p>Saving: EGP 3066.00 <span>34% Off</span></p> 
            <p className='express'>Express</p>
            <div className="value-wrapper">
                <div className="card">
                    <i className="fa-solid fa-truck"></i>
                    <p>Delivery by Ezz-El-Deen</p>
                </div>
                <div className="card">
                    <i className="fa-solid fa-star"></i>
                    <p>High Rated Seller</p>
                </div>
                <div className="card">
                    <i className="fa-solid fa-arrow-rotate-left"></i>
                    <p>Low Returns</p>
                </div>
                <div className="card">
                    <i className="fa-solid fa-credit-card"></i>
                    <p>Cash on Delivery</p>
                </div>
            </div>
            <p>Color Name: <b>Midnight Black</b></p>
            <div className="color-wrapper">
            <img src={currentItem.image} alt={currentItem.tilte} />
            <img src={currentItem.image} alt={currentItem.tilte} />
            <img src={currentItem.image} alt={currentItem.tilte} />
            <img src={currentItem.image} alt={currentItem.tilte} />
            </div>
        </div>
    )
}
function RightSection(){
    return (
        <div className="side-info">
           <p><i className="fa-solid fa-certificate"></i> 1 year warranty <a href="#">Learn more</a></p>
           <p><i className="fa-solid fa-door-closed"></i> Free delivery on Lockers & Pickup Points <a href="#">Learn more</a></p>
           <p><i className="fa-solid fa-arrow-rotate-left"></i> This item cannot be exchanged or returned</p>
            <div className="side-info-value-wrapper">
                <div className='sold-by'>
                    <i className="fa-solid fa-store"></i>
                    <span>sold by <b>Ezz-El-Deen</b> <br /> <span className='rating-span'>4.2 <i className="fa-solid fa-star"></i></span> <span className="percentage">80% Positive Ratings</span> </span>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="values">
                    <div className="value-card">
                        <i class="fa-solid fa-handshake-angle"></i>
                        <p>Partner Since <br /> <span>4+ Years</span></p>
                    </div>
                    <div className="value-card">
                        <i className="fa-solid fa-file"></i>
                        <p>Item as Described <span className='green-cart'></span> <span>90%</span></p>
                    </div>
                    <div className="value-card">
                        <i className="fa-solid fa-handshake-angle"></i>
                        <p>Great Recent <br />Rating</p>
                    </div>
                    <div className="value-card">
                        <i className="fa-solid fa-handshake-angle"></i>
                        <p>Low Return Seller</p>
                    </div>
                </div>
            </div>
            <div className='bottom-container'>
                <i className="fa-solid fa-truck"></i>
                <h6>TRUSTED SHIPPING</h6>
            </div>
            <div className='bottom-container'>
                <i className="fa-solid fa-shield"></i>
                <h6>SECURE SHOPPING</h6>
            </div>
        </div>
    )
}
function OverView(){
    return (
        <div className="overview-container">
            <h1 className="overview-header">Overview</h1>
            <div className="overview-wrapper">
                <div className="overview-list">
                    <h4>Hightlights</h4>
                    <ul>
                        <li>Powerful mediatek helio G85</li>
                        <li>Smooth 6.74 inch 90Hz display</li>
                        <li>50MP AI triple camera</li>
                        <li>Support 18W fast charging</li>
                    </ul>
                </div>
                <div className="overview-table">
                    <h4>Specifications</h4>

                    <table>
                        <tr>
                            <th>SIM Count</th>
                            <td>Dual SIM</td>
                        </tr>
                        <tr>
                            <th>RAM Size</th>
                            <td>6 GB</td>
                        </tr>
                        <tr>
                            <th>Battery Size</th>
                            <td>5000 MAh</td>
                        </tr>
                        <tr>
                            <th>Internal Memory</th>
                            <td>128 GB</td>
                        </tr>
                        <tr>
                            <th>Screen Size</th>
                            <td>6.74 In</td>
                        </tr>
                        <tr>
                            <th>Version</th>
                            <td>Middle East Version</td>
                        </tr>
                        <tr>
                            <th>SIM Type</th>
                            <td>Noano SIM</td>
                        </tr>
                        <tr>
                            <th>Colour Name</th>
                            <td>Midnight Black</td>
                        </tr>
                        <tr>
                            <th>Condition</th>
                            <td>New</td>
                        </tr>
                        <tr>
                            <th>Model Number</th>
                            <td>23100RN82L, 23106RN0DA</td>
                        </tr>
                        <tr>
                            <th>Model Name</th>
                            <td>Redmi 13C</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
function ProductRating(){
    const select_stars = [
        {label:"All Stars", value:"All"},
        {label:"★", value:"1"},
        {label:"★★", value:"2"},
        {label:"★★★", value:"3"},
        {label:"★★★★", value:"4"},
        {label:"★★★★★", value:"5"},
    ]
    const select_sort = [
        {label:"Top Review", value:"1"},
        {label:"Most Recent", value:"2"},
        {label:"Highest Rating", value:"3"},
        {label:"Lowest Rating", value:"4"},
    ]
    const handelSelection = ()=>{
        
    }

    return (
        <div className="productrating-container">
            <h1 className="productrating-header">Product Rating & Reviews</h1>
            <div className="productrating-wrapper">
                <div className="left-section">
                <span class="heading">User Rating</span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <p>4.1 average based on 254 reviews.</p>
                <hr style={{border:"3px solid #f1f1f1"}}/>

                <div class="row">
                <div class="side">
                    <div>5 star</div>
                </div>
                <div class="middle">
                    <div class="bar-container">
                    <div class="bar-5"></div>
                    </div>
                </div>
                <div class="side right">
                    <div>150</div>
                </div>
                <div class="side">
                    <div>4 star</div>
                </div>
                <div class="middle">
                    <div class="bar-container">
                    <div class="bar-4"></div>
                    </div>
                </div>
                <div class="side right">
                    <div>63</div>
                </div>
                <div class="side">
                    <div>3 star</div>
                </div>
                <div class="middle">
                    <div class="bar-container">
                    <div class="bar-3"></div>
                    </div>
                </div>
                <div class="side right">
                    <div>15</div>
                </div>
                <div class="side">
                    <div>2 star</div>
                </div>
                <div class="middle">
                    <div class="bar-container">
                    <div class="bar-2"></div>
                    </div>
                </div>
                <div class="side right">
                    <div>6</div>
                </div>
                <div class="side">
                    <div>1 star</div>
                </div>
                <div class="middle">
                    <div class="bar-container">
                    <div class="bar-1"></div>
                    </div>
                </div>
                <div class="side right">
                    <div>20</div>
                </div>
                </div>
                </div>

                <div className="right-section">
                    <div className="review-header">
                        <h4>9 Reviews</h4>
                        <div className="review-filters">
                            <Filter label="Filter By:"
                                    icon="fa-solid fa-sort"
                                    filter_list={select_stars}
                                    handelSelection={handelSelection}/>

                            <Filter label="Sort By:"
                                    icon="fa-solid fa-arrow-down-short-wide"
                                    filter_list={select_sort}
                                    handelSelection={handelSelection}/>
                        </div>
                    </div>
                    <div className="comments-wrapper">

                        {Comments_list.map((comment)=>(
                            <Comment comment={comment.comment}
                             userName={comment.userName}
                              verifiedPerchace={comment.verified_purchase}
                              profilePic={comment.profile_pic} />
                        ))}

                    </div>
                    <div className="reviews-wrapper">

                    </div>
                </div>
            </div>
        </div>
    )
}
function Recomendations(){
    return (
        <h1>Recomendations</h1>
    )
}


function Comment({comment, userName, verifiedPerchace,profilePic = "https://i.pinimg.com/736x/0f/68/94/0f6894e539589a50809e45833c8bb6c4.jpg"}){
    return(
        <div className="comment-container">
        <div className="image-wrapper">
            <img width={"100px"} src={profilePic} alt="avatar"/>
        </div>
        <div className="wrapper">
            <div>
                <div>
                    <h1 className='userName'>{userName}</h1>
                    <span className='Rating'>
                    <i class="fa-solid fa-sta stared"></i>
                    <i class="fa-solid fa-star stared"></i>
                    <i class="fa-solid fa-star stared"></i>
                    <i class="fa-solid fa-star stared"></i>
                    <i class="fa-solid fa-star"></i>
                    </span>
                </div>
                <div>
                    <p className='Data'>2022-03-25</p>
                    {verifiedPerchace && <span className='Verified'>Verified Purchase ✅</span>}
                </div>
            </div>
            <div className="comment">
                <p>{comment}</p>
                <a href="#">More</a>
            </div>
        </div>
    </div>
    )
}



export default ItemDetails;


//this component is for item's details 🖊️🖊️
// another commit
//another commit