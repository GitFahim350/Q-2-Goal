import React from 'react';
import '../components/Fotter.css';

function Footer() {
  return (
    <div className="footer">
      <p>© {new Date().getFullYear()} Netflix Clone | All Rights Reserved</p>
    </div>
  );
}

export default Footer;
