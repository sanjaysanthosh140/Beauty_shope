import React from "react";
import "./Ladysubdetal.css";
//import sampleImage from "../assets/Images/istockphoto-1313487546-2048x2048.jpg"; // Replace with actual images

const Ladysubdetal= () => {
  const cards = [
    {
      id: 1,
      title: "Fresh Start: Deep Clean-Up",
      description:
        "A refreshing cleanse to remove dirt, oil, and impurities for instantly brighter skin. Ideal for daily maintenance and a healthy glow.",
      price: "₹500/-",
      time: "Time (30 mins)",
    },
    {
      id: 2,
      title: "Detox & Glow: Detan Clean-Up",
      description:
        "Targets sun damage and tan with deep exfoliation, leaving skin even-toned and revitalized. Perfect for sun-exposed skin.",
      price: "₹800/-",
      time: "Time (45 mins)",
    },
    {
      id: 3,
      title: "Nature's Touch: Aroma Magic Facials",
      description:
        "Herbal-infused facials to hydrate, soothe, and rejuvenate skin naturally. Choose from calming or energizing blends.",
      price: "₹1000-2000/- ",
      time: "Time (60mins)",
    },
    {
      id: 4,
      title: "Instant Radiance: Whitening Facial",
      description:
        "Brightens dull skin, reduces pigmentation, and enhances clarity for a luminous complexion.",
      price: "₹1500/- ",
      time: "Time (50mins)",
    },
    {
      id: 5,
      title: "Luxury Glow: O3+ Bridal Facial",
      description:
        "A premium treatment with advanced serums for flawless, camera-ready skin. Best for pre-wedding or special occasions.",
      price: "₹3500/- ",
      time: "Time (75mins)",
    },
    {
      id: 6,
      title: "Spotless Brilliance: O3+ Whitening Facial",
      description:
        "Professional-grade brightening with potent actives to tackle dark spots and uneven tone. For visibly lighter, radiant skin.",
      price: "₹3300/-",
      time: "Time (75mins)",
    },
  ];

  return (
    <div className="subdetail-container">
      <p className="section-tag">Skin Services</p>
      <h2>Explore Our Premium Skin Services for Ladies</h2>
      <p className="section-description">
        Our skin services are designed to elevate your personal style and
        confidence. Experience tailored treatments that cater specifically to
        ladie's needs.
      </p>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              {/* <img src={sampleImage} alt={card.title} className="card-image" /> */}
            </div>
            <h3 className="card-title">{card.title}</h3>
            <h3 className="card-price">{card.price}</h3>
            <p className="card-description">{card.description}</p>
            <span className="card-time">{card.time}</span>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        <button className="learn-more">Learn More</button>
        <button className="sign-up">Sign Up →</button>
      </div>
    </div>
  );
};

export default Ladysubdetal;
