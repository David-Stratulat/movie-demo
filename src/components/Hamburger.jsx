import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Hamburger.css";

function HamburgerMenu() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>

      <aside className="sidebar">
        <div className="hamburger-content">
          <nav>
            <Link to="/" className="hamburger-link">Home</Link>
            <Link to="/favorites" className="hamburger-link">Favorites</Link>
          </nav>
        </div>
      </aside>
    </>
  );
}

export default HamburgerMenu;
