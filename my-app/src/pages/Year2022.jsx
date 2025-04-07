import { useEffect, useState } from "react";
import axios from "axios";
import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2022.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2022() {
  const [yearData, setYearData] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get("https://fiveyearsoffashion-server.onrender.com/api/trends");
        const yearItem = response.data.find((item) => item.year === 2022);
        setYearData(yearItem);
      } catch (error) {
        console.error("Error fetching 2022 data:", error);
      }
    };

    fetchTrends();
  }, []);

  if (!yearData) return <p>Loading...</p>;

  return (
    <div data-year="2022">
      <section className="year-container">
        <h1>{yearData.year} Fashion Trends</h1>
        <div className="year-content">
          <div className="side left">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/${yearData.images[0].src}`}
              caption={yearData.images[0].title}
              alt={yearData.images[0].title}
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/${yearData.images[1].src}`}
              caption={yearData.images[1].title}
              alt={yearData.images[1].title}
            />
          </div>

          <CenterContent
            paragraphTop={yearData["top-description"]}
            paragraphBottom={yearData["bottom-text"]}
            imgSrc={`${process.env.PUBLIC_URL}/images/${yearData["main-image"]}`}
            imageAlt={`${yearData.year} Chart`}
          />

          <div className="side right">
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/${yearData.images[2].src}`}
              caption={yearData.images[2].title}
              alt={yearData.images[2].title}
            />
            <YearFrame
              imgSrc={`${process.env.PUBLIC_URL}/images/${yearData.images[3].src}`}
              caption={yearData.images[3].title}
              alt={yearData.images[3].title}
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
