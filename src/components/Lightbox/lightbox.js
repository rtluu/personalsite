import React, { useState, Fragment } from 'react';
import Img from 'gatsby-image';
import "./lightbox.scss";
import CloseIcon from "./close-icon.inline.svg";
import BackIcon from "./back-icon.inline.svg";
import NextIcon from "./next-icon.inline.svg";
import { count, setCount, clearCount, countUp, countDown, useGlobalState } from '../../state';

const Lightbox = (props) => {
    const [value, update] = useGlobalState('count');

    const [showLightbox, setShowLightbox] = useState(false);
    const [selectedImage, setSelectedImage] = useState(undefined);

    var imageSource = props.imageSource.childImageSharp.fluid;
    var imageNumber = props.imageNumber;
    var galleryMax = props.galleryMax;

    function openLightbox() {
        setShowLightbox(true)
        setCount(imageNumber)
    }

    function closeLightbox() {
        setShowLightbox(false)
        clearCount()
    }

    var currentCount = value;
    console.log(galleryMax);

    return (
        <Fragment>
            <button
                className="image-button"
                key={imageSource.src}
                type="button"
                onClick={openLightbox}
            >
                <Img fluid={imageSource} />
            </button>
            {showLightbox && (
                <div className="lightbox" >
                    <div className="lightbox-header">
                        <button className="icon close" type="button" onClick={closeLightbox} >
                            <CloseIcon />
                        </button>
                        <div className="image-switch">
                            <button onClick={countDown}><BackIcon /></button>
                            <h5>{currentCount} of {galleryMax}</h5>
                            <button onClick={countUp}><NextIcon /></button>
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