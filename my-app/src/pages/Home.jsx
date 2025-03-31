import "../components/css/styles.css";
import "./css/Home.css";

function Home() {
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
            <li><a href="/index.html" className="active">Home</a></li>
            <li><a href="/2020">2020</a></li>
            <li><a href="/2021">2021</a></li>
            <li><a href="/2022">2022</a></li>
            <li><a href="/2023">2023</a></li>
            <li><a href="/2024">2024</a></li>
            <li><a href="/2025">2025 Predictions</a></li>
          </ul>
        </nav> 
      </header> */}

      {/* Hero Section */}
      <section className="hero">
        <img src={`${process.env.PUBLIC_URL}/images/hero.webp`} alt="Magazine Photo" />
      </section>

      <div className="below-hero"></div>

      {/* Content Boxes */}
      <section className="content">
        {/* Left Box */}
        <div className="box left">
          <div className="box-header">Overview</div>
          <p>
            One of the most defining shifts of the past five years was the divide between quiet luxury and bold maximalism. In 2021–2022, brands like The Row and Bottega Veneta led the rise of neutral tones, understated silhouettes, and quality over logos—a trend known as “old money” style. But by 2023, designers like Gucci and Balmain embraced a louder, more expressive aesthetic, bringing back bold prints, sequins, and exaggerated proportions. This contrast continues to define fashion’s direction as we enter 2025.
          </p>
        </div>

        {/* Center Box with iFrame */}
        <div className="box center">
          <iframe
            width="100%"
            height="275"
            src="https://www.youtube.com/embed/OGmscaAswR4?si=X2Ob4HHCa8XqUngt"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Box */}
        <div className="box right">
          <div className="box-header">Technology in Fashion</div>
          <p>
            Technology has become one of the biggest drivers of fashion. Smart fabrics, 3D-printed clothing, and AI-generated designs emerged between 2022 and 2024. As digital fashion gained traction, AR try-ons and virtual closets became mainstream. Meanwhile, sustainability efforts skyrocketed, with brands introducing bio-engineered, self-repairing textiles and carbon-neutral production. The next five years could redefine how we interact with fashion entirely.
          </p>
        </div>
      </section>

      {/* Bottom Bar */}
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Home;