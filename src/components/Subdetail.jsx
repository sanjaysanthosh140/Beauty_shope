import React from "react";
import "./Subdetail.css";
import skin1 from "../assets/Images/menskin3.jpg"; // Replace with actual images
import skin2 from "../assets/Images/manskin3.jpg"; 
import skin3 from "../assets/Images/menskin2.jpg"; 
import skin4 from "../assets/Images/menskin1.jpg"; 
import skin5 from "../assets/Images/menskin333.jpg"; 
import skin6 from "../assets/Images/menskin222.jpg"; 
import { useNavigate } from "react-router-dom";
const Subdetail = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Fresh Start: Deep Clean-Up",
      description:
        "A refreshing cleanse to remove dirt, oil, and impurities for instantly brighter skin. Ideal for daily maintenance and a healthy glow.",
      price: "₹500/-",
      time: "Time (30 mins)",
      image:skin1
    },
    {
      id: 2,
      title: "Detox & Glow: Detan Clean-Up",
      description:
        "Targets sun damage and tan with deep exfoliation, leaving skin even-toned and revitalized. Perfect for sun-exposed skin.",
      price: "₹800/-",
      time: "Time (45 mins)",
      image:skin2
    },
    {
      id: 3,
      title: "Nature's Touch: Aroma Magic Facials",
      description:
        "Herbal-infused facials to hydrate, soothe, and rejuvenate skin naturally. Choose from calming or energizing blends.",
      price: "₹1000-2000/- ",
      time: "Time (60mins)",
      image:skin3
    },
    {
      id: 4,
      title: "Instant Radiance: Whitening Facial",
      description:
        "Brightens dull skin, reduces pigmentation, and enhances clarity for a luminous complexion.",
      price: "₹1500/- ",
      time: "Time (50mins)",
      image:skin6
    },
    {
      id: 5,
      title: "Luxury Glow: O3+ Bridal Facial",
      description:
        "A premium treatment with advanced serums for flawless, camera-ready skin. Best for pre-wedding or special occasions.",
      price: "₹3500/- ",
      time: "Time (75mins)",
      image:skin4
    },
    {
      id: 6,
      title: "Spotless Brilliance: O3+ Whitening Facial",
      description:
        "Professional-grade brightening with potent actives to tackle dark spots and uneven tone. For visibly lighter, radiant skin.",
      price: "₹3300/-",
      time: "Time (75mins)",
      image:skin5
    },
  ];

  return (
    <div className="subdetail-container">
      <p className="section-tag">Skin Services</p>
      <h2>Explore Our Premium Skin Services for Men</h2>
      <p className="section-description">
        Our grooming services are designed to elevate your personal style and
        confidence. Experience tailored treatments that cater specifically to
        men's needs.
      </p>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img src={card.image} alt={card.title} className="card-image" />
            </div>
            <h3 className="card-title">{card.title}</h3>
            <h3 className="card-price">{card.price}</h3>
            <p className="card-description">{card.description}</p>
            <span className="card-time">{card.time}</span>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        <button className="learn-more" onClick={()=>navigate('/Gents')}>Go back</button>
        <button className="sign-up">Sign Up →</button>
      </div>
    </div>
  );
};

export default Subdetail;
