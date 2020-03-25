import React from "react"
import Logo from "../components/logo"
import Shapes from "../components/shapes"

export default () => (
  <section style={{ padding: "8vmin", height: "100vh" }}>
    <Logo style={{ height: "30vmin" }} />
    <Shapes />
    <blockquote style={{ fontSize: "6vmin", marginTop: "2em" }}>
      <p style={{ margin: 0 }}>
        <span style={{ fontFamily: "georgia" }}>&ldquo;</span>It takes a lot of
        hard work
      </p>
      <p>
        &nbsp;&nbsp;to make something simple
        <span style={{ fontFamily: "georgia" }}>&rdquo;</span>
      </p>
      <footer>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Steve Jobs</footer>
    </blockquote>
  </section>
)
