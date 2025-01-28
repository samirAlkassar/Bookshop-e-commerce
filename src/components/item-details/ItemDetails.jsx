import React, { useState } from 'react';
import './itemDetails.css'; // Import the CSS
import {Link} from "react-router-dom"

const ItemDetails = () => {
    return (
        <section className="item-details">
            <div className="box-container">
                <div className="sub-header">
                    <p><Link to="/"><a href="#">Home</a></Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <a href="#">Product Name</a>
                </p>
                </div>
                <div className="top-section">
                    <LeftSection />
                    <MiddleSection />
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


function LeftSection(){
    return (
        <div className="show-item-container">
            <div className="top-wrapper">
                <div className="side-carasel">
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1709822664/ac09b153-6a69-47f5-9b21-842cd119900b.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140264/25b68e86-8a8a-476e-a682-786b3703fd85.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140261/d00a00b0-7ce9-4bea-a930-b8da1dc264bd.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140262/77611501-fdb0-4774-a6cc-2fd572125071.jpg?format=avif&width=240" alt="" />
                    {/* <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140263/27e4ace9-fa14-4838-978a-23d609ba355c.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140261/482c81ff-bf04-4062-9c9b-9a34687d5277.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140263/2c39d018-84cc-4dfa-a064-36c8f3e0e80d.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140265/79cb13d2-48ec-405c-90f2-cf62b73621bf.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140266/24269bbf-30a0-430f-a04d-d04be4737fa1.jpg?format=avif&width=240" alt="" />
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140267/74a70ced-c724-43d2-9c04-2e427c9f4989.jpg?format=avif&width=240" alt="" /> */}
                </div>
                <div className="main-image">
                    <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1709822664/ac09b153-6a69-47f5-9b21-842cd119900b.jpg?format=avif&width=240" alt="" />
                </div>
            </div>
            <div className="bottom-wrapper">
                <select name="" id="">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                </select>
                <button className='add-btn'>Add To Cart</button>
                <button className='favorite-btn'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
    )
}
function MiddleSection(){
    return (
        <div className="item-info-container">
            <div className="top-header">
                <p className='best-seller'><span>best seller</span> in Books <i class="fa-solid fa-chevron-right"></i></p>
                <p className='incart'><i class="fa-solid fa-cart-shopping"></i> in Your Cart</p>
            </div>
            <h1>TItle</h1>
            <h5>Description</h5>
            <p>was: <del>EGP 8888.00</del></p>
            <p>Now: <b>EGP 8888.00</b></p>
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
                <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1709822664/ac09b153-6a69-47f5-9b21-842cd119900b.jpg?format=avif&width=240" alt="" />
                <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140264/25b68e86-8a8a-476e-a682-786b3703fd85.jpg?format=avif&width=240" alt="" />
                <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140261/d00a00b0-7ce9-4bea-a930-b8da1dc264bd.jpg?format=avif&width=240" alt="" />
                <img src="https://f.nooncdn.com/p/pnsku/N70031501V/45/_/1703140262/77611501-fdb0-4774-a6cc-2fd572125071.jpg?format=avif&width=240" alt="" />
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
    return (
        <h1>ProductRating</h1>
    )
}
function Recomendations(){
    return (
        <h1>Recomendations</h1>
    )
}



export default ItemDetails;


//this component is for item's details 🖊️🖊️
// another commit