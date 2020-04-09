import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About Me - Ryan Luu" />
    <h1>Ryan Luu - Personal Site</h1>
    <p>A little about me:</p>
    <p>🏡 Live in DC</p>
    <p>💼 Senior PM @ Washington Post</p>
    <p>💻 Design and code for fun</p>
    <p>💍 Engaged to K</p>
    <p>🐢 UMD Alum</p>
    <p>🏀 Ball is life</p>

    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
