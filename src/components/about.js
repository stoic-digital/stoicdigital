import React from "react";

export default () => (
  <section
    style={{
      background: "#dab76c",
      color: "#fff",
      padding: "8vmin",
      position: "relative",
      zIndex: 10,
    }}
    id="about"
  >
    <h2>Think slow&hellip;</h2>
    <h2 style={{ textAlign: "right" }}>
      &hellip;
      <span style={{ fontStyle: "italic" }}>act fast</span>
    </h2>
    <div style={{ maxWidth: "960px" }}>
      <p>Strive for deliberate design.</p>
      <p>Simplicity. Elegance. Perfomance.</p>
      <p>Dismiss gimmicks and trends, and engineer a bespoke solution.</p>
      <p>
        Leverage modern technologies to create simple experiences that provide everything you do
        need, whilst including nothing you don&apos;t.
      </p>
      <p>Less plugins = less bloat = less loading time = satisfied users.</p>
    </div>
  </section>
);
