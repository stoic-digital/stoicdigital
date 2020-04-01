import React from "react";
import Logo from "./logo";
import Shapes from "./shapes";

export default () => (
  <section
    style={{
      padding: "8vmin",
      height: "100vh",
      position: "relative",
      zIndex: 10,
      backgroundColor: "#ecebe1",
    }}
  >
    <Logo style={{ height: "30vmin" }} />
    <Shapes />
    <blockquote
      style={{
        fontSize: "6vmin",
        margin: "0",
        position: "absolute",
        top: "50vh",
      }}
    >
      <h4 style={{ margin: 0, lineHeight: "1.3em" }}>
        <span style={{ fontFamily: "georgia" }}>&ldquo;</span>
        It takes a lot of hard work
      </h4>
      <h4 style={{ margin: 0, lineHeight: "1.3em" }}>
        &nbsp;&nbsp;to make something simple
        <span style={{ fontFamily: "georgia" }}>&rdquo;</span>
      </h4>
      <br />
      <footer>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Steve Jobs</footer>
    </blockquote>
    <div
      role="presentation"
      style={{
        position: "absolute",
        bottom: "30px",
        left: "50%",
        marginLeft: "-15px",
        width: "30px",
        height: "30px",
        borderBottom: "5px solid #dab76c",
        borderRight: "5px solid #dab76c",
        transform: "rotate(45deg)",
        cursor: "pointer",
      }}
      onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
    />
  </section>
);
