import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const NeatWireframeListView = () => {
  const data = useStaticQuery(graphql`
      query {
        imageSource: file(relativePath: { eq: "neat/neat-wireframe-listview.png" }) {
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
export default NeatWireframeListView;
