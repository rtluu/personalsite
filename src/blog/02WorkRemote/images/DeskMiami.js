import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const DeskMiami = () => {
    const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "workremote/desk-miami.png" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return <Img fluid={data.imageSource.childImageSharp.fluid} objectFit="cover" />
}
export default DeskMiami;