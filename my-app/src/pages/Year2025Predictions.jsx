import Pagination from "../components/Pagination";
import PolaroidCard from "../components/PolaroidCard";
import "./css/Year2025Predictions.css";
import "../components/css/styles.css";

function Year2025Predictions() {
  return (
    <div>
      {/* Main 2025 Section */}
      <section className="predictions-container">
        <h1>2025 Fashion Predictions</h1>

        <div className="polaroid-wrapper">
          <PolaroidCard
            imgSrc={`${process.env.PUBLIC_URL}/images/loudluxury.png`}
            alt="Loud Luxury Example"
            caption="Loud Luxury"
            className="polaroid-1"
          />
          <PolaroidCard
            imgSrc={`${process.env.PUBLIC_URL}/images/retro.jpeg`}
            alt="70s Inspiration Example"
            caption="Retro Revival"
            className="polaroid-2"
          />
          <PolaroidCard
            imgSrc={`${process.env.PUBLIC_URL}/images/layering.jpeg`}
            alt="Layering Example"
            caption="Layering"
            className="polaroid-3"
          />
          <PolaroidCard
            imgSrc={`${process.env.PUBLIC_URL}/images/jewelry.jpeg`}
            alt="Chunky Jewelry Example"
            caption="Chunky Jewelry"
            className="polaroid-4"
          />
          <PolaroidCard
            imgSrc={`${process.env.PUBLIC_URL}/images/mixedprints.webp`}
            alt="Mixed Prints Example"
            caption="Mixed Prints"
            className="polaroid-5"
          />
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
