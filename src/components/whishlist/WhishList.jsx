import React from "react";
import "../3-main/main.css";
import "./whishlist.css";
import { useWishlistContext } from "../../context/WishlistContext.jsx";
import { useState, useEffect, createContext, useContext, useRef } from "react";
import ItemCard from "../ItemCard/ItemCard.jsx";
import ButtonSm from "../ui-elements/ButtonSm.jsx"

const useFormContext = createContext();


const WhishList = () => {
  const { favorites } = useWishlistContext();
  const [openForm, setOpenForm] = useState(false);
  const [newWishlist, setNewWishlist] = useState("");
  const [isDefaultChecked, setIsDefaultChecked] = useState(false); // Track checkbox state
  const [wishlists, setWishlists] = useState(() => {
    const storedList = localStorage.getItem("wishlistItems");
    return storedList? JSON.parse(storedList) : [{ id: "default", title: "Default", isDefault: true, itemsCount: 0}];});
  const [defaultWishlistId, setDefaultWishlistId] = useState("default"); // Track the default wishlist ID
  const [dropdown, setDropdown] = useState(null);

  let menuRef = useRef([])
  useEffect(()=>{
    let handler = (e)=>{
      if (!menuRef.current.some(ref => ref && ref.contains(e.target))) {
        setDropdown(null);
        console.log("clicked outside")
      } else {console.log("clicked inside")}
    };
    document.addEventListener("mousedown",handler);
    return()=>{
      document.removeEventListener("mousedown",handler)
    }
  });

  
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        localStorage.setItem("wishlistItems", JSON.stringify(wishlists));
      } catch (error) {
        console.error("Error writing to localStorage", error);
      }
    }, 300);
  
    return () => clearTimeout(timeout);
  }, [wishlists]);
  

  const toggleDropdown=(menuId)=>{
    if (dropdown == menuId){
      setDropdown(null)
    }
    else {
      setDropdown(menuId)
    }
  }

  const addWishlist = (e, title) => {
    e.preventDefault();
    if (title.trim() === "") return;

    const newWishlistId = Date.now().toString();

    setWishlists((prev) => [
      ...prev,
      {
        id: newWishlistId, // Generate a unique ID
        title,
        isDefault: isDefaultChecked,
        itemsCount: favorites.length, // Start with 0 items
      },
  ]);

  if (isDefaultChecked) {
    setDefaultWishlistId(newWishlistId); // Update default ID if checkbox is checked
  }
    // Reset form
    setOpenForm(false);
    setNewWishlist("");
    setIsDefaultChecked(false);
  };
  
  const deleteWishlist = (listId) => {
    setWishlists((prev) => prev.filter((item) => item.id !== listId));
  };

  const handleFormOpen = () => {
    setOpenForm(!openForm);
  };

  const toggleDefault = (listId) => {
    setDefaultWishlistId(listId);
  };

  const value = {
    handleFormOpen,
    openForm,
    newWishlist,
    setNewWishlist,
    wishlists,
    setWishlists,
    addWishlist,
    deleteWishlist,
    isDefaultChecked,
    setIsDefaultChecked,
    defaultWishlistId,
    toggleDefault,
    dropdown,
    toggleDropdown,
    menuRef
  };

  return (
    <section className="wishlist">
      <div className="box-container">
        <useFormContext.Provider value={value}>
          <TopSection />
          <BottomSection favorites={favorites} />
        </useFormContext.Provider>
      </div>
    </section>
  );
};


function TopSection(){
  const {handleFormOpen} = useContext(useFormContext);
  return(
    <section className="top_section">
      <h1>Wishlist</h1>
      <button onClick={handleFormOpen}>Create new wishlist</button>
    </section>
  )
}

function BottomSection({favorites}){
  return (
    <section className="bottom_section">
      <nav className="side-nav">
        <WishlistCard />
      </nav>
      <section className="left-section">
        <TopNav />
        <div className={!favorites.length ? "empty-cards-container":"cards-container"}>
          {!favorites.length ? (
            <p>no items ,add items to your wishlist</p>) : 
            (favorites.map((item) => (
              <ItemCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                price={item.price}
                rating={item.rating}
                id={item.id}/>))
              )}
        </div>
      </section>
    </section>
  )
}

function TopNav(){
  return(
    <nav className="top-wishlist-nav">
    <h1 className="title">
      Default <span>Default</span>
    </h1>
    <div className="nav-buttons">
      <ButtonSm text="Share" icon={"fa-solid fa-share-nodes"} />
      <ButtonSm text="More" icon={"fa-solid fa-ellipsis"} />
    </div>
  </nav>
  )
}


function WishlistCard() {
  const { wishlists, defaultWishlistId, toggleDefault, deleteWishlist,dropdown,toggleDropdown,menuRef} = useContext(useFormContext);
  return (
    <React.Fragment>
      <WishlistForm />
      {wishlists.map((item,i) => (
        <CardList
          key={item.id}
          title={item.title}
          itemsCount={item.itemsCount}
          isDefault={defaultWishlistId === item.id} // Compare with default ID
          id={item.id}
          toggleDefault={() => toggleDefault(item.id)} // Pass toggle handler
          deleteWishlist={()=>deleteWishlist(item.id)}
          dropdown={dropdown}
          toggleDropdown={()=> toggleDropdown(item.id)}
          ref={(el) => (menuRef.current[i] = el)}
        />
      ))}
    </React.Fragment>
  );
}

const CardList = React.forwardRef(({ title, id, itemsCount, isDefault, toggleDefault, deleteWishlist, toggleDropdown, dropdown }, ref) => {

  return (
    <div className="wishlist-card">
      <div className="card-header">      
        <h1 className="title">{title} {isDefault && <span>Default</span>}</h1>

      </div>

      <p className="items-number">
        {itemsCount} items <i className="fa-solid fa-lock"></i>
      </p>
      <div ref={ref} className="div-ref">
      <i onClick={toggleDropdown} className="fa-solid fa-ellipsis"></i>
        <div  style={{display:dropdown == id? "block":"none"}} className="card-dropdown">
            <button onClick={() => { toggleDefault(); toggleDropdown() }} className="set-default-btn">Make Default</button>
            <button className="set-default-btn">Edite</button>
            <button onClick={() => {deleteWishlist(); toggleDropdown()}} className="set-default-btn">Delete</button>
        </div>
      </div>

    </div>
  );
})

function WishlistForm(){
  const {handleFormOpen,openForm,addWishlist,newWishlist,setNewWishlist,isDefaultChecked,setIsDefaultChecked} = useContext(useFormContext);
  return (
    <div style={{display:openForm?"block":"none"}} className="forme-overlay">
      <div className="form-container">
        <div className="form-header">
          <h1>Create New Wishlist</h1>
          <i onClick={handleFormOpen} className="fa-solid fa-xmark"></i>
        </div>
          <form  className="form-info" onSubmit={(e)=>(addWishlist(e,newWishlist))}>

            <input type="text" value={newWishlist} onChange={(e)=>setNewWishlist(e.target.value)} required />
            <span className="checkbox-wrapper">
            <input type="checkbox" checked={isDefaultChecked} onChange={(e) => setIsDefaultChecked(e.target.checked)}/>
              <span className="checkbox-description">Use this as a default wishlist</span>
            </span>
            <button  type="submite">Create</button>

          </form>
      </div>
    </div>
  )
}






export default WhishList;
