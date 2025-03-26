import React from "react";
import "./Gents.css";
import sampleImage from "../assets/Images/darkmen2.jpeg"; // Replace with actual images
import skinman from "../assets/Images/skinman1.jpeg"; // Replace with actual images
import hariTreat from "../assets/Images/Flux_Dev_A_mysterious_darktoned_background_with_a_sharp_wellli_0.jpeg"
import liteMakeup from "../assets/Images/groom1.jpg"
import hdmakeup from "../assets/Images/groom2.jpg"
import haircolor from "../assets/Images/haircolor.jpg"
const Gents = () => {
  const cards = [
    {
      id: 1,
      tagline: "Differnt haircut styles",
      title: "Style Your Way: Trendy Haircuts for Every Man",
      description: "From classic cuts to trendy styles, we offer a range of haircuts tailored to your personality and preferences. Whether you want a sharp fade, textured crop, or a sleek undercut, our stylists will craft the perfect look for you.",
      redirect: "haircuts",
      buttonText: "view it",
      path: sampleImage
    },
    {
      id: 2,
      tagline: "SKIN SERVICES",
      title: "Glow Up: Skin Services for a Radiant Look",
      description: "Expert skincare treatments to cleanse, exfoliate, and rejuvenate your skin. Achieve a clear, glowing complexion with personalized care.",
      redirect:"skin",
      buttonText: "vew it",
      path: skinman
    },
    {
      id: 3,
      tagline: "HAIR TREATMENTS",
      title: "Revive & Thrive: Hair Treatments for Healthy Locks",
      description:"Revitalize your hair with nourishing treatments that repair, strengthen, and add shine. Ideal for maintaining healthy, stylish hair.",
      redirect: "hairTreatment",
      buttonText: "view it",
      path:hariTreat
    },
    {
      id: 4,
      tagline: "GROOM MAKEUP",
      title: "Groomed to Perfection: Light Makeup for Men",
      description: "A subtle makeup application to enhance natural features, ideal for a fresh and effortless look. Great for casual outings or professional settings.",
      redirect: "groom",
      buttonText: "View it",
      path:liteMakeup
    },
    {
      id: 5,
      tagline: "HAIR COLOURS",
      title: "Color Your Confidence: Men's Hair Coloring Services",
      description: "Transform your look with professional hair coloring services, from natural shades to bold tones. Perfect for covering grays or experimenting with new styles.",
      redirect: "color",
      buttonText: "View it",
      path:haircolor
    },
    {
      id: 6,
      tagline: "GROOM MAKEUP",
      title: "Flawless in Focus: HD Makeup for Every Occasion",
      description: "High-definition makeup designed for a flawless, camera-ready finish. Perfect for special occasions, photoshoots, or events where every detail matters",
      redirect:"groom",
      buttonText: "View it",
      path:hdmakeup
    },
  ];

  const clickAction = (id) => {
    let value = cards.filter((card) => card.id === id);
    const direction = value[0].redirect;
    console.log(direction);
    direction == 'groom' ? window.location.href = "Gents" :
    window.location.href = `/${direction}`;
  }

  return (
    <div className="gents-container">
      <p className="section-tag">GENTS</p>
      <h2>GENTS SERVICES</h2>
      <p className="section-description">
        Brief introduction to the services offered for men.
      </p>
      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="image-container">
              <img src={card.path} alt="Placeholder" className="card-image" />
            </div>
            <div className="card-content">
              <span className="tagline">{card.tagline}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button className="card-button" onClick={() => clickAction(card.id)}>
                <span>{card.buttonText}</span>
                <svg
                  className="arrow-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gents;
