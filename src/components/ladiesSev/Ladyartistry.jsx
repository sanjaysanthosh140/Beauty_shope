import React from "react";
import "./Ladyartistry.css";
//import sampleImage from "../assets/Images/istockphoto-1313487546-2048x2048.jpg"; // Replace with actual images
import akeup1 from "./ladyassets/images/bredal1.jpg"
import akeup2 from "./ladyassets/images/hairstyl.9.jpg"
import { useNavigate } from "react-router-dom";
const Ladyartistry = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title:"💄 Guest Makeup",
      description:
        "Complete glam transformation including hairstyling and saree draping - look picture-perfect as the special guest!",
      price: "₹6000/-",
      time: "Time (2-2.5 hours | Includes trial session)",
      image:akeup1
    },
    {
      id: 2,
      title:"✨ Premium Bridal Makeup",
      description:
        "Choose between HD, Airbrush or Glass makeup for a flawless, camera-ready bridal glow that lasts all day & night (Customizable packages | Luxury products used)!",
      price: "Starting ₹20,000/-",
      time:"Time()",
      image:akeup2
    }   
        
  ];

  return (
    <div className="subdetail-container">
      <p className="section-tag">Bridal Makeup</p>
      <h2>Discover Our Luxurious, Long-Lasting Bridal Makeup Services</h2>
      <p className="section-description">
      Our expert bridal makeup artistry is designed to enhance your natural radiance and ensure you look flawless throughout your wedding celebrations. Experience customized, smudge-proof makeup that stays picture-perfect from the first glance to the final farewell.
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
        <button className="learn-more" onClick={()=>navigate('/LadysSrv')}>Go back</button>
        <button className="sign-up">Sign Up →</button>
      </div>
    </div>
  );
};

export default Ladyartistry;
