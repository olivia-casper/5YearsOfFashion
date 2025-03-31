import "./css/Year2022.css";
import "../components/css/years.css";
import "../components/css/styles.css";
import { Link } from "react-router-dom";


function Year2022() {
    return (
      <div data-year="2022">
        {/* Fake Browser Bar 
        <div className="top-bar"></div> */}
  
        {/*Ignore Header ---
        <header>
          <h1 className="site-title">5 Years of Fashion Trends</h1>
          <nav>
            <button className="menu-toggle" aria-label="Toggle Navigation">&#9776;</button>
            <ul className="nav-links">
              <li><a href="/index.html">Home</a></li>
              <li><a href="/Year2020">2020</a></li>
              <li><a href="/Year2021">2021</a></li>
              <li><a href="/Year2022" className="active">2022</a></li>
              <li><a href="/Year2023">2023</a></li>
              <li><a href="/Year2024">2024</a></li>
              <li><a href="/Year2025Predictions">2025 Predictions</a></li>
            </ul>
          </nav> 
        </header> */}
  
        {/* Main Content */}
        <section className="year-container">
          <h1>2022 Fashion Trends</h1>
          <div className="year-content">
            
            {/* Left Side */}
            <div className="side left">
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/sheer.jpeg`} alt="Sheer Layers" />
                <p>Sheer Layers</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/cargopants.webp`} alt="Cargo Pants" />
                <p>Cargo Pants</p>
              </div>
            </div>
  
            {/* Center Section */}
            <div className="center-section">
              <p>
                2022 marked a shift toward elevated basics and sustainable fashion. As the world transitioned back to in-person life post-pandemic, fashion embraced understated luxury and timeless silhouettes. Quiet luxury—think neutral tones, quality fabrics, and minimal branding—became a major focus. However, bold statements still had their place, with sheer layers offering a daring but elegant touch. Cargo pants also dominated casualwear, blending practicality with trendiness.
              </p>
              <hr className="dotted" />
              <div className="bottom-content">
                <p>
                  Edgy streetwear dominates casual wear. Bold graphics, oversized silhouettes, and statement sneakers became wardrobe essentials. Quiet luxury gains popularity among professionals. Minimalist, high-quality fabrics and tailored looks defined a shift toward understated elegance.
                </p>
                <img src={`${process.env.PUBLIC_URL}/images/2022piechart.png`} alt="2022 Fashion Trend Chart" />
              </div>
            </div>
  
            {/* Right Side */}
            <div className="side right">
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/quietluxury.jpeg`} alt="Quiet Luxury" />
                <p>Quiet Luxury</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/leather.jpeg`} alt="Leather Everything" />
                <p>Leather Everything</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pagination */}
        <div className="pagination">
          <div className="prev">
            <Link to="/Year2021">Previous</Link>
          </div>
          <div className="next">
            <Link to="/Year2023">Next</Link>
          </div>
        </div>
  
        <div className="bottom-bar"></div>
      </div>
    );
  }
  
  export default Year2022;