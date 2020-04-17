import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Lightbox from '../../Lightbox/lightbox';

const HumbleCTA = () => {
  const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "humble/humble-cta.png" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  return <Lightbox imageSource={data.imageSource} />
}
export default HumbleCTA;