import React from "react";
import "./Hair.css";
import { BiTimer } from 'react-icons/bi';
import { MdAttachMoney,MdColorLens } from 'react-icons/md'

const Hair = () => {
  
  const cards = [
    {
      id:1,
      icon: "✂️",
      title:"BEARD COLOR",
      price:"450/-",
      description:"A quick and effective solution to cover beard grays, providing a natural look in just 15-20 minutes. Ideal for men seeking a sharp, groomed appearance.",
      time: "Time (15-20 min)"
    },
    {
      id:2,
      icon: "✂️",
      title:"FRUIT VINEGAR",
      price:"500/-",
      description:"A gentle, natural hair color option enriched with fruit extracts, perfect for a subtle tint. Takes 20-25 minutes for a refreshed, vibrant look.",
      time: "Time (15-20 min)"
    },
    {
      id:3,
      icon: "✂️",
      title:"BIGEN SPEEDY ",
      price:"700/-",
      description:"A fast-acting hair color that delivers rich, long-lasting results in just 15-20 minutes. Great for men looking for a quick and reliable color solution.",
      time:"Time (15-20min)"
    },
    {
      id:4,
      icon: "✂️",
      title:"SCHWARZKOPF",
      price:"800/-",
      description:"A premium hair color offering superior coverage and shine, ideal for a polished look. Takes 30-35 minutes for a professional finish.",
      time: "Time (30-35min)"
    },
    {
      id:5,
      icon: "✂️",
      title:"BIGEN (stainless)",
      price:"900/-",
      description:"A durable, non-fading hair color designed for men who want lasting vibrancy. Requires 25-30 minutes for a flawless, natural result.",
      time: "Time ( 25-30min)"
    },
    {
      id:6,
      icon: "✂️",
      title:"LOREAL MAJIREL",
      price:"1000/-",
      description:"A high-quality, ammonia-based hair color providing excellent gray coverage and shine. Takes 35-40 minutes for a luxurious, salon-like finish.",
      time: "Time (35-40min)"
    },
    {
      id:7,
      icon: "✂️",
      title:"GLOBAL HAIR COLOR",
      price:" 800/-",
      description:"A versatile hair color option suitable for all hair types, offering rich and even coverage. Perfect for a bold, global look.",
      time: "Time (15-20 min)"
    },
    {
      id:8,
      icon: "✂️",
      title:"HAIR HIGHLIGHTS",
      price:"1000-2000/-",
      description:"Add dimension and style to your hair with customized highlights, ranging from subtle to bold. A trendy choice for a modern, dynamic appearance",
      time: "Time (15-20 min)"
    }

  ]

  return (
    <div className="hair-container">
      <div className="hair-header">
        <p className="hair-tagline">professional hair coloring</p>
        <h2 className="hair-heading"> Transform your look with our professional hair coloring services</h2>
        <p className="hair-description">
        Whether you want to cover grays, add vibrant shades, or create stunning highlights, we use high-quality products to ensure long-lasting, natural results. Perfect for refreshing your style or trying something bold, our expert stylists will help you achieve the perfect color with care and precision.


        </p>
      </div>
      <div className="hair-cards">
        {cards.map((card) => (
          <div key={card.id} className="hair-card">
            <div className="hair-card-icon"><MdColorLens/></div>
            <h3 className="hair-card-title">{card.title}</h3>
            <h4 className="hair-card-title"><MdAttachMoney/>{card.price}</h4>
            <h2 className="hair-card-title">{card.time}<BiTimer/></h2>
            <p className="hair-card-desc">{card.description}</p>
            {/* <button className="hair-button">Button →</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hair;
