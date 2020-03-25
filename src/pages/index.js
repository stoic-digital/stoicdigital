import React from "react"

import Layout from "../components/layout"
import About from "../components/about"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Splash from "../components/splash"
import Work from "../components/work"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Stoic Digital" />
      <Splash />
      <About />
      <Work></Work>
      <Footer />
    </Layout>
  )
}

export default IndexPage
