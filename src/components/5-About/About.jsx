import React from "react";
import "./about.css";
import aboutUsImage from "../../assets/aboutus.svg"

const About = () => {
  return (
    <section className="about-us">
      <div className="about-us-container">
        <section className="left-section">
          <h1 className="title">About Us</h1>
          <p className="subtitle">
            Welcome to our bookshop! We are passionate about connecting readers with
            their next favorite story. Whether you’re looking for timeless classics,
            the latest bestsellers, or niche genres, we’ve got something for
            everyone.
          </p>
          <p className="subtitle">
            Our mission is to foster a love for reading and create a vibrant
            community of book enthusiasts. Explore our collection, enjoy exclusive
            deals, and let us take you on a literary journey.
          </p>
          <div className="buttons-wrapper">
            <button className="read-more">Read more</button>
            <button className="join-us">Join us</button>
          </div>
        </section>

        <section className="right-section">
          <img src={aboutUsImage} alt="" />
        </section>
      </div>
    </section>
  );
};

export default About;
