import { useState } from "react";
import axios from "axios";
import "./css/ContactForm.css";

function AddPredictionForm({ onAdd }) {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim().length < 2) {
      setResult("Prediction must be at least 2 characters.");
      return;
    }

    try {
      const res = await axios.post("https://fiveyearsoffashion-server.onrender.com/api/predictions", { text });
      if (res.status === 201) {
        onAdd(text);
        setText("");
        setResult("Prediction added!");
      }
    } catch (err) {
      console.error(err);
      setResult("Error adding prediction.");
    }

    setTimeout(() => setResult(""), 3000);
  };

  return (
    <section className="contact-form">
      <h3>Have Another Fashion Prediction for 2025? Add It Here:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="e.g. Baggy Jeans"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
        <div id="result">{result}</div>
      </form>
    </section>
  );
}

export default AddPredictionForm;
