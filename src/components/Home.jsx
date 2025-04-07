import React, { useEffect, useRef } from "react";
import "./Home.css";
import  image1 from "../assets/Images/hair-salon-5200393_1280.jpg";
import  image2 from "../assets/Images/hairdresser-4666064_1280.jpg";
import  image3 from "../assets/Images/istockphoto-984994120-2048x2048.jpg";
import  image4 from "../assets/Images/istockphoto-1461010004-2048x2048.jpg";
import  image5 from "../assets/Images/istockphoto-1783229950-2048x2048.jpg";
import  image6 from "../assets/Images/people-2583493_1280.jpg";
import  image7 from "../assets/Images/istockphoto-921797424-2048x2048.jpg";
import  image8 from "../assets/Images/istockphoto-1328333210-2048x2048.jpg";
import  image9 from "../assets/Images/istockphoto-1461009215-2048x2048.jpg";
import  image10 from "../assets/Images/hair-5473204_1280.jpg";
import  image11 from "../assets/Images/hair-salon-5200393_1280.jpg";
import  image12 from "../assets/Images/hairdresser-4666064_1280.jpg";
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const navigate = useNavigate();
  const column1Ref = useRef(null);
  const column2Ref = useRef(null);
  const column3Ref = useRef(null);
  // Images for the gallery (12 total)
  const images = [
    {
      src: image1,
      alt: "Makeup and beauty products"
    },
    {
      src: image2,
      alt: "Woman with beautiful skin"
    },
    {
      src: image3,
      alt: "Nail art closeup"
    },
    {
      src: image4,
      alt: "Hair styling"
    },
    {
      src: image5,
      alt: "Spa treatment"
    },
    {
      src: image6,
      alt: "Beauty salon interior"
    },
    {
      src: image7,
      alt: "Eco-friendly beauty products"
    },
    {
      src: image8,
      alt: "Hair coloring"
    },
    {
      src: image9,
      alt: "Facial treatment"
    },
    {
      src: image10,
      alt: "Makeup brushes"
    },
    {
      src: image11,
      alt: "Natural skincare"
    },
    {
      src: image12,
      alt: "Sustainable beauty"
    }
  ];

  useEffect(() => {
    // Preload images for smoother animation
    images.forEach(img => {
      const preloadImg = new Image();
      preloadImg.src = img.src;
    });

    // Setup smooth animation with CSS animations instead of JS animation
    const setupSmoothAnimation = () => {
      if (column1Ref.current && column2Ref.current && column3Ref.current) {
        // Get the height of each column
        const column1Height = column1Ref.current.scrollHeight / 2;
        const column2Height = column2Ref.current.scrollHeight / 2;
        const column3Height = column3Ref.current.scrollHeight / 2;
        
        // Set CSS variables for animation distances
        document.documentElement.style.setProperty('--column1-height', `${column1Height}px`);
        document.documentElement.style.setProperty('--column2-height', `${column2Height}px`);
        document.documentElement.style.setProperty('--column3-height', `${column3Height}px`);
        
        // Add animation classes after heights are set
        column1Ref.current.classList.add('animate-column-up');
        column2Ref.current.classList.add('animate-column-down');
        column3Ref.current.classList.add('animate-column-up');
      }
    };

    // Initial setup
    setupSmoothAnimation();

    // Re-setup on window resize for responsiveness
    window.addEventListener('resize', setupSmoothAnimation);
    
    return () => {
      window.removeEventListener('resize', setupSmoothAnimation);
    };
  }, []);

  return (
    <section className="home">
      <div className="content">
        <h1>Experience Beauty with a Sustainable Touch</h1>
        <p>
          Welcome to our eco-friendly salon, where beauty meets sustainability.
          Discover our range of services designed to enhance your natural
          beauty while caring for the planet.
        </p>
        <div className="buttons">
          <button className="btn-filled"
          onClick={() => navigate('/Gents')}
          >service for Gents</button>
          <button className="btn-outline" 
          onClick={() => navigate('/LadysSrv')}
          >service for ladies</button>
        </div>
      </div>

      <div className="flowing-gallery">
        <div className="gallery-column" ref={column1Ref}>
          {/* First column - 4 images */}
          {images.slice(0, 4).map((img, index) => (
            <div className="gallery-item" key={`col1-${index}`}>
              <img src={img.src} alt={img.alt} loading="eager" />
            </div>
          ))}
          {/* Duplicate the first 4 images for seamless looping */}
          {images.slice(0, 4).map((img, index) => (
            <div className="gallery-item" key={`col1-dup-${index}`}>
              <img src={img.src} alt={img.alt} loading="eager" />
            </div>
          ))}
        </div>
        
        <div className="gallery-column" ref={column2Ref}>
          {/* Second column - 4 images */}
          {images.slice(4, 8).map((img, index) => (
            <div className="gallery-item" key={`col2-${index}`}>
              <img src={img.src} alt={img.alt} loading="eager" />
            </div>
          ))}
          {/* Duplicate the second 4 images for seamless looping */}
          {images.slice(4, 8).map((img, index) => (
            <div className="gallery-item" key={`col2-dup-${index}`}>
              <img src={img.src} alt={img.alt} loading="eager" />
            </div>
          ))}
        </div>
        
        <div className="gallery-column" ref={column3Ref}>
          {/* Third column - 4 images */}
          {images.slice(8, 12).map((img, index) => (
            <div className="gallery-item" key={`col3-${index}`}>
              <img src={img.src} alt={img.alt} loading="eager" />
            </div>
          ))}
          {/* Duplicate the third 4 images for seamless looping */}
          {images.slice(8, 12).map((img, index) => (
            <div className="gallery-item" key={`col3-dup-${index}`}>
              <img src={img.src} alt={img.alt} loading="eager" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
