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
  const [feedback, setFeedback] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", image: "", description: "" });

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

  const handleAdd = (newItem) => {
    setPredictions((prev) => [...prev, newItem]);
    setFeedback("Prediction added!");
    setTimeout(() => setFeedback(""), 3000);
  };
  
  const handleDelete = async (index) => {
    try {
      await axios.delete(`https://fiveyearsoffashion-server.onrender.com/api/predictions/${index}`);
      fetchPredictions();
      setFeedback("Prediction deleted!");
    } catch (err) {
      console.error("Error deleting prediction", err);
      setFeedback("Failed to delete prediction.");
    }
    setTimeout(() => setFeedback(""), 3000);
  };

  const handleEdit = (index) => {
    const prediction = predictions[index];
    setEditForm(prediction);
    setEditIndex(prediction._id);
  };  

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };  

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://fiveyearsoffashion-server.onrender.com/api/predictions/${editIndex}`, editForm);
      setFeedback("Prediction updated!");
      setEditIndex(null);
      setEditForm({ name: "", image: "", description: "" });
      fetchPredictions();
    } catch (err) {
      console.error("Update failed:", err);
      setFeedback("Failed to update prediction.");
    }
    setTimeout(() => setFeedback(""), 3000);
  };

  return (
    <div>
      {/* Static 2025 Trends Section */}
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

      {/* Add New Prediction Form */}
      <AddPredictionForm onAdd={handleAdd} />

      {/* Feedback Message */}
      {feedback && (
        <div className="feedback-message">
          <em>{feedback}</em>
        </div>
      )}

      {/* Community Predictions Display */}
      <section className="contact-form">
        <h3>Community Predictions</h3>
        <div className="prediction-columns">
          {predictions.map((item, index) => (
            <div className="prediction-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <div className="button-group">
                <button onClick={() => handleEdit(index)} className="edit-btn">✎</button>
                <button onClick={() => handleDelete(index)} className="delete-btn">✖</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Edit Form */}
      {editIndex !== null && (
        <section className="contact-form">
          <h3>Edit Your Prediction</h3>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="name"
              value={editForm.name}
              onChange={handleEditChange}
              required
            />
            <input
              type="url"
              name="image"
              value={editForm.image}
              onChange={handleEditChange}
              required
            />
            <textarea
              name="description"
              value={editForm.description}
              onChange={handleEditChange}
              required
            />
            <button type="submit">Update</button>
          </form>
        </section>
      )}

      {/* Contact and Navigation */}
      <ContactForm />
      <Pagination prevLink="/Year2024" nextLink="/" />
      <div className="bottom-bar"></div>
    </div>
  );
}

export default Year2025Predictions;
