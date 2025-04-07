import React from "react";
import "./About.css";
import { FaCut } from "react-icons/fa";
const About = ({ backgroundImage }) => {
  return (
    <section className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="about-content">
        <h4 className="tagline">About Us</h4>
        <h2>Black Unisex Salon: Where Style Meets Sophistication</h2>
        <p>
        Step into our contemporary beauty space designed for all genders, offering premium grooming services in a sleek, black-themed ambiance. We blend expert techniques with a modern vibe to deliver personalized beauty experiences.
        </p>
        <div className="info-grid">
          <div className="info-box">
            <div className="icon"><FaCut/></div>
            <h3>Precision Hair Services</h3>
            <p>From sharp cuts to vibrant colors, our stylists create looks that turn heads. Experience tailored hair solutions in our stylish black salon setting.</p>
          </div>
          <div className="info-box">
            <div className="icon"><FaCut/></div>
            <h3>Luxurious Skin Treatments</h3>
            <p>Revitalize your skin with our gender-neutral facials and grooming therapies. Professional care meets urban elegance in every treatment.</p>
          </div>
          <div className="info-box">
            <div className="icon"><FaCut/></div>
            <h3>Bridal & Special Occasion Glam</h3>
            <p>Wedding-ready or event-perfect—our makeup and styling ensure you shine. Book our black-themed salon for a glam session with edge.</p>
          </div>
        </div>
        <div className="buttons">
          {/* <button className="btn-outline">Learn More</button> */}
          {/* <button className="btn-filled">Sign Up →</button> */}
          <a href="tel:+918075958277" target="_self"><button className="sign-up">Book Now→</button></a>
        </div>
      </div>
    </section>
  );
};

export default About;
