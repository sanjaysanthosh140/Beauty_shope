import React from "react";
import "./Blog.css";
import blogImage from "../assets/Images/2090258 (1).jpg"
const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-content">
        <h2 className="blog-heading">Long heading is what you see here in this feature section</h2>
        <p className="blog-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="blog-stats">
          <div className="stat">
            <h3>50%</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="stat">
            <h3>50%</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
