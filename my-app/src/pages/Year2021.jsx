import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2021.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2021() {
  return (
    <div data-year="2021">
      <section className="year-container">
        <h1>2021 Fashion Trends</h1>
        <div className="year-content">
          
          <div className="side left">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/corset.jpeg`}
              caption="Corsets"
              alt="Corsets"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/lowrise.jpeg`}
              caption="Low-rise Jeans"
              alt="Low-rise Jeans"
            />
          </div>

          <CenterContent
            paragraphTop="The early 2000s aesthetic made a full-force comeback in 2021. Gen Z popularized baby tees, baguette bags, and low-rise jeans. Meanwhile, cottagecore—a romantic, nature-inspired style—took over social media, celebrating vintage floral patterns and flowy dresses."
            paragraphBottom="The revival of Y2K fashion x1 billion. Everything from crop tops and baguette bags to low-rise denim and rhinestones made an appearance. Comfort-driven fashion dominated. Loungewear became the norm, with sweat sets and oversized fits reigning supreme. Bold colors & accessories made a statement. Bright color blocking and chunky shoes defined 2021 and brought a sense of playfulness."
          />

          <div className="side right">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/accessories.jpeg`}
              caption="Bold Colors & Accessories"
              alt="Bold Colors & Accessories"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/loungewear.jpeg`}
              caption="Sweat Sets"
              alt="Sweat Sets"
            />
          </div>
        </div>
      </section>

      <Pagination prevLink="/Year2020" nextLink="/Year2022" />

      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2021;
