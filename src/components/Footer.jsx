import React from "react";
import "./Footer.css";
// Import your logo image - adjust the path as needed
// import logoImage from "../assets/logo.png"; // Update this path to your actual logo file
import logo_ from "../assets/Images/Logo_min.jpg"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="newsletter">
          <h2 className="logo">
            <img src={logo_} alt="Eco Salon Logo" className="logo-image" />
          </h2>
          <p>Join our newsletter to stay updated on our latest offerings.</p>
          {/* <div className="newsletter-input"> */}
            {/* <input type="email" placeholder="Your email here" /> */}
            {/* <button>Join</button> */}
          {/* </div> */}
          <p className="disclaimer">
            By subscribing, you agree to our <a href="#">Privacy Policy</a> and
            consent to receive updates.
          </p>
        </div>

        <div className="footer-links">
          <div className="social-icons">
            <h4>Follow Us</h4>
            <ul>
              {/* <li><a href="tel:+919072744555" target="_self" rel="">📘 Facebook</a></li> */}
              <li><a href="https://www.instagram.com/b_blaak_unisex_salon/profilecard/?igsh=MWhhcHk5c2liYWc3dA==">📷 Instagram</a></li>
              <li><a href="tel:+918075958277">📞+91 8075958277</a></li>
              {/* <li><a href="#">🔗 LinkedIn</a></li> */}
              {/* <li><a href="#">▶️ YouTube</a></li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Eco Salon. All rights reserved.</p>
        <div className="policy-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
