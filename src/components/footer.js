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
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <h1>Footer</h1>
      <p>
        ©
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};
