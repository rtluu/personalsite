import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Lightbox from '../../Lightbox/lightbox';

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
  return <Lightbox imageSource={data.imageSource} imageNumber={1} galleryMax={6} />
}
export default HeroHumble;