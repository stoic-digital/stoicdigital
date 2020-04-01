import React, { useState } from "react";
import * as emailjs from "emailjs-com";
// import BgText from "./bgText";

export default () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send(
      "stoic_digital",
      "template_AgX36xuZ",
      {
        from_name: email,
        to_name: "rob@stoicdigital.com",
        subject: "Website enquiry",
        message_html: message,
      },
      "user_6UUJZvJsLKEt9JobP5KzC",
    );
  };
  return (
    <footer
      style={{
        padding: "8vmin",
        position: "relative",
        backgroundColor: "#ecebe1",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <h3 style={{ textAlign: "center" }}>Contact</h3>
      {/* <BgText right>Contact</BgText> */}
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
      <p style={{ textAlign: "center", margin: "5em 0 2.5em" }}>
        {`© ${new Date().getFullYear()} Stoic Digital`}
      </p>
    </footer>
  );
};
