// src/components/ContactForm.jsx
import { useState } from "react";
import "./css/ContactForm.css";

function ContactForm() {
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResult("Form submitted successfully!");
        form.reset();
      } else {
        setResult(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
    }

    setTimeout(() => setResult(""), 3000);
  };

  return (
    <section className="contact-form">
      <h3>Have any comments or suggestions? Email us!</h3>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="3f2bdbe4-ff60-4d3c-8806-eb6ba785e48a" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
        <div id="result">{result}</div>
      </form>
    </section>
  );
}

export default ContactForm;
