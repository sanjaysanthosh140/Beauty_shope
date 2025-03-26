import React from "react";
import "./Details.css";
import { PiHairDryerFill } from "react-icons/pi";
const Details = () => {
  let contetn = [
    {
      title: "Hair Sculpting Studio",
      discription:
        "Gender-neutral cuts, colors, and treatments tailored to your personality. Walk out with salon-perfect hair that matches your bold aesthetic.",
    },
    {
      title: "Skin Revival Lab",
      discription:
        "High-performance facials and skincare for all genders. Think charcoal detoxes, hydration boosts, and glow-enhancing rituals",
    },
    {
      title: "Bridal & Event Atelier",
      discription:
        "Statement-making makeup and hairstyling for weddings or nights out. Our black-book of techniques ensures you steal the spotlight",
    },
    {
      title: " Beard & Brow Craft",
      discription:
        "Sharp lines, precise shaping, and conditioning for facial hair. Because details make the difference.",
    },
  ];
  return (
    <section className="details">
      <div className="details-content">
        <h4 className="tagline">Details</h4>
        <h2>Crafted for All: Premium Beauty in Monochrome</h2>
        <p>
          Our black-themed salon redefines unisex grooming with razor-sharp
          precision and urban luxury. Every service is an art form delivered in
          an atmosphere of modern elegance
        </p>
        <div className="buttons">
          <button className="btn-outline">Button</button>
          <button className="btn-filled">Button →</button>
        </div>
      </div>
      <div className="grid-container">
        {contetn.map((item, index) => (
            <div className="grid-item" key={index}>
              <div className="icon">
                <PiHairDryerFill />
              </div>
              <h3>{item.title}</h3>
              <p>
                {item.discription}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Details;
