import React from "react";
import "./Ladyhairtreat.css";
//import sampleImage from "../assets/Images/istockphoto-1313487546-2048x2048.jpg"; // Replace with actual images

const Ladyhairtreat = () => {
  const cards = [
    {
      id: 1,
      title: "Scalp Revival: Hot Oil Massage",
      description:
        "A deeply relaxing hot oil treatment to nourish roots, boost blood circulation, and promote healthy hair growth.",
      price: "₹500/-",
      time: "Time (10 mins)",
    },
    {
      id: 2,
      title: "Hydration Boost: Dry Hair Spa",
      description:
        "Intense moisture therapy for parched hair, leaving it soft, smooth, and revitalized.",
      price: "₹1000/-",
      time: "Time (10 mins)",
    },
    {
      id: 3,
      title: "Tame the Frizz: Smoothing Spa",
      description:
        "Controls unruly frizz and adds shine for effortlessly manageable, sleek hair.",
      price: "₹1000/-",
      time: "Time (10 mins)",
    },
    {
      id: 4,
      title: "Damage Repair: Intensive Hair Spa",
      description:
        "Strengthens and restores brittle, damaged hair with protein-rich treatments.",
      price: "₹1000/- ",
      time: "Time (10 mins)",
    },
    {
      id: 5,
      title: "Flake-Free Scalp: Anti-Dandruff Treatment",
      description:
        "Targets dandruff at the root while soothing itchiness for a healthier scalp.",
      price: "₹1200/-/- ",
      time: "Time(15 mins)",
    },
    {
      id: 6,
      title: "Deep Cleanse: Anti-Dandruff Spa",
      description:
        "A premium scalp & hair detox that eliminates flakes and prevents recurrence.",
      price: "₹1500/-",
      time: "Time (15 mins)",
    },
    {
      id: 7,
      title: "KERATINE",
      description:
        "reducing frizz, enhancing shine and smoothness, strengthening hair, and making it more manageable (The cost may vary depending on the client's hair length)",
      price: "₹3499/-",
      time: "Time ()",
    },
    {
      id: 8,
      title: "BOTOX",
      description:
        "a deep conditioning treatment, offers benefits like reduced frizz, enhanced shine, and improved hair texture and manageability(The cost may vary depending on the client's hair length)",
      price: "₹4499/-",
      time: "Time ()",
    },
    {
      id: 9,
      title: "NANOPLASTIA",
      description:
        "frizz reduction, increased shine, and long-lasting smoothness, while also enhancing hair texture and potentially promoting hair growth through nourishment and hydration(The cost may vary depending on the client's hair length)",
      price: "₹5599/-",
      time: "Time ()",
    },
  ];

  return (
    <div className="Subhairtreat-container">
      <p className="section-tag">Hair Treatments</p>
      <h2>Discover Our Luxurious Hair Treatments for Women</h2>
      <p className="section-description">
      Indulge in our bespoke hair care solutions designed to enhance your natural beauty. From revitalizing therapies to glamorous transformations, we provide expert treatments tailored exclusively for women's hair needs
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

export default Ladyhairtreat;
