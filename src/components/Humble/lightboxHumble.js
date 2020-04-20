import React, { Fragment } from 'react';
import "../../styles/lightbox.scss";
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { nextNumber, resetNumber, prevNumber, galleryEnd, useGlobalState } from '../../state';

import HeroHumble from "./images/HeroHumble";
import HumbleAbout from "./images/HumbleAbout";
import HumbleApproach from "./images/HumbleApproach";
import HumblePortfolio from "./images/HumblePortfolio";
import HumbleTeam from "./images/HumbleTeam";
import HumbleCTA from "./images/HumbleCTA";

const Lightbox = (props) => {
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');

    function closeLightbox() {
        update(!value);
    }

    function nextImage() {
        if (imageNumber === imageGallery) {
            resetNumber();
        } else {
            nextNumber();
        }
    }
    function prevImage() {
        if (imageNumber === 1) {
            galleryEnd();
        } else {
            prevNumber();
        }
    }

    var currentImage = props.currentImage;

    return (
        <Fragment>
            <div className={`lightbox ${value ? "show" : ""}`} >
                <div className="invisible-close" onClick={closeLightbox} />
                <div className="lightbox-header">
                    <div className="gallery-arrows">
                        <button className="arrow" onClick={prevImage}><BackIcon /></button>
                        <h4 className="gallery-counter">{imageNumber} of {imageGallery}</h4>
                        <button className="arrow" onClick={nextImage}><NextIcon /></button>
                    </div>
                    <button className="icon close" type="button" onClick={closeLightbox} >
                        <CloseIcon />
                    </button>
                </div>
                <span className="lightbox-item">
                    <div className={`center-children ${value ? "show" : "hide"}`}>
                        <div>
                            <div className="lightbox-image-wrapper">
                                {currentImage === 1 && (<HeroHumble />)}
                                {currentImage === 2 && (<HumbleAbout />)}
                                {currentImage === 3 && (<HumbleApproach />)}
                                {currentImage === 4 && (<HumblePortfolio />)}
                                {currentImage === 5 && (<HumbleTeam />)}
                                {currentImage === 6 && (<HumbleCTA />)}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </Fragment>
    );
}

export default Lightbox