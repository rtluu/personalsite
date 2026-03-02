const fs = require("fs")
const path = require("path")

// Pages already handled by static files in src/pages/
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
// SCHEMA — explicit types so Gatsby never infers wrong shapes
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
// SOURCE NODES — read homepage.json and fan out into the same GraphQL node
// types (SiteJson, NavigationJson, SocialJson) that all components query.
// homepage.json is the single source of truth for all homepage content.
// ─────────────────────────────────────────────────────────────────────────────

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  const configDir = path.join(__dirname, "content/config")

  const hp = JSON.parse(
    fs.readFileSync(path.join(configDir, "homepage.json"), "utf8")
  )

  // ── SiteJson (bio, headline, contact, info panel) ─────────────────────────
  const siteFields = [
    "name", "headline", "shortHeadline", "bio", "email",
    "siteUrl", "speakingText", "seoDescription",
    "infoTitle", "infoFamiliar", "infoBuilt",
  ]
  const siteData = {}
  siteFields.forEach(k => { siteData[k] = hp[k] || "" })

  createNode({
    ...siteData,
    id: createNodeId("site-config"),
    parent: null,
    children: [],
    internal: {
      type: "SiteJson",
      contentDigest: createContentDigest(siteData),
    },
  })

  // ── NavigationJson (one node per section: writing, product, development) ───
  ;["writing", "product", "development"].forEach(section => {
    const sectionData = hp[`section_${section}`] || { section, items: [] }
    createNode({
      section: sectionData.section || section,
      items: sectionData.items || [],
      id: createNodeId(`nav-${section}`),
      parent: null,
      children: [],
      internal: {
        type: "NavigationJson",
        contentDigest: createContentDigest(sectionData),
      },
    })
  })

  // ── SocialJson ─────────────────────────────────────────────────────────────
  const socialData = hp.social || { items: [] }
  createNode({
    items: socialData.items || [],
    id: createNodeId("social-config"),
    parent: null,
    children: [],
    internal: {
      type: "SocialJson",
      contentDigest: createContentDigest(socialData),
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
    if (STATIC_PAGES.includes(pagePath)) return

    const template =
      category === "writing" ? blogPostTemplate : caseStudyTemplate

    createPage({
      path: pagePath,
      component: template,
      context: { id: node.id, slug: node.frontmatter.slug },
    })
  })
}
