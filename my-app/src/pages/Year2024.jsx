import "./css/Year2024.css";
import "../components/css/years.css";
import "../components/css/styles.css";
import { Link } from "react-router-dom";


function Year2024() {
    return (
      <div data-year="2024">
        {/* Fake Browser Bar 
        <div className="top-bar"></div> */}
  
        {/*Ignore Header ---
        <header>
          <h1 className="site-title">5 Years of Fashion Trends</h1>
          <nav>
            <button className="menu-toggle" aria-label="Toggle Navigation">&#9776;</button>
            <ul className="nav-links">
              <li><a href="/index.html">Home</a></li>
              <li><a href="/2020">2020</a></li>
              <li><a href="/2021">2021</a></li>
              <li><a href="/2022">2022</a></li>
              <li><a href="/2023">2023</a></li>
              <li><a href="/2024" className="active">2024</a></li>
              <li><a href="/2025">2025 Predictions</a></li>
            </ul>
          </nav> 
        </header> */}
  
        {/* Main Section */}
        <section className="year-container">
          <h1>2024 Fashion Trends</h1>
          <div className="year-content">
  
            {/* Left Side */}
            <div className="side left">
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/leopard.jpeg`} alt="Leopard Print" />
                <p>Leopard Print</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/burgandy.jpeg`} alt="Burgandy Outfit" />
                <p>Burgandy Takeover</p>
              </div>
            </div>
  
            {/* Center Section */}
            <div className="center-section">
              <p>
                2024 saw a bold contrast between structure and softness, with deconstructed tailoring and redefining silhouettes. Traditional suiting was given an undone twist—raw hems, asymmetrical cuts, and relaxed draping took center stage. Ribbons and bows added a hyper-feminine edge, adorning everything from shoes to statement blouses. Fashion embraced both power and playfulness, allowing for expressive layering and personal style curation.
              </p>
              <hr className="dotted" />
              <div className="bottom-content">
                <p>
                  Leopard print came back in full force, with everything from coats to footwear embracing the wild pattern. Burgundy emerged as the year’s “it” color, adding richness and depth to wardrobes across the board.
                </p>
                <img src={`${process.env.PUBLIC_URL}/images/pyramid.png`} alt="2024 Fashion Funnel Chart" />
              </div>
            </div>
  
            {/* Right Side */}
            <div className="side right">
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/bows.jpeg`} alt="Ribbons & Bows" />
                <p>Ribbons & Bows</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/asymmetrical.webp`} alt="Deconstructed Tailoring" />
                <p>Deconstructed Tailoring</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pagination */}
        <div className="pagination">
          <div className="prev">
            <Link to="/Year2023">Previous</Link>
          </div>
          <div className="next">
            <Link to="/Year2025Predictions">Next</Link>
          </div>
        </div>
  
        <div className="bottom-bar"></div>
      </div>
    );
  }
  
  export default Year2024;