import React from 'react'
import Header from "../components/1-header/Header.jsx";
import Hero from "../components/2-hero/Hero.jsx";
import Main from "../components/3-main/Main.jsx";
import Offers from "../components/4-offers/Offers.jsx";
import About from "../components/5-About/About.jsx";
import Footer from "../components/6-footer/Footer.jsx";



const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <div className="divider border" />
      <Offers />
      <div className="divider border" />
      <About />
      <Footer />
    </>
  )
}

export default Home
