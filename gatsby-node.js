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
