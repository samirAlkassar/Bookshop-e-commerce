import {BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import Home from "./pages/Home.jsx"
import Wishlist_Page from "./pages/Wishlist_Page.jsx"
import Cart_Page from "./pages/Cart_Page.jsx"
import Item_details from "./pages/Item_details.jsx"


function App() {

  return (
    <WishlistProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whishlist" element={<Wishlist_Page />} />
          <Route path="/cart" element={<Cart_Page />} />
          <Route path="/item-details" element={<Item_details />} />
        </Routes>
      </BrowserRouter>
    </WishlistProvider>
  );
}


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export default App;
