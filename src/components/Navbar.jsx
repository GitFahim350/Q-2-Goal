import React, { useState, useEffect } from "react";
import NetflixCloneLogo from "../images/images.png"
import Netflixprofile from "../images/Netflix-avatar.png"
import "./Navbar.css";
import { Link } from "react-router-dom";



function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={scrollPosition > 0 ? "navbar scrolled" : "navbar"}>
      <img className="logo" src={NetflixCloneLogo} alt="NetflixClone Logo" />
      
      <Link to="/profile"><img className="logo" src={Netflixprofile} alt="NetflixClone Logo" /></Link>
    </nav>
  );
}

export default Navbar;
