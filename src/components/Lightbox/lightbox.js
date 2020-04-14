import React, { Component, Fragment } from 'react';
import Img from 'gatsby-image';

import "./lightbox.scss";


export default class Lightbox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showLightbox: false,
            selectedImage: null,
        };


    }

    render() {
        const { imageSource } = this.props;
        const { selectedImage, showLightbox } = this.state;
        return (
            <Fragment>
                <div className="lightbox-container">
                    <button
                        className="preview-button"
                        key={imageSource.childImageSharp.fluid.src}
                        type="button"
                        onClick={() => this.setState({ showLightbox: true, selectedImage: imageSource })}
                    >
                        <Img fluid={imageSource.childImageSharp.fluid} />
                    </button>
                </div>
                {showLightbox && (
                    <div>
                        <Img fluid={selectedImage.childImageSharp.fluid} />
                        <button type="button" onClick={() => this.setState({ showLightbox: false })}>
                            Close
          </button>
                    </div>
                )}
            </Fragment>
        );
    }
}