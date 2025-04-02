import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2020.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2020() {
  return (
    <div data-year="2020">
      {/* Main Section */}
      <section className="year-container">
        <h1>2020 Fashion Trends</h1>

        <div className="year-content">
          {/* Left Side */}
          <div className="side left">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/prints.jpg`}
              caption="Fun Prints"
              alt="Fun Prints"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/oversized.webp`}
              caption="Oversized Garments"
              alt="Oversized Garments"
            />
          </div>

          {/* Center Content */}
          <CenterContent
            paragraphTop="The year 2020 redefined fashion as the world embraced comfort and 'dopamine dressing' due to the pandemic. Oversized garments became the new norm, but blazers and crop tops stayed relevant. Fun and bold prints also made a major comeback, bringing a playful touch to everyday outfits."
            imgSrc={`${process.env.PUBLIC_URL}/images/2020graph5.png`}
            imageAlt="2020 Graph"
          />

          {/* Right Side */}
          <div className="side right">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/blazer.jpg`}
              caption="Blazers"
              alt="Blazers"
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/croptops.jpg`}
              caption="Crop Tops"
              alt="Crop Tops"
            />
          </div>
        </div>
      </section>

      {/* Pagination Component */}
      <Pagination prevLink="/" nextLink="/Year2021" />

      {/* Bottom Bar */}
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2020;
