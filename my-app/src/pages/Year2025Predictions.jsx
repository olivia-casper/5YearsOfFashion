import Pagination from "../components/Pagination";
import "./css/Year2025Predictions.css";
import "../components/css/styles.css";
import { Link } from "react-router-dom";


function Year2025Predictions() {
  return (
    <div>
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
            <li><a href="/2024">2024</a></li>
            <li><a href="/2025" className="active">2025 Predictions</a></li>
          </ul>
        </nav> 
      </header> */}

      {/* Main 2025 Section */}
      <section className="predictions-container">
        <h1>2025 Fashion Predictions</h1>

        <div className="polaroid-wrapper">
          <div className="polaroid polaroid-1">
            <img src={`${process.env.PUBLIC_URL}/images/loudluxury.png`} alt="Loud Luxury Example" />
            <div className="caption">
              <p>Loud Luxury</p>
              <div className="heart">♡</div>
            </div>
          </div>

          <div className="polaroid polaroid-2">
            <img src={`${process.env.PUBLIC_URL}/images/retro.jpeg`} alt="70s Inspiration Example" />
            <div className="caption">
              <p>Retro Revival</p>
              <div className="heart">♡</div>
            </div>
          </div>

          <div className="polaroid polaroid-3">
            <img src={`${process.env.PUBLIC_URL}/images/layering.jpeg`} alt="Layering Example" />
            <div className="caption">
              <p>Layering</p>
              <div className="heart">♡</div>
            </div>
          </div>

          <div className="polaroid polaroid-4">
            <img src={`${process.env.PUBLIC_URL}/images/jewelry.jpeg`} alt="Chunky Jewelry Example" />
            <div className="caption">
              <p>Chunky Jewelry</p>
              <div className="heart">♡</div>
            </div>
          </div>

          <div className="polaroid polaroid-5">
            <img src={`${process.env.PUBLIC_URL}/images/mixedprints.webp`} alt="Mixed Prints Example" />
            <div className="caption">
              <p>Mixed Prints</p>
              <div className="heart">♡</div>
            </div>
          </div>
        </div>
      </section>

      <div className="likefavs">
        <p><i>Like your favorites!</i></p>
      </div>

      {/* Pagination */}
      <Pagination prevLink="/Year2024" nextLink="/" />

      {/* Footer Bar */}
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2025Predictions;
