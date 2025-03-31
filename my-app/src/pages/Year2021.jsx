import "./css/Year2021.css";
import "../components/css/years.css";
import "../components/css/styles.css";
import { Link } from "react-router-dom";


function Year2021() {
    return (
      <div data-year="2021">
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
              <li><a href="/Year2021" className="active">2021</a></li>
              <li><a href="/Year2022">2022</a></li>
              <li><a href="/Year2023">2023</a></li>
              <li><a href="/Year2024">2024</a></li>
              <li><a href="/Year2025Predictions">2025 Predictions</a></li>
            </ul>
          </nav> 
        </header> */}
  
        {/* Main Section */}
        <section className="year-container">
          <h1>2021 Fashion Trends</h1>
          <div className="year-content">
            
            {/* Left Side */}
            <div className="side left">
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/corset.jpeg`} alt="Corsets" />
                <p>Corsets</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/lowrise.jpeg`} alt="Low-rise Jeans" />
                <p>Low-rise Jeans</p>
              </div>
            </div>
  
            {/* Center Section */}
            <div className="center-section">
              <p>
                The early 2000s aesthetic made a full-force comeback in 2021. Gen Z popularized baby tees, baguette bags, and low-rise jeans. Meanwhile, cottagecore—a romantic, nature-inspired style—took over social media, celebrating vintage floral patterns and flowy dresses.
              </p>
              <hr className="dotted" />
              <div className="bottom-content">
                <p>
                  The revival of Y2K fashion x1 billion. Everything from crop tops and baguette bags to low-rise denim and rhinestones made an appearance. Comfort-driven fashion dominated. Loungewear became the norm, with sweat sets and oversized fits reigning supreme. Bold colors & accessories made a statement. Bright color blocking and chunky shoes defined 2021 and brought a sense of playfulness.
                </p>
              </div>
            </div>
  
            {/* Right Side */}
            <div className="side right">
              <div className="frame">
              <img src={`${process.env.PUBLIC_URL}/images/accessories.jpeg`} alt="Bold Colors & Accessories" />
                <p>Bold Colors & Accessories</p>
              </div>
              <div className="frame">
                <img src={`${process.env.PUBLIC_URL}/images/loungewear.jpeg`} alt="Sweat Sets" />
                <p>Sweat Sets</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pagination */}
        <div className="pagination">
          <div className="prev">
            <Link to="/Year2020">Previous</Link>
          </div>
          <div className="next">
            <Link to="/Year2022">Next</Link>
          </div>
        </div>
  
        <div className="bottom-bar"></div>
      </div>
    );
  }
  
  export default Year2021;