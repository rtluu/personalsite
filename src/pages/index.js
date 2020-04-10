import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Headshot from "../components/About/Headshot"
import "../styles/about.scss";

const IndexPage = () => (
  <Layout>
    <SEO title="About Me - Ryan Luu" />
    <h1>Ryan Luu - Personal Site</h1>
    <div className="about-section">
      <div className="about-text-block">
        <p className="about-section-head">A little about me:</p>
        <p>🏡 Live in DC</p>
        <p>💼 Senior PM @washingtonpost</p>
        <p>💻 Design and code for fun</p>
        <p>💍 Engaged to K</p>
        <p>🐢 UMD Alum</p>
        <p>🏀 Ball is life</p>
      </div>
      <div className="about-pic">
        <Headshot />
        <h6 className="caption">Hi, I'm Ryan <span className="caption-emoji">👋</span></h6>
      </div>
    </div>
    <div className="about-section">
      <div className="about-text-block">
        <p className="about-section-head">Product:</p>
        <p>+Washington Post</p>
        <p>+Ad Hoc/VA.gov</p>
        <p>+Vumble</p>
      </div>
    </div>
    <div className="about-section">
      <div className="about-text-block">
        <p className="about-section-head">Projects:</p>
        <p>+OpenRecord</p>
        <p>+Neat</p>
        <p>+OurLuuBeginning</p>
        <p>+Fastrope Labs</p>
        <p>+Humble Venture Capital</p>
      </div>
    </div>


    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
