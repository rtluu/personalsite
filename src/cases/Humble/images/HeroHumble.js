import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const HeroHumble = () => {
  const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "humble/humble-hero.png" }) {
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
export default HeroHumble;
