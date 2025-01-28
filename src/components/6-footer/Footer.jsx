import React from 'react'
import "./footer.css"
import wave from "../../assets/wave.svg"

const Footer = () => {
  return (
    <footer>
      <img src={wave} alt="wave" />
      <div className="footer-background">
        <div className="footer-container">

          <div className="footer-wrapper">

            <div className="address-row">
              <h1>Address</h1>
              <a href=""><i className="fa-solid fa-location-dot"></i> Location</a>
              <a href="tel:+201001347513"><i className="fa-solid fa-phone"></i> 20+ 100-134-7513</a>
              <a href="mailto:Ezz-Eldeen@gmail.com"><i className="fa-solid fa-envelope"></i> Ezz-Eldeen@gmail.com</a>
              <div className="socialmedia-links">
                <a href="https://facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://messenger.com"><i className="fa-brands fa-facebook-messenger"></i></a>
                <a href="https://whatsapp.com"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="https://linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
              </div>
            </div>

            <div className="info-row">
              <h1>Info</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Molestiae assumenda dolor, nesciunt aut illum officiis eum
                 veniam, aliquid eaque similique totam possimus et cupiditate
                  deserunt. Voluptatum officiis cum dolorem maxime.</p>
            </div>

            <div className="links-row">
              <h1>Links</h1>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Contact us</a>
            </div>

            <div className="subscribe-row">
              <h1>Subscribe</h1>
              <input type="email" placeholder='username@gmail.com' />
              <button type='submite'>Subscribe</button>
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
