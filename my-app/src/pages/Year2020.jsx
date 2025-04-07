import { useEffect, useState } from "react";
import axios from "axios";
import YearFrame from "../components/YearFrame";
import CenterContent from "../components/CenterContent";
import Pagination from "../components/Pagination";
import "./css/Year2020.css";
import "../components/css/years.css";
import "../components/css/styles.css";

function Year2020() {
  const [yearData, setYearData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fiveyearsoffashion-server.onrender.com/api/trends");
        const data = res.data.find((item) => item.year === 2020);
        setYearData(data);
      } catch (err) {
        console.error("Failed to fetch 2020 trends:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div data-year="2020">
      <section className="year-container">
        <h1>{yearData.year} Fashion Trends</h1>
        <div className="year-content">
          {/* Left Side */}
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

          {/* Center Section */}
          <CenterContent
            paragraphTop={yearData["top-description"]}
            paragraphBottom={yearData["bottom-text"]}
            imgSrc={`${process.env.PUBLIC_URL}/images/${yearData["main-image"]}`}
            imageAlt={`Fashion Graph ${yearData.year}`}
          />

          {/* Right Side */}
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

      <Pagination prevLink="/" nextLink="/Year2021" />
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2020;
