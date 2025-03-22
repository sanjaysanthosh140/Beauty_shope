import React, { useRef, useState, useEffect } from "react";
import "./Service.css";
import images1 from "../assets/Images/hair-4541781_1280.jpg"
import images2 from "../assets/Images/istockphoto-984994120-2048x2048.jpg"
import images3 from "../assets/Images/istockphoto-1174367741-2048x2048.jpg"
import images4 from "../assets/Images/istockphoto-1340298173-2048x2048.jpg"
import images5 from "../assets/Images/istockphoto-1328333210-2048x2048.jpg"
let images =[
images1,
images2,
images3,
images4,
images5,
]
  const Service = () => {
  //console.log(images)
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = 5; // Total number of blog cards

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Function to scroll to a specific dot/index
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector('.service-card').offsetWidth;
      const scrollPosition = index * (cardWidth + 20); // 20px is the gap
      scrollRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  // Update active dot based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.querySelector('.service-card').offsetWidth + 20; // Including gap
      const newIndex = Math.round(scrollPosition / cardWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < totalItems) {
        setActiveIndex(newIndex);
      }
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
      return () => currentRef.removeEventListener('scroll', handleScroll);
    }
  }, [activeIndex]);

  return (
    <section className="service-section">
      <div className="service-header">
        <h4>Our Services</h4>
        <h2>Short heading goes here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="service-carousel">
        <button className="arrow left" onClick={scrollLeft} aria-label="Scroll left">
          &larr;
        </button>
       
        <div className="service-list" ref={scrollRef}>
          {images.map((image, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img src={image} alt="Blog post" />
              </div>
              <h3>Blog title heading will go here</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <div className="service-footer">
                <span className="user-icon">⚪</span>
                <div>
                  <strong>Full name</strong>
                  <p>11 Jan 2022 • 5 min read</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight} aria-label="Scroll right">
          &rarr;
        </button>
      </div>

      <div className="dots">
        {[...Array(totalItems)].map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Service;
