module.exports = {
  siteMetadata: {
    title: ``,
    description: `Hi, I'm Ryan. I'm a husband, a dog dad, and a Product Director at Yahoo. I enjoy helping people reach their potential and write about self growth.`,
    author: `Ryan Luu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: "G-F4453CL4QB",
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/personalsite-icon.png`,

      },
    },
  ],
}
