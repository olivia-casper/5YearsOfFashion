import { useState } from "react";
import axios from "axios";
import "./css/ContactForm.css";

function AddPredictionForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", image: "", description: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://fiveyearsoffashion-server.onrender.com/api/predictions",
        form
      );
      onAdd(res.data.prediction);
      setForm({ name: "", image: "", description: "" });
    } catch (err) {
      console.error("Failed to submit prediction", err);
    }
  };

  return (
    <section className="contact-form">
      <h3>Submit Your 2025 Fashion Prediction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Trend Name (e.g. Baggy Jeans)"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default AddPredictionForm;
