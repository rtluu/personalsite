import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Lightbox from '../Lightbox/lightbox';

const HumbleAbout = () => {
  const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "humble/humble-about.png" }) {
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
export default HumbleAbout;