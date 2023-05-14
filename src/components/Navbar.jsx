import React, { useState, useEffect } from "react";
import NetflixCloneLogo from "../images/images.png"
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
      <button className="LoginButton"><Link to="/signin">Sign In</Link></button>

    </nav>
  );
}

export default Navbar;
