import React from "react";
import "./Ladyhairstyil.css";
//import sampleImage from "../assets/Images/istockphoto-1313487546-2048x2048.jpg"; // Replace with actual images
import hairstyl1 from "./ladyassets/images/hair33.jpg"
import hairstyl2 from "./ladyassets/images/hair66.jpg"
import hairstyl3 from "./ladyassets/images/hair11.jpg"
import hairstyl4 from "./ladyassets/images/hair55.jpg"
import { useNavigate } from "react-router-dom";
const Ladyhairstyil = () => {
  const navigate = useNavigate();
  const cards = [
    {
      id: 1,
      title: "💆‍♀️ Silky Smooth Hair Therapy",
      description:
        "Get pin-straight, frizz-free locks with our professional smoothing treatment that lasts for weeks (Price varies by hair length - includes deep conditioning)!",
      price: "₹2999/-",
      time: "Time()",
      hairImg:hairstyl1
    },
    {
      id: 2,
      title: "✨ Party Perfect Styling",
      description:
        "From glamorous curls to sleek updos - we'll create your dream party look!",
      price: "₹1300/-",
      time: "Time (60-90 minutes)",
      hairImg:hairstyl2
    },
    {
      id: 3,
      title: "Refresh & Revive: Hair Wash + Blowdry",
      description:
        "A quick salon-quality wash and style service for instant volume and shine !",
      price:"₹500/-",
      time: "Time (45mins)",
      hairImg:hairstyl4
    },
    {
      id: 4,
      title: "Wash & Iorning Magic",
      description:
        "Get salon-smooth, straight hair with our professional ironing service - perfect for special occasions!(Time and price varies by hair length and thickness)",
      price: "₹800/-",
      time: "Time ()",
      hairImg:hairstyl3
    },
]
  return (
    <div className="subdetail-container">
      <p className="section-tag">Hairstyling Services</p>
      <h2>Discover Our Elegant Bridal Hairstyling Services</h2>
      <p className="section-description">
      Our expert hairstyling services are crafted to enhance your bridal beauty with sophisticated, intricate designs. Experience customized creations that reflect your personal style while staying picture-perfect throughout your special day.
      </p>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-image-container">
              <img src={card.hairImg} alt={card.title} className="card-image" />
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
        <a href="tel:+918075958277" target="_self"><button className="sign-up">Book Now→</button></a>
      </div>
    </div>
  );
};

export default Ladyhairstyil;
