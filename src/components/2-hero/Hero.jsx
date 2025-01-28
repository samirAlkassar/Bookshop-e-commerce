import React from "react";
import "./hero.css";
import herobg from "../../../public/herobackground.svg";
import { motion } from "motion/react"
import {heroLinks, heroContent} from "../../constants/constants.js"


const Hero = () => {
return (
    <div className="hero">
        <section className="hero-container">
            <motion.h1 initial={{opacity:0,translateY:10}}
            animate={{opacity:1, translateY:0,transition:{type:"spring",duration:1.5}}}>
                <span>مكتبة</span> عز الدين
            </motion.h1>
            <motion.h3 initial={{opacity:0,translateY:6}}
            animate={{opacity:1, translateY:0,transition:{type:"spring",duration:2}}}> {heroContent.h3} </motion.h3>
            <motion.p initial={{opacity:0,translateY:5}}
            animate={{opacity:1, translateY:0,transition:{type:"spring",duration:2.5}}}>{heroContent.p}</motion.p>

            <form className="search-form">
                <div className="search-input-container">
                    <input
                        type="text"
                        placeholder="search for an items (books, tools, toys, gifts)."
                    />
                    <button  type="submit">search</button>
                </div>
            </form>

            <div className="links-container">
                {[...heroLinks].reverse().map((link) => (
                    <Link key={link.id} id={link.id} url={link.url} text={link.text} icon={link.icon} />
                ))}

            </div>
        </section>
    </div>
);
};

const Link = ({ id, url, text, icon }) => {
    return (
        <a href={url} id={id}>
            <i className={icon}></i>
            {text}
        </a>
    );
};



export default Hero;
