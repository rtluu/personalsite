import React, { Fragment } from 'react';
import "./lightbox.scss";
import CloseIcon from "./close-icon.inline.svg";
import BackIcon from "./back-icon.inline.svg";
import NextIcon from "./next-icon.inline.svg";
import { nextNumber, resetNumber, prevNumber, galleryEnd, useGlobalState } from '../../../state';

import HeroHumble from "../images/HeroHumble";
import HumbleAbout from "../images/HumbleAbout";
import HumbleApproach from "../images/HumbleApproach";
import HumblePortfolio from "../images/HumblePortfolio";
import HumbleTeam from "../images/HumbleTeam";
import HumbleCTA from "../images/HumbleCTA";

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
            {value && (
                <div className="lightbox" >
                    <div className="lightbox-header">
                        <button className="icon close" type="button" onClick={closeLightbox} >
                            <CloseIcon />
                        </button>
                        <div className="image-switch">
                            <button onClick={prevImage}><BackIcon /></button>
                            <h5>{imageNumber} of {imageGallery}</h5>
                            <button onClick={nextImage}><NextIcon /></button>
                        </div>
                    </div>
                    <span className="lightbox-item">
                        <div className="center-children">
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
            )}
        </Fragment>
    );
}

export default Lightbox