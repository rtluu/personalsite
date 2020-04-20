import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/About/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Ryan Luu" />
    <About />
  </Layout>
)

export default IndexPage
