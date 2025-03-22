import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !menuActive ? 'hidden' : 'auto';
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    if (menuActive) {
      setMenuActive(false);
      document.body.style.overflow = 'auto';
    }
  };

  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && menuActive) {
        setMenuActive(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuActive]);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">Logo</div>
       
        <button 
          className="mobile-menu-btn" 
          onClick={toggleMenu}
          aria-label={menuActive ? "Close menu" : "Open menu"}
          aria-expanded={menuActive}
        >
          {menuActive ? "✕" : "☰"}
        </button>
       
        <nav className={`nav ${menuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="/" onClick={closeMenu}>Home</a></li>
            <li><a href="/services" onClick={closeMenu}>Services</a></li>
            <li><a href="/about" onClick={closeMenu}>About Us</a></li>
            <li><a href="/details" onClick={closeMenu}>Details</a></li>
            <li><a href="/Blog" onClick={closeMenu}>Gallery</a></li>
          </ul>
          
          {/* Mobile buttons that only appear in mobile menu */}
          <div className="buttons-mobile">
            <button className="btn-outline">Learn</button>
            <button className="btn-filled">Explore</button>
          </div>
        </nav>
       
        {/* <div className="buttons"> */}
          {/* <button className="btn-outline">Learn</button> */}
          {/* <button className="btn-filled">Explore</button> */}
        {/* </div> */}
      </header>
     
      {/* Overlay for mobile menu */}
      <div 
        className={`menu-overlay ${menuActive ? 'active' : ''}`} 
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
};

export default Header;
