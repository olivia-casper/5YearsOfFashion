import useFetchTrend from "../hooks/useFetchTrend";
import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2024.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2024() {
  const { trend, loading, error } = useFetchTrend(2024);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!trend) return <p>No data found.</p>;

  const leftImages = trend.images.slice(0, 2);
  const rightImages = trend.images.slice(2);

  return (
    <div data-year="2024">
      <section className="year-container">
        <h1>{trend.year} Fashion Trends</h1>
        <div className="year-content">
          <div className="side left">
            {leftImages.map((img, i) => (
              <YearFrame
                key={i}
                imgSrc={`${process.env.PUBLIC_URL}/images/${img.src}`}
                caption={img.title}
                alt={img.title}
              />
            ))}
          </div>

          <CenterContent
            paragraphTop={trend["top-description"]}
            paragraphBottom={trend["bottom-text"]}
            imgSrc={
              trend["main-image"]
                ? `${process.env.PUBLIC_URL}/images/${trend["main-image"]}`
                : null
            }
            imageAlt={`${trend.year} Chart`}
          />

          <div className="side right">
            {rightImages.map((img, i) => (
              <YearFrame
                key={i}
                imgSrc={`${process.env.PUBLIC_URL}/images/${img.src}`}
                caption={img.title}
                alt={img.title}
              />
            ))}
          </div>
        </div>
      </section>

      <Pagination prevLink="/Year2023" nextLink="/Year2025Predictions" />
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2024;
