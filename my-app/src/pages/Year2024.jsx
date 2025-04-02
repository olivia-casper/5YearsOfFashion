import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2024.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2024() {
  return (
    <div data-year="2024">
      <section className="year-container">
        <h1>2024 Fashion Trends</h1>
        <div className="year-content">
          
          <div className="side left">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/leopard.jpeg`}
              caption="Leopard Print"
              alt="Leopard Print"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/burgandy.jpeg`}
              caption="Burgandy Takeover"
              alt="Burgandy Outfit"
            />
          </div>

          <CenterContent
            paragraphTop="2024 saw a bold contrast between structure and softness, with deconstructed tailoring and redefining silhouettes. Traditional suiting was given an undone twist—raw hems, asymmetrical cuts, and relaxed draping took center stage. Ribbons and bows added a hyper-feminine edge, adorning everything from shoes to statement blouses. Fashion embraced both power and playfulness, allowing for expressive layering and personal style curation."
            paragraphBottom="Leopard print came back in full force, with everything from coats to footwear embracing the wild pattern. Burgundy emerged as the year’s “it” color, adding richness and depth to wardrobes across the board."
            imgSrc={`${process.env.PUBLIC_URL}/images/pyramid.png`}
            alt="2024 Fashion Funnel Chart"
          />

          <div className="side right">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/bows.jpeg`}
              caption="Ribbons & Bows"
              alt="Ribbons & Bows"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/asymmetrical.webp`}
              caption="Deconstructed Tailoring"
              alt="Deconstructed Tailoring"
            />
          </div>
        </div>
      </section>

      <Pagination prevLink="/Year2023" nextLink="/Year2025Predictions" />

      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2024;
