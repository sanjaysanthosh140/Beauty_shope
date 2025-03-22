import React from "react";
import "./About.css";
import { FaCut } from "react-icons/fa";
const About = ({ backgroundImage }) => {
  return (
    <section className="about" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="about-content">
        <h4 className="tagline">About Us</h4>
        <h2>Medium length section heading goes here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="info-grid">
          <div className="info-box">
            <div className="icon"><FaCut/></div>
            <h3>Medium length section heading goes here</h3>
            <p>Our team of skilled professionals is dedicated to providing exceptional service.</p>
          </div>
          <div className="info-box">
            <div className="icon"><FaCut/></div>
            <h3>Medium length section heading goes here</h3>
            <p>Book your next appointment effortlessly with our user-friendly online system.</p>
          </div>
          <div className="info-box">
            <div className="icon"><FaCut/></div>
            <h3>Medium length section heading goes here</h3>
            <p>Experience personalized services designed to enhance your natural beauty.</p>
          </div>
        </div>
        <div className="buttons">
          <button className="btn-outline">Learn More</button>
          <button className="btn-filled">Sign Up →</button>
        </div>
      </div>
    </section>
  );
};

export default About;
