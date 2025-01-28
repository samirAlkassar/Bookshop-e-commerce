import React, { useState, createContext, useContext } from 'react';
import "./cart.css";
import ButtonSm from "../ui-elements/ButtonSm.jsx";
import { useWishlistContext } from "../../context/WishlistContext.jsx";

const useCartContext = createContext();

const Cart = () => {
    const { cartList, numberOfCartItems } = useWishlistContext();
    const [quantities, setQuantities] = useState(() => {
        const savedQuantities = localStorage.getItem('quantities');
        return savedQuantities ? JSON.parse(savedQuantities) : cartList.reduce((acc, item) => {
            acc[item.id] = 1; // Default quantity is 1 for each item
            return acc;
        }, {});
    });

    React.useEffect(() => {
        localStorage.setItem('quantities', JSON.stringify(quantities));
    }, [quantities]);

    const number_selections = [
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
    ];

    const handleSelection = (id, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: Number(value),
        }));
    };

    const total = cartList.reduce((sum, item) => sum + item.price * (quantities[item.id] || 1), 0).toFixed(2);

    const value = {
        setQuantities,
        quantities,
        number_selections,
        handleSelection,
        numberOfCartItems,
        total,
    };

    return (
        <useCartContext.Provider value={value}>
            <section className="cart">
                <div className="box-container flex-container">
                    <LeftSection />
                    <RightSection />
                </div>
            </section>
        </useCartContext.Provider>
    );
};

const LeftSection = () => {
    const { isFavorite, cartList, removeFromCart, addToFavorites } = useWishlistContext();
    const { number_selections, quantities, handleSelection } = useContext(useCartContext);

    return (
        <section className="left-section">
            <div className='cart-header'>
                <h1>Cart</h1>
                <span>({cartList.length} items)</span>
            </div>
            {!cartList.length ? (
                <p>No items, add items to your Cart</p>
            ) : (
                cartList.map((item) => (
                    <CartItem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        id={item.id}
                        description={item.description}
                        rating={item.rating}
                        category={item.category}
                        removeFromCart={() => removeFromCart(item.id)}
                        addToFavorites={() => {
                            if (isFavorite(item.id)) {
                                console.log("Item is already in favorites");
                            } else {
                                addToFavorites(item);
                            }
                        }}
                        number_selections={number_selections}
                        quantity={quantities[item.id] || 1}
                        handleSelection={handleSelection}
                    />
                ))
            )}
        </section>
    );
};

const RightSection = () => {
    const { numberOfCartItems, total } = useContext(useCartContext);
    return (
        <section className="right-section">
            <div className="order-summary-wrapper">
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    <div className='coupon-input'>
                        <input type="text" placeholder='Coupon Code' />
                        <button className='apply-btn'>Apply</button>
                    </div>
                    <div className="total-price">
                        <p>Subtotal ({numberOfCartItems} items)</p>
                        <h4>EGP {total}</h4>
                    </div>
                    <div className="total-price">
                        <p>Shipping fee</p>
                        <h4>Free</h4>
                    </div>
                    <hr />
                    <div className="total-price">
                        <h2>Total <span>(inclusive of VAT)</span></h2>
                        <h2>EGP {total}</h2>
                    </div>
                    <p>🏦 Monthly payment plans from EGP 500 <a href="#">View more details</a></p>
                    <button className='checkout-btn'>CHECKOUT</button>
                </div>
            </div>
        </section>
    );
};

const CartItem = ({ image, title, description, category, price, rating, id, removeFromCart, addToFavorites, quantity, handleSelection }) => {
    const { number_selections } = useContext(useCartContext);

    return (
        <div className='cartItem'>
            <div className='left-wrapper'>
                <img src={image} alt={title} />
            </div>

            <div className='middle-wrapper'>
                <>
                    <h4 className='item-title'>{title}</h4>
                    <p className='delivery-time'>Get it Tomorrow</p>
                    <p className='soldby'>Sold by <span>Ezz El-deen</span></p>
                    <p className='fast-delivery'>Get it as fast delivery as today! Select fast delivery on the checkout</p>
                    <p className='return-policy'>This item cannot be exchanged or returned</p>
                </>
                <div className="buttons-wrapper">
                    <ButtonSm event={removeFromCart} text="Remove" icon="fa-solid fa-trash-can" />
                    <ButtonSm event={addToFavorites} text="Move to wishlist" icon="fa-regular fa-heart" />
                </div>
            </div>

            <div className='right-wrapper'>
                <div>
                    <h1 className='item-price'><span>EGP</span>{price}</h1>
                    <p className='sale-percentage'>30% off sale</p>
                    <p className='express'>Express</p>
                    <p className='free-delivery'>Free delivery</p>
                </div>
                <div>
                    <span className='qty'>Qty</span>
                    <select 
                        onChange={(e) => handleSelection(id, e.target.value)} 
                        value={quantity}
                        name="order-number" 
                        id="order-number">
                        {number_selections.map((number) => (
                            <option key={number.value} value={number.value}>{number.value}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Cart;
