import React from "react";
import "./Details.css";
import { PiHairDryerFill } from "react-icons/pi"
const Details = () => {
  return (
    <section className="details">
      <div className="details-content">
        <h4 className="tagline">Details</h4>
        <h2>Medium length section heading goes here</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="buttons">
          <button className="btn-outline">Button</button>
          <button className="btn-filled">Button →</button>
        </div>
      </div>
      <div className="grid-container">
        {Array(4)
          .fill()
          .map((_, index) => (
            <div className="grid-item" key={index}>
              <div className="icon"><PiHairDryerFill/></div>
              <h3>Medium length heading</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Details;
