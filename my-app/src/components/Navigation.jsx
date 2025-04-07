import { Link } from "react-router-dom";
import { useState } from "react";
import "./css/Navigation.css"; 

function Navigation({ isHome }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav id="main-nav" className={isHome ? "nav-home" : "nav-default"}>
      {/* Hamburger Menu Button */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
        &#9776;
      </button>

      {/* Navigation Links */}
      <ul className={`nav-links ${navOpen ? "active" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Year2020">2020</Link></li>
        <li><Link to="/Year2021">2021</Link></li>
        <li><Link to="/Year2022">2022</Link></li>
        <li><Link to="/Year2023">2023</Link></li>
        <li><Link to="/Year2024">2024</Link></li>
        <li><Link to="/Year2025Predictions">2025 Predictions</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
