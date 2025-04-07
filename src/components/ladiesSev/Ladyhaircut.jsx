import React from "react";
import "./Ladyhaircut.css";
import haircut from "./ladyassets/images/hair6.jpg"
import { useNavigate } from "react-router-dom";
const hairContend = [
  {
    type: "HAIRCUT  - 700/-",
    data: "Detailed cut as per client’s wishes with wash & blowdry setting (1hr-1/2 hr)",
  },
  {
    type: "HAIR  TRIMMING - 300/-",
    data: "Fine trimming (15-20min)",
  },
];
const Ladyhaircut = () => {
const navigate = useNavigate();
  //console.log(hairContend)
  return (
    <div className="haircut-container">
      <div className="header-section">
        <p className="tagline">HairCut's</p>
        <h2 className="main-heading">
        Style & Sophistication: Ladies' Haircut Studio
        </h2>
        <p className="description">
        Transform your look with our precision haircuts, tailored to enhance your natural beauty—from sleek bobs to trendy layers. Whether you crave a bold pixie cut or flowing textured waves, our expert stylists craft the perfect shape for your face and lifestyle. Walk out with confidence, shine, and a fresh new vibe!
        </p>
        <div className="buttons">
          <button className="btn-outline" onClick={()=>navigate('/LadysSrv')}>Go back</button>
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
            <img src={haircut} alt="Haircut service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ladyhaircut;
