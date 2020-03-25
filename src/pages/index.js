import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import About from "../components/about";
import SEO from "../components/seo";
import Footer from "../components/footer";
import Splash from "../components/splash";
import Work from "../components/work";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  console.log(data);
  return (
    <Layout>
      <SEO title="Stoic Digital" />
      <Splash />
      <About />
      <Work />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
