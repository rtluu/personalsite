import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const JournalPopup = () => {
    const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "journaldaily/journal-popup.png" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return <Img fluid={data.imageSource.childImageSharp.fluid} objectFit="cover" />
}
export default JournalPopup;
