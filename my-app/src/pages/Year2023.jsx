import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2023.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2023() {
  return (
    <div data-year="2023">
      <section className="year-container">
        <h1>2023 Fashion Trends</h1>
        <div className="year-content">
          
          <div className="side left">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/balletcore.jpeg`}
              caption="Balletcore"
              alt="Balletcore"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/metallics.jpeg`}
              caption="Metallics"
              alt="Metallics"
            />
          </div>

          <CenterContent
            paragraphTop="The year 2023 was a fusion of hyper-feminine and futuristic aesthetics. Balletcore emerged as a major movement, bringing delicate wrap tops, leg warmers, and pastel shades into everyday wear. Meanwhile, denim and metallics saw a resurgence, with full-denim looks and shiny statements making waves."
            paragraphBottom="Balletcore’s influence extended beyond fashion into beauty trends. It is characterized by delicate aesthetics like ballet flats, wrap tops, and pastel tones. Fashion trends reflected the tech-inspired mood of the year. Sleek silhouettes and metallic fabrics dominated the runways, creating a space-age aesthetic."
            imgSrc={`${process.env.PUBLIC_URL}/images/2023percent.png`}
            alt="2023 Tech Influence Chart"
          />

          <div className="side right">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/denim.webp`}
              caption="Denim on Denim"
              alt="Denim on Denim"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/statement_accessories.jpeg`}
              caption="Statement Accessories"
              alt="Statement Accessories"
            />
          </div>
        </div>
      </section>

      <Pagination prevLink="/Year2022" nextLink="/Year2024" />

      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2023;
