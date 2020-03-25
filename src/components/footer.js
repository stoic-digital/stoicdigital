import React, { useState } from "react";
import * as emailjs from "emailjs-com";

export default () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, message, name);
  };
  return (
    <footer style={{ padding: "8vmin" }}>
      <h3 style={{ textAlign: "center" }}>Contact us</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message..."
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
      <p style={{ textAlign: "center", margin: "10em 0 5em" }}>
        {`© ${new Date().getFullYear()} Stoic Digital`}
      </p>
    </footer>
  );
};
