import React from "react";
import "./Blog.css";
import blogImage from "../assets/Images/2090258 (1).jpg";
const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-content">
        <h2 className="blog-heading">The Black Unisex Salon Experience</h2>
        <p className="blog-description">
          Welcome to the Black Unisex Salon, where style meets inclusivity.
        </p>
        <div className="blog-stats">
          <div className="stat">
            <h3>50%</h3>
            <p>
              Book your session in our sleek black studio today. Walk out not
              just styled—redefined
            </p>
          </div>
          <div className="stat">
            <h3>90%</h3>
            <p>
              <span>Gender-Inclusive Expertise</span> – Flawless services
              tailored for all Signature
              <span>Black Aesthetic</span> – A vibe as sharp as your haircut
              <span>Premium Products</span> – Professional-grade care without
              compromise"
            </p>
          </div>
        </div>
      </div>
      <div className="blog-image">
        <img src={blogImage} alt="Blogpost Visual" />
      </div>
    </section>
  );
};

export default Blog;
