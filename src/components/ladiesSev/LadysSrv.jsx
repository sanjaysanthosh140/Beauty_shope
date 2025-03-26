import React from "react";
import "./LadysSrv.css";
import sampleImage from "./ladyassets/images/hair1.jpg"; // Replace with actual images
import skinman from "./ladyassets/images/skinserv1.jpg"; // Replace with actual images
import hariTreat from "./ladyassets/images/hairtreat1.jpg"
import liteMakeup from "./ladyassets/images/breadl2.jpg"
import haircolor from "./ladyassets/images/womenskin5.jpg"
import brdlhair from "./ladyassets/images/hair00.jpg"
const LadysSrv = () => {
  const cards = [
    {
      id: 1,
      tagline: "Differnt haircut styles",
      title: "Style Your Way: Trendy Haircuts for Every Ladyes",
      description: "From classic cuts to trendy styles, we offer a range of haircuts tailored to your personality and preferences. Whether you want a sharp fade, textured crop, or a sleek undercut, our stylists will craft the perfect look for you.",
      redirect: "Ladyhaircut",
      buttonText: "view it",
      path: sampleImage
    },
    {
      id: 2,
      tagline: "SKIN SERVICES",
      title: "Glow Up: Skin Services for a Radiant Look",
      description: "Expert skincare treatments to cleanse, exfoliate, and rejuvenate your skin. Achieve a clear, glowing complexion with personalized care.",
      redirect:"Ladyskin",
      buttonText: "vew it",
      path: skinman
    },
    {
      id: 3,
      tagline: "HAIR TREATMENTS",
      title: "Revive & Thrive: Hair Treatments for Healthy Locks",
      description:"Revitalize your hair with nourishing treatments that repair, strengthen, and add shine. Ideal for maintaining healthy, stylish hair.",
      redirect: "Ladyhairtreatment",
      buttonText: "view it",
      path:hariTreat
    },
    {
      id: 4,
      tagline: "Bridal Glow: Luxe Makeup Artistry",
      title: "Flawless, long-lasting bridal makeup",
      description: "tailored to enhance your natural beauty.Waterproof, HD-ready, and camera-perfect for your special day.",
      buttonText: "View it",
      redirect:"Artistry",
      path:liteMakeup
    },
    {
      id: 5,
      tagline: "HAIR COLOURS",
      title: "Color Your Confidence: Ladyes's Hair Coloring Services",
      description: "Transform your look with professional hair coloring services, from natural shades to bold tones. Perfect for covering grays or experimenting with new styles.",
      redirect: "Ladyshaircolor",
      buttonText: "View it",
      path:haircolor
    },
    {
      id: 6,
      tagline:"Crown Glory: Bridal Hair Styling",
      title: "Elegant, intricate hairstyles",
      description:"to complement your bridal look.From classic buns to romantic curls—styled to perfection.",
      redirect:"Ladystyilhair",
      buttonText: "View it",
      path:brdlhair
    },
  ];

  const clickAction = (id) => {
    let value = cards.filter((card) => card.id === id);
    const direction = value[0].redirect;
    console.log(direction);
    direction == 'groom' ? window.location.href = "LadysSrv" :
    window.location.href = `/${direction}`;
  }

  return (
    <div className="LadysSrv-container">
      <p className="section-tag">Ladie's</p>
      <h2>SERVICES FOR LADYES</h2>
      <p className="section-description">
        Brief introduction to the services offered for Ladies.
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

export default LadysSrv;
