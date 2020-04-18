import React, { useState, Fragment } from 'react';
import Img from 'gatsby-image';
import "./lightbox.scss";
import CloseIcon from "./close-icon.inline.svg";
import BackIcon from "./back-icon.inline.svg";
import NextIcon from "./next-icon.inline.svg";
import { lightboxActive, imageSource, nextNumber, nextSource, useGlobalState } from '../../state';

const Lightbox = () => {
    const [value, update] = useGlobalState('lightboxActive');
    const [imageSource] = useGlobalState('imageSource');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');

    function closeLightbox() {
        update(!value);
    }

    function nextImage() {
        nextNumber();
        nextSource();
    }

    console.log(imageNumber);

    return (
        <Fragment>
            {value && (
                <div className="lightbox" >
                    <div className="lightbox-header">
                        <button className="icon close" type="button" onClick={closeLightbox} >
                            <CloseIcon />
                        </button>
                        <div className="image-switch">
                            <button ><BackIcon /></button>
                            <h5>{imageNumber} of {imageGallery}</h5>
                            <button onClick={nextImage}><NextIcon /></button>
                        </div>
                    </div>
                    <span className="lightbox-item">
                        <div className="center-children">
                            <div>
                                <div className="lightbox-image-wrapper">
                                    <Img fluid={imageSource} />
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            )}
        </Fragment>
    );
}

export default Lightbox