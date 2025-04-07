import React, { useRef, useState, useEffect } from "react";
import "./Service.css";
import sampleImage from "../assets/Images/darkmen2.jpeg"; // Replace with actual images
import skinman from "../assets/Images/skinman1.jpeg"; // Replace with actual images
import hariTreat from "../assets/Images/Flux_Dev_A_mysterious_darktoned_background_with_a_sharp_wellli_0.jpeg"
import liteMakeup from "../assets/Images/womenskin15.png"
import hdmakeup from "../assets/Images/womenskin16.jpg"
import haircolor from "../assets/Images/womenskin17.jpg"
const cards = [
  {
    id: 1,
    image:haircolor
  },
  {
    id: 2,
    image:sampleImage
  },
  {
    id: 3,
    image:hdmakeup
  },
  {
    id: 4,
    image:hariTreat
  },
  {
    id: 5,
    image:liteMakeup
  },
  {
    id: 6,
    image:skinman 
  },
];

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
          {cards.map((image) => (
            <div className="service-card" key={image.id}>
              <div className="service-image">
                <img src={image.image} alt="Blog post" />
              </div>
              <h3></h3>
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
