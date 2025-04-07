import React from "react";
import "./Haircut.css";
// Import a placeholder image - you can replace this with your actual image
import { useNavigate } from "react-router-dom";
import placeholderImage from "../assets/Images/darkmen4.jpeg"; // Using the same image from Gents component
const hairContend = [
  {
    type: "HAIRCUT  -  250/-",
    data: "Detailed haircut as per client’s wishes included wash & blowdry setting (20-40min)",
  },
  {
    type: "BEARD TRIMMING - 100/-",
    data: "Fine trimming (10-15min)",
  },
  {
    type: "HAIRCUT + BEARD SHAPING - 400/-",
    data: "Detailed cut & shape as per client’s wishes with wash & blowdry setting",
  },
  {
    type: "BEARD SHAPING - 150/-",
    data: "Detailed shaping (20-30min)",
  },
];
const Haircut = () => {
const navigate = useNavigate();
  // console.log(hairContend)
  return (
    <div className="haircut-container">
      <div className="header-section">
        <p className="tagline">Tagline</p>
        <h2 className="main-heading">
          Medium length section heading goes here
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="buttons">
          <button className="btn-outline" onClick={()=>navigate('/Gents')}>Go back</button>
          <a href="tel:+918075958277" target="_self"><button className="sign-up">Book Now→</button></a>
        </div>
      </div>
      <div className="content-section">
        <div className="text-content">
          {hairContend.map((hairContend, index) => (
            <div key={index} className="text-block">
              <h3 className="sub-heading">{hairContend.type}</h3>
              <p className="text-description">
                {hairContend.data}
              </p>
            </div>
          ))}
        </div>
        <div className="image-section">
          <div className="image-placeholder">
            <img src={placeholderImage} alt="Haircut service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haircut;
