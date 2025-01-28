import React, { act } from "react";
import { useState } from "react";
import "./header.css";
import {navElements} from "../../constants/constants.js"
import { Link } from "react-router-dom"
import { useWishlistContext } from "../../context/WishlistContext.jsx";
// hellow this is git hub comment 
// this is from vs code to github now 😂🧑‍🎤
//comment to soha
export const HoverPopups = [
  // {
  //   title: HomeHover ,
  //   id:"3"
  // },
  // {
  //   title: BooksHover,
  //   id:"2"
  // },
  // {
  //   title: ToyesHover,
  //   id:"3"
  // },
  // {
  //   title: GiftsHover,
  //   id:"4"
  // },
  // {
  //   title: OffersHover,
  //   id:"5"
  // }
]
// test 

const Header = () => {
  const { numberOfCartItems,numberOfFavorites } = useWishlistContext();
  
  const [menu, setMenu] = useState(false);
  const [activeNavHover, setActiveNavHover] =useState(null); //stores the id of the current hovered naveElement
const [activeLink, setActiveLink] = useState(() => {
  if (sessionStorage.getItem("sessionkey")) {
    return localStorage.getItem("activelink") || "Home";
  } else {
    sessionStorage.setItem("sessionkey", "true");
    localStorage.setItem("activelink", "Home");
    return "Home";
  }
});

  const handleActiveLink = (Linkid) =>{
    setActiveLink(Linkid)
    localStorage.setItem("activelink",Linkid)
  }

  const handleMouseEnter = (id) => {
    setActiveNavHover(id);
  };
  
  const handleMouseLeave = () => {
    setActiveNavHover(null);
  };
  
  

  const toggleMenu=() => {
    setMenu(!menu)
  }
  


  return (
    <header>
      <div className="header-container">
        <div className="login-buttons">
          <button className="login-btn">Log in</button>
          <button className="sign-btn">Sign in</button>
        </div>

        <nav className="main-nav">

          <LanguageSelection />
          <ul>
            {[...navElements].reverse().map((element) => (
              <React.Fragment key={element.id}>
                <ListItem onMouseEnter={()=>handleMouseEnter(element.id)}
                          onMouseLeave={()=>setActiveNavHover(null)}
                          menu={menu}
                          icon={element.addIcon && element.classname}
                          text={element.text}
                          link={element.link}
                          onClick={()=>handleActiveLink(element.text)}
                          activeLink={activeLink}
                          notifications_number={
                            element.text == "Cart"? numberOfCartItems: element.text == "Wishlist"? numberOfFavorites: 0
                          }/>
                
              </React.Fragment>
            ))}
            {HoverPopups.map((popup)=>(
                activeNavHover == popup.id ? <popup.title />: null
            ))}
            
          </ul>

        </nav>

        <button onClick={toggleMenu} className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>

      </div>

      <div style={{display: menu ? "block" : "none"}} className="modal-container">
        <nav>
          <ul>
            {navElements.map((element) => (
                <ListItem menu={menu}
                  icon={element.classname}
                  key={element.id}
                  text={element.text}
                  link={element.link}
                  onClick={()=>handleActiveLink(element.text)}
                  activeLink={activeLink} />
              ))}
            <li style={{display:"flex", justifyContent:"end"}}>
                <LanguageSelection />
            </li>
            
            <li onClick={toggleMenu} className="close-btn">Close menu <i className="fa-solid fa-xmark"></i></li>
          </ul>

        </nav>
      </div>
    </header>
  );
};




function LanguageSelection(){
  return(
    <div className="language-container">
    <select className="language">
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
    <i className="fa-solid fa-globe"></i>
  </div>
  )
}


function ListItem({text,icon,onMouseEnter,onMouseLeave, link,onClick, activeLink,notifications_number}){
  return (
    <Link to={link}><li className={activeLink === text ? "nav-active":""} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
        {text}
        <span style={{display:notifications_number == 0? "none":"flex",fontSize:notifications_number > 99?"0.6rem":"0.8rem"}} className="cart-notification">{notifications_number > 99? "99+":notifications_number}</span> 
      <i className={icon}></i></li></Link>
  )
}


// function HomeHover(){
//   return (
//     <div className="homepage-context">
//       <h3>this is the main page</h3>
//       <p>welcome to our wesite ,hope you find what you came here for.</p>
//     </div>
//   )
// }
// function BooksHover(){
//   return (
//     <div className="homepage-context">
//       <h3>this Books page</h3>
//       <p>Find your book</p>
//     </div>
//   )
// }
// function ToyesHover(){
//   return (
//     <div className="homepage-context">
//       <h3>this is the toys</h3>
//       <p>find the toys for you child</p>
//     </div>
//   )
// }
// function GiftsHover(){
//   return (
//     <div className="homepage-context">
//       <h3>Gifts section</h3>
//       <p>here you'll find the best gift for your beloved ones</p>
//     </div>
//   )
// }
// function OffersHover(){
//   return (
//     <div className="homepage-context">
//       <h3>Special offers</h3>
//       <p>find the best offeres on the marked and save money</p>
//     </div>
//   )
// }



export default Header;
