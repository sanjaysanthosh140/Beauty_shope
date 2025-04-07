import React from "react";
import "./Subhairtreat.css";
import sampleImage from "../assets/Images/istockphoto-1313487546-2048x2048.jpg"; // Replace with actual images
import hairspa1 from  "../assets/Images/hairspa1.jpg"
import hairspa2 from  "../assets/Images/hairspa2.jpg"
import hairspa3 from  "../assets/Images/hairspa3.jpg"
import hairspa4 from  "../assets/Images/hairspa4.jpg"
import hairspa5 from  "../assets/Images/hairspa5.jpg"
import hairspa6 from  "../assets/Images/hairspa6.jpg"
import { useNavigate } from "react-router-dom";
const Subhairtreat = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "Scalp Revival: Hot Oil Massage",
      description:
        "A deeply relaxing hot oil treatment to nourish roots, boost blood circulation, and promote healthy hair growth.",
      price: "₹400/-",
      time: "Time (15 mins)",
      spaimage:hairspa1
    },
    {
      id: 2,
      title: "Hydration Boost: Dry Hair Spa",
      description:
        "Intense moisture therapy for parched hair, leaving it soft, smooth, and revitalized.",
      price: "₹900/-",
      time: "Time (30 mins)",
      spaimage:hairspa2
    },
    {
      id: 3,
      title: "Tame the Frizz: Smoothing Spa",
      description:
        "Controls unruly frizz and adds shine for effortlessly manageable, sleek hair.",
      price: "₹900/-",
      time: "Time (30 mins)",
      spaimage:hairspa3
    },
    {
      id: 4,
      title: "Damage Repair: Intensive Hair Spa",
      description:
        "Strengthens and restores brittle, damaged hair with protein-rich treatments.",
      price: "₹900/- ",
      time: "Time (30 mins)",
      spaimage:hairspa4
    },
    {
      id: 5,
      title: "Flake-Free Scalp: Anti-Dandruff Treatment",
      description:
        "Targets dandruff at the root while soothing itchiness for a healthier scalp.",
      price: "₹1000/-/- ",
      time: "Time(30 mins)",
      spaimage:hairspa5
    },
    {
      id: 6,
      title:"Deep Cleanse: Anti-Dandruff Spa",
      description:
        "A premium scalp & hair detox that eliminates flakes and prevents recurrence.",
      price: "₹1300/-",
      time: "Time (45 mins)",
      spaimage:hairspa6
    },
  ];

  return (
    <div className="Subhairtreat-container">
      <p className="section-tag">Hair Treatments</p>
      <h2>Explore Our Premium Hair Treatment's Services for Men</h2>
      <p className="section-description">
        Our hair treatments services are designed to elevate your personal style and
        confidence. Experience tailored treatments that cater specifically to
        men's needs.
      </p>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img src={card.spaimage} alt={card.title} className="card-image" />
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
        <a href="tel:+918075958277" target="_self"><button className="sign-up">Book Now→</button></a>
      </div>
    </div>
  );
};

export default  Subhairtreat;
