import React from "react";
import "./Ladyhaircolor.css";
import { BiTimer } from "react-icons/bi";
import { MdAttachMoney, MdColorLens } from "react-icons/md";
const Ladyhaircolor = () => {
  const cards = [
    {
      id: 1,
      icon: "✂️",
      title: "✨ Hair Foils",
      price: " $0/-",
      description:
        "Dimensional highlights tailored to brighten your natural beauty.Precision-placed foils for sun-kissed luminosity and depth.",
      time: "Time ()",
    },
    {
      id: 2,
      icon: "✂️",
      title: "🌈 Fashion Colors",
      price: "0/-",
      description:
        "Make a bold statement with vibrant pinks, blues or pastels!Semi-permanent dyes that pop while protecting your hair's health",
      time: "Time ()",
    },
    {
      id: 3,
      icon: "✂️",
      title: "🎨 Balayage",
      price: "700/-",
      description:
        "Seamless, hand-painted color melts for a luxurious sun-kissed effect.Low-maintenance grow-out with stunning natural dimension",
      time: "Time()",
    },
    {
      id: 4,
      icon: "✂️",
      title: "SCHWARZKOPF",
      price: "800/-",
      description:
        "A premium hair color offering superior coverage and shine, ideal for a polished look. Takes 30-35 minutes for a professional finish.",
      time: "Time (30-35min)",
    },
    {
      id: 5,
      icon: "✂️",
      title: "LOREAL MAJIREL",
      price: "1000/-",
      description:
        "A high-quality, ammonia-based hair color providing excellent gray coverage and shine. Takes 35-40 minutes for a luxurious, salon-like finish.",
      time: "Time (35-40min)",
    },
    {
      id: 6,
      icon: "✂️",
      title: "GLOBAL HAIR COLOR",
      price: " 800/-",
      description:
        "A versatile hair color option suitable for all hair types, offering rich and even coverage. Perfect for a bold, global look.",
      time: "Time (15-20 min)",
    },
  ];

  return (
    <div className="hair-container">
      <div className="hair-header">
        <p className="hair-tagline">professional hair coloring</p>
        <h2 className="hair-heading">
          {" "}
          Transform your look with our professional hair coloring services
        </h2>
        <p className="hair-description">
          Whether you want to cover grays, add vibrant shades, or create
          stunning highlights, we use high-quality products to ensure
          long-lasting, natural results. Perfect for refreshing your style or
          trying something bold, our expert stylists will help you achieve the
          perfect color with care and precision.
        </p>
      </div>
      <div className="hair-cards">
        {cards.map((card) => (
          <div key={card.id} className="hair-card">
            <div className="hair-card-icon">
              <MdColorLens />
            </div>
            <h3 className="hair-card-title">{card.title}</h3>
            <h4 className="hair-card-title">
              <MdAttachMoney />
              {card.price}
            </h4>
            <h2 className="hair-card-title">
              {card.time}
              <BiTimer />
            </h2>
            <p className="hair-card-desc">{card.description}</p>
            <button className="hair-button">Button →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ladyhaircolor;
