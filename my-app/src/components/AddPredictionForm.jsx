import { useState } from "react";
import axios from "axios";
import "./css/ContactForm.css";

function AddPredictionForm({ onAdd }) {
  const [form, setForm] = useState({ name: "", image: "", description: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.image || !form.description) {
      setMessage("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("https://fiveyearsoffashion-server.onrender.com/api/predictions", form);
      setMessage("Prediction added!");
      onAdd(res.data.prediction);
      setForm({ name: "", image: "", description: "" });
    } catch (err) {
      setMessage("Failed to submit. Make sure all fields are valid.");
    }

    setTimeout(() => setMessage(""), 3000);
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
        <div id="result">{message}</div>
      </form>
    </section>
  );
}

export default AddPredictionForm;
