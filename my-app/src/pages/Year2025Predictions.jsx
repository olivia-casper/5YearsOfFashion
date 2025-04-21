import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import PolaroidCard from "../components/PolaroidCard";
import ContactForm from "../components/ContactForm"; 
import "./css/Year2025Predictions.css";
import "../components/css/styles.css";
import AddPredictionForm from "../components/AddPredictionForm";

function Year2025Predictions() {
  const [predictions, setPredictions] = useState([]);
  const [newPrediction, setNewPrediction] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetchPredictions();
  }, []);

  const fetchPredictions = async () => {
    try {
      const res = await axios.get("https://fiveyearsoffashion-server.onrender.com/api/predictions");
      setPredictions(res.data);
    } catch (err) {
      console.error("Error fetching predictions", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPrediction.trim().length < 2) {
      setFeedback("Prediction must be at least 2 characters.");
      return;
    }

    try {
      await axios.post("https://fiveyearsoffashion-server.onrender.com/api/predictions", {
        text: newPrediction.trim(),
      });
      setFeedback("Prediction added!");
      setNewPrediction("");
      fetchPredictions(); 
    } catch (err) {
      setFeedback("Error adding prediction.");
    }

    setTimeout(() => setFeedback(""), 3000);
  };

  const handleAdd = (newItem) => {
    setPredictions((prev) => [...prev, newItem]);
  };
  
  const handleDelete = async (index) => {
    try {
      await axios.delete(
        `https://fiveyearsoffashion-server.onrender.com/api/predictions/${index}`
      );
      fetchPredictions();
    } catch (err) {
      console.error("Error deleting prediction", err);
    }
  };

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

      <AddPredictionForm onAdd={handleAdd} />

      <section className="contact-form">
        <h3>Community Predictions</h3>
        <div className="prediction-columns">
          {predictions.map((item, index) => (
            <div className="prediction-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <button onClick={() => handleDelete(index)} className="delete-btn">✖</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Pagination */}
      <Pagination prevLink="/Year2024" nextLink="/" />

      {/* Footer Bar */}
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2025Predictions;
