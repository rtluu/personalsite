import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArrowIcon from "../icons/arrow-icon.inline.svg"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const {
    title,
    seoTitle,
    intro,
    sections,
  } = markdownRemark.frontmatter

  const [collapsedSections, setCollapsedSections] = useState({})
  const toggleSection = id =>
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <Layout>
      <SEO title={seoTitle || `${title} | Ryan Luu`} />
      <div className="template-content">
        <h1 id={markdownRemark.frontmatter.slug}>{title}</h1>

        {intro && (
          <div className="template-section">
            <div className="template-text-block">
              <div className="template-text-body">
                {intro.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        )}

        {sections && sections.map(section => (
          <div className="template-section" key={section.id}>
            <div className={`template-text-block ${collapsedSections[section.id] ? "collapsed" : ""}`}>
              <div
                className="template-text-header"
                onClick={() => toggleSection(section.id)}
              >
                <button className="collapse-expand"><ArrowIcon /></button>
                <h2 id={section.id}>{section.title}</h2>
              </div>
              <div className="template-text-body">
                {section.text.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        slug
        seoTitle
        intro
        sections {
          id
          title
          text
        }
      }
    }
  }
`

export default BlogPostTemplate
