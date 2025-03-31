import "./css/Year2025Predictions.css";
import "../components/css/styles.css";
import { Link } from "react-router-dom";


function Year2025() {
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

      {/* Contact Form */}
      <section className="contact-form">
        <h3>Have any comments or suggestions? Email us!</h3>

        <form method="POST" id="form">
          <input type="hidden" name="access_key" value="3f2bdbe4-ff60-4d3c-8806-eb6ba785e48a" />
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <input type="checkbox" name="botcheck" style={{ display: "none" }} className="hidden" />
          <button type="submit">Send</button>
          <div id="result"></div>
        </form>
      </section>

      {/* Pagination */}
      <div className="pagination">
        <div className="prev">
          <Link to="/Year2024">Previous</Link>
        </div>
        <div className="next">
          <Link to="/">Next</Link>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2025;
