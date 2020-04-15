import React, { Component, Fragment } from 'react';
import Img from 'gatsby-image';
import "./lightbox.scss";
import CloseIcon from "./close-icon.inline.svg";

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
                <button
                    className="image-container"
                    key={imageSource.childImageSharp.fluid.src}
                    type="button"
                    onClick={() => this.setState({ showLightbox: true, selectedImage: imageSource })}
                >
                    <Img fluid={imageSource.childImageSharp.fluid} />
                </button>
                {showLightbox && (
                    <div className="lightbox">
                        <div className="lightbox-header">
                            <button className="icon close" type="button" onClick={() => this.setState({ showLightbox: false })}>
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="lightbox-item">
                            <div className="center-item">
                                <div className="image-inner">
                                    <Img fluid={selectedImage.childImageSharp.fluid} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Fragment>
        );
    }
}