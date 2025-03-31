import "./css/Year2020.css";
import "../components/css/years.css";
import "../components/css/styles.css";
import { Link } from "react-router-dom";

function Year2020() {
    return (
      <div data-year="2020">
        {/* Fake Browser Bar 
        <div className="top-bar"></div> */}
  
        {/*Ignore Header ---
        <header>
          <h1 className="site-title">5 Years of Fashion Trends</h1>
          <nav>
            <button className="menu-toggle" aria-label="Toggle Navigation">&#9776;</button>
            <ul className="nav-links">
              <li><a href="/index.html">Home</a></li>
              <li><a href="/Year2020" className="active">2020</a></li>
              <li><a href="/Year2021">2021</a></li>
              <li><a href="/Year2022">2022</a></li>
              <li><a href="/Year2023">2023</a></li>
              <li><a href="/Year2024">2024</a></li>
              <li><a href="/Year2025Predictions">2025 Predictions</a></li>
            </ul>
          </nav> 
        </header> */}
  
        {/* Main Year Container */}
        <section className="year-container">
          <h1>2020 Fashion Trends</h1>
          <div className="year-content">
            
            {/* Left Side */}
            <div className="side left">
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/prints.jpg`} alt="Fun Prints" />
                <p>Fun Prints</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/oversized.webp`} alt="Oversized Garments" />
                <p>Oversized Garments</p>
              </div>
            </div>
  
            {/* Center Section */}
            <div className="center-section">
              <p>
                The year 2020 redefined fashion as the world embraced comfort and "dopamine dressing" due to the pandemic. Oversized garments became the new norm, but blazers and crop tops stayed relevant. Fun and bold prints also made a major comeback, bringing a playful touch to everyday outfits.
              </p>
              <hr className="dotted" />
              <div className="bottom-content">
                <p></p>
                <img src={`${process.env.PUBLIC_URL}/images/2020graph5.png`} alt="2020 Trends Graph" />
              </div>
            </div>
  
            {/* Right Side */}
            <div className="side right">
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/blazer.jpg`} alt="Blazers" />
                <p>Blazers</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/croptops.jpg`} alt="Crop Tops" />
                <p>Crop Tops</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pagination */}
        <div className="pagination">
          <div className="prev">
            <Link to="/">Previous</Link>
          </div>
          <div className="next">
            <Link to="/Year2021">Next</Link>
          </div>
        </div>
  
        {/* Fake Bottom Bar */}
        <div className="bottom-bar"></div>
      </div>
    );
  }
  
  export default Year2020;