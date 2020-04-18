import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import { lightboxActive, setImageSource, setImageNumber, setImageGallery, useGlobalState } from '../../../state';

const HumbleTeam = () => {
  const [value, update] = useGlobalState('lightboxActive');

  function openLightbox() {
    setImageSource(data.imageSource.childImageSharp.fluid);
    setImageNumber(5);
    setImageGallery(6);
    update(!value);
  }

  const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "humble/humble-team.png" }) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  return (
    <button
      className="image-button"
      key={data.imageSource.src}
      type="button"
      onClick={openLightbox}
    >
      <Img fluid={data.imageSource.childImageSharp.fluid} objectFit="cover" />
    </button>
  )
}
export default HumbleTeam;