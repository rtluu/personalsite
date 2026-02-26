import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArrowIcon from "../icons/arrow-icon.inline.svg"
import CaseArrowIcon from "../icons/case-arrow-icon.inline.svg"

const CaseStudyTemplate = ({ data }) => {
  const { markdownRemark } = data
  const {
    title,
    seoTitle,
    role,
    client,
    idea,
    team,
    tools,
    timeline,
    sections,
    prevTitle,
    prevPath,
    nextTitle,
    nextPath,
    nextComingSoon,
  } = markdownRemark.frontmatter

  const [collapsedSections, setCollapsedSections] = useState({})
  const toggleSection = id =>
    setCollapsedSections(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <Layout>
      <SEO title={seoTitle || `${title} | Ryan Luu`} />
      <div className="template-content">
        <h1 id={markdownRemark.frontmatter.slug}>{title}</h1>

        <div className="template-section">
          <div className="template-text-block">
            <div className="template-text-body">
              {idea && <p><span className="bold-italic">Idea: </span>{idea}</p>}
              {client && <p><span className="bold-italic">Client: </span>{client}</p>}
              {role && <p><span className="bold-italic">Role: </span>{role}</p>}
              {team && <p><span className="bold-italic">Team: </span>{team}</p>}
              {tools && <p><span className="bold-italic">Tools: </span>{tools}</p>}
              {timeline && <p><span className="bold-italic">Timeline: </span>{timeline}</p>}
            </div>
          </div>
        </div>

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

        <div className="template-section">
          <div className="template-text-body">
            <div className="case-end-links">
              {prevTitle && prevPath && (
                <Link to={prevPath} className="case-item">
                  <span className="case-arrow previous"><CaseArrowIcon /></span>
                  <p>+{prevTitle}</p>
                </Link>
              )}
              {nextTitle && nextPath && (
                nextComingSoon ? (
                  <span className="case-item next">
                    <span className="case-arrow"><CaseArrowIcon /></span>
                    <div className="coming-soon">
                      <p>+{nextTitle}</p>
                      <span className="coming-soon-text">(coming soon)</span>
                    </div>
                  </span>
                ) : (
                  <Link to={nextPath} className="case-item next">
                    <span className="case-arrow"><CaseArrowIcon /></span>
                    <p>+{nextTitle}</p>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
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
        role
        client
        idea
        team
        tools
        timeline
        prevTitle
        prevPath
        nextTitle
        nextPath
        nextComingSoon
        sections {
          id
          title
          text
        }
      }
    }
  }
`

export default CaseStudyTemplate
