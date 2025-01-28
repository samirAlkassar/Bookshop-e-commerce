import { useState, createContext, useContext, useEffect } from "react";

const WishlistContext = createContext();

export const useWishlistContext = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error("useWishlistContext must be used within a WishlistProvider");
    }
    return context;
};

export const WishlistProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [cartList, setCartList] = useState([]);

    // const initialCartNumber = cartList.length;
    const [numberOfCartItems, setNumberOfCartItems] = useState(cartList.lengh);
    const [numberOfFavorites, setNumberOfFavorites] = useState(favorites.lengh);

    const [clickedItem, setClickedItem] = useState(() => {
        try {
            const storedClickedItem = localStorage.getItem("itemkey");
            return storedClickedItem ? JSON.parse(storedClickedItem) : null; // Parse and return as number
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return null;
        }
    });
    const [quantities, setQuantities] = useState(() => {
        const savedQuantities = localStorage.getItem('quantities');
        return savedQuantities ? JSON.parse(savedQuantities) : cartList.reduce((acc, item) => {
            acc[item.id] = 1; // Default quantity is 1 for each item
            return acc;
        }, {});
    });

    useEffect(() => {
        localStorage.setItem('quantities', JSON.stringify(quantities));
    }, [quantities]);

    // Save clickedItem to localStorage whenever it changes
    useEffect(() => {
        const timeout = setTimeout(() => {
            try {
                if (clickedItem !== null) { // Only save valid numbers
                    localStorage.setItem("itemkey", JSON.stringify(clickedItem));
                }
            } catch (error) {
                console.error("Error writing to localStorage", error);
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [clickedItem]);

    useEffect(() => {
        try {
            const storedFavs = localStorage.getItem("favorites");
            if (storedFavs) setFavorites(JSON.parse(storedFavs));
        } catch (error) {
            console.error("Error reading from localStorage", error);
        }
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            try {
                localStorage.setItem("favorites", JSON.stringify(favorites));
                setNumberOfFavorites(favorites.length);
            } catch (error) {
                console.error("Error writing to localStorage", error);
            }
        }, 300);

    

        return () => clearTimeout(timeout);
    }, [favorites]);


    useEffect(() => {
        try {
            const storedcarts = localStorage.getItem("cartkey");
            if (storedcarts) setCartList(JSON.parse(storedcarts));
        } catch (error) {
            console.error("Error reading from localStorage", error);
        }
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            try {
                localStorage.setItem("cartkey", JSON.stringify(cartList));
                setNumberOfCartItems(cartList.length);
            } catch (error) {
                console.error("Error writing to localStorage", error);
            }
        }, 300);

    

        return () => clearTimeout(timeout);
    }, [cartList]);


////////////////////////////////

//////////////////////////////////////////////////////
    const addToFavorites = (item) => {
        setFavorites((prev) =>[...prev, item]);
    };

    const removeFromFavorites = (itemId) => {
        setFavorites((prev) => prev.filter((item) => item.id !== itemId));
    };

    const isFavorite = (itemId) => {
        return favorites.some((item) => item.id === itemId);
    };



    const addToCart = (item) => {
        setCartList((prev) =>[...prev, item]);
    };

    const removeFromCart = (itemId) => {
        setCartList((prev) => prev.filter((item) => item.id !== itemId));
    };

    const isInCart = (itemId) => {
        return cartList.some((item) => item.id === itemId);
    };


    const handleItemClick = (itemID) => {
        setClickedItem(itemID)
    }
    console.log(clickedItem)
    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
        cartList,
        addToCart,
        removeFromCart,
        isInCart,
        numberOfCartItems,
        numberOfFavorites,
        clickedItem,
        handleItemClick,
        quantities,
        setQuantities
    };

    return (
        <WishlistContext.Provider value={value}>
            {children}
        </WishlistContext.Provider>
    );
};


//git add .
//git commit -m "message"
//git push 
//git pull > git push -f
