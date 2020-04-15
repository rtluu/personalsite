import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Lightbox from '../../Lightbox/lightbox';

const HumblePortfolio = () => {
    const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "humble/humble-portfolio.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
    return <Lightbox imageSource={data.imageSource} />
}
export default HumblePortfolio;