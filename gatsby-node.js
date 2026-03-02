const fs = require("fs")
const path = require("path")

// Pages already handled by static files in src/pages/
// These are NOT created programmatically to avoid Gatsby conflicts
const STATIC_PAGES = [
  "/",
  "/adhoc/",
  "/vumble/",
  "/openrecord/",
  "/neat/",
  "/ourluubeginning/",
  "/fastropelabs/",
  "/humblevc/",
  "/journaldaily/",
  "/remotework/",
]

// ─────────────────────────────────────────────────────────────────────────────
// SCHEMA
// Explicitly define types so Gatsby never infers wrong shapes from the JSON
// ─────────────────────────────────────────────────────────────────────────────

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type SiteJson implements Node {
      name: String
      headline: String
      shortHeadline: String
      bio: String
      email: String
      siteUrl: String
      speakingText: String
      seoDescription: String
      infoTitle: String
      infoFamiliar: String
      infoBuilt: String
    }
    type NavItem {
      title: String
      path: String
      anchorId: String
      status: String
      homeLabel: String
      popupText: String
      popupImage: String
    }
    type NavigationJson implements Node {
      section: String
      items: [NavItem]
    }
    type SocialLink {
      platform: String
      label: String
      url: String
    }
    type SocialJson implements Node {
      items: [SocialLink]
    }
  `)
}

// ─────────────────────────────────────────────────────────────────────────────
// SOURCE NODES
// Manually source the config JSON files so they can be plain objects (not
// arrays). gatsby-transformer-json only creates nodes from top-level arrays,
// but Decap CMS files collections require root-level objects to prefill fields.
// ─────────────────────────────────────────────────────────────────────────────

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const configDir = path.join(__dirname, "content/config")

  // site.json → one SiteJson node
  const site = JSON.parse(
    fs.readFileSync(path.join(configDir, "site.json"), "utf8")
  )
  createNode({
    ...site,
    id: createNodeId("site-config"),
    parent: null,
    children: [],
    internal: {
      type: "SiteJson",
      contentDigest: createContentDigest(site),
    },
  })

  // navigation.json → one NavigationJson node per section
  // File format: { section_writing: { section, items }, section_product: { ... }, ... }
  const nav = JSON.parse(
    fs.readFileSync(path.join(configDir, "navigation.json"), "utf8")
  )
  Object.values(nav).forEach(sectionData => {
    createNode({
      section: sectionData.section,
      items: sectionData.items,
      id: createNodeId(`nav-${sectionData.section}`),
      parent: null,
      children: [],
      internal: {
        type: "NavigationJson",
        contentDigest: createContentDigest(sectionData),
      },
    })
  })

  // social.json → one SocialJson node
  // File format: { items: [{ platform, label, url }] }
  const social = JSON.parse(
    fs.readFileSync(path.join(configDir, "social.json"), "utf8")
  )
  createNode({
    items: social.items,
    id: createNodeId("social-config"),
    parent: null,
    children: [],
    internal: {
      type: "SocialJson",
      contentDigest: createContentDigest(social),
    },
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// CREATE PAGES
// ─────────────────────────────────────────────────────────────────────────────

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { status: { ne: "coming-soon" } } }) {
        nodes {
          id
          frontmatter {
            title
            slug
            category
            path
            status
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading markdown files", result.errors)
    return
  }

  const caseStudyTemplate = path.resolve("src/templates/case-study.js")
  const blogPostTemplate = path.resolve("src/templates/blog-post.js")

  result.data.allMarkdownRemark.nodes.forEach(node => {
    const { path: pagePath, category } = node.frontmatter

    // Skip pages already handled by static files in src/pages/
    if (STATIC_PAGES.includes(pagePath)) return

    const template =
      category === "writing" ? blogPostTemplate : caseStudyTemplate

    createPage({
      path: pagePath,
      component: template,
      context: {
        id: node.id,
        slug: node.frontmatter.slug,
      },
    })
  })
}
