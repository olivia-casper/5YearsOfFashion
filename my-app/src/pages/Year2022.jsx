import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2022.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2022() {
  return (
    <div data-year="2022">
      <section className="year-container">
        <h1>2022 Fashion Trends</h1>
        <div className="year-content">
          
          <div className="side left">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/sheer.jpeg`}
              caption="Sheer Layers"
              alt="Sheer Layers"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/cargopants.webp`}
              caption="Cargo Pants"
              alt="Cargo Pants"
            />
          </div>

          <CenterContent
            paragraphTop="2022 marked a shift toward elevated basics and sustainable fashion. As the world transitioned back to in-person life post-pandemic, fashion embraced understated luxury and timeless silhouettes. Quiet luxury—think neutral tones, quality fabrics, and minimal branding—became a major focus. However, bold statements still had their place, with sheer layers offering a daring but elegant touch. Cargo pants also dominated casualwear, blending practicality with trendiness."
            paragraphBottom="Edgy streetwear dominates casual wear. Bold graphics, oversized silhouettes, and statement sneakers became wardrobe essentials. Quiet luxury gains popularity among professionals. Minimalist, high-quality fabrics and tailored looks defined a shift toward understated elegance."
            imgSrc={`${process.env.PUBLIC_URL}/images/2022piechart.png`}
            alt="2022 Fashion Trend Chart"
          />

          <div className="side right">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/quietluxury.jpeg`}
              caption="Quiet Luxury"
              alt="Quiet Luxury"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/leather.jpeg`}
              caption="Leather Everything"
              alt="Leather Everything"
            />
          </div>
        </div>
      </section>

      <Pagination prevLink="/Year2021" nextLink="/Year2023" />

      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2022;
