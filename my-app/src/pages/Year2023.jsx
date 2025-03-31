import "./css/Year2023.css";
import "../components/css/years.css";
import "../components/css/styles.css";
import { Link } from "react-router-dom";


function Year2023() {
  return (
    <div data-year="2023">
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
            <li><a href="/Year2022">2022</a></li>
            <li><a href="/Year2023" className="active">2023</a></li>
            <li><a href="/Year2024">2024</a></li>
            <li><a href="/Year2025Predictions">2025 Predictions</a></li>
          </ul>
        </nav> 
      </header> */}

      {/* Main Content */}
      <section className="year-container">
        <h1>2023 Fashion Trends</h1>
        <div className="year-content">
          
          {/* Left Side */}
          <div className="side left">
            <div className="frame">
              <img src={`${process.env.PUBLIC_URL}/images/balletcore.jpeg`} alt="Balletcore" />
              <p>Balletcore</p>
            </div>
            <div className="frame">
            <img src={`${process.env.PUBLIC_URL}/images/metallics.jpeg`} alt="Metallics" />
              <p>Metallics</p>
            </div>
          </div>

          {/* Center Section */}
          <div className="center-section">
            <p>
              The year 2023 was a fusion of hyper-feminine and futuristic aesthetics. Balletcore emerged as a major movement, bringing delicate wrap tops, leg warmers, and pastel shades into everyday wear. Meanwhile, denim and metallics saw a resurgence, with full-denim looks and shiny statements making waves.
            </p>
            <hr className="dotted" />
            <div className="bottom-content">
              <p>
                Balletcore’s influence extended beyond fashion into beauty trends. It is characterized by delicate aesthetics like ballet flats, wrap tops, and pastel tones. Fashion trends reflected the tech-inspired mood of the year. Sleek silhouettes and metallic fabrics dominated the runways, creating a space-age aesthetic.
              </p>
              <img src={`${process.env.PUBLIC_URL}/images/2023percent.png`} alt="2023 Tech Influence Chart" />
            </div>
          </div>

          {/* Right Side */}
          <div className="side right">
            <div className="frame">
              <img src={`${process.env.PUBLIC_URL}/images/denim.webp`} alt="Denim on Denim" />
              <p>Denim on Denim</p>
            </div>
            <div className="frame">
              <img src={`${process.env.PUBLIC_URL}/images/statement_accessories.jpeg`} alt="Statement Accessories" />
              <p>Statement Accessories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="pagination">
        <div className="prev">
          <Link to="/Year2022">Previous</Link>
        </div>
        <div className="next">
          <Link to="/Year2024">Next</Link>
        </div>
      </div>

      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2023;