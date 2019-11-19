import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Logo from "../assets/svg/logo.svg"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Stoic Digital" />
    {/* <img src={Logo} alt="" /> */}
    <div style={{ padding: "8vmin" }}>
      <Logo style={{ height: "30vmin" }} />
      <blockquote style={{ fontSize: "6vmin", marginTop: "2em" }}>
        <p style={{ margin: 0 }}>
          <span style={{ fontFamily: "georgia" }}>&ldquo;</span>It takes a lot
          of hard work
        </p>
        <p>
          &nbsp;&nbsp;to make something simple
          <span style={{ fontFamily: "georgia" }}>&rdquo;</span>
        </p>
        <footer>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— Steve Jobs</footer>
      </blockquote>
    </div>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
