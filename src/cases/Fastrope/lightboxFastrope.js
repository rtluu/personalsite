import React, { Fragment, useEffect } from 'react';
import "../../styles/lightbox.scss";
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { setImageNumber, useGlobalState, } from '../../state';
import HeroFastrope from "./images/HeroFastrope";
import FastropeContact from "./images/FastropeContact";
import FastropePortfolio from "./images/FastropePortfolio";
import FastropeServices from "./images/FastropeServices";
import FastropeTeam from "./images/FastropeTeam";

const ALLOWED_KEYS = ['ArrowLeft', 'ArrowRight', 'Escape']

const Lightbox = (props) => {
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');

    function closeLightbox() {
        update(!value);
    }

    var currentImage = props.currentImage;

    function nextImage() {
        if (imageNumber === imageGallery) {
            setImageNumber(1);
        } else {
            setImageNumber(imageNumber + 1);
        }
    }
    function prevImage() {
        if (imageNumber === 1) {
            setImageNumber(imageGallery);
        } else {
            setImageNumber(imageNumber - 1);
        }
    }

    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === "ArrowRight") {
                nextImage();
            } else if (event.key === "ArrowLeft") {
                prevImage();
            } else if (event.key === "Escape") {
                closeLightbox();
            }
        };
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [imageNumber])

    return (
        <Fragment>
            <div className={`lightbox ${value ? "show" : ""}`} >
                <div className="invisible-close" onClick={closeLightbox} />
                <div className="lightbox-header">
                    <button className="icon close" type="button" onClick={closeLightbox} >
                        <CloseIcon />
                    </button>
                    <div className="gallery-arrows">
                        <button className="arrow" onClick={prevImage}><BackIcon /></button>
                        <h4 className="gallery-counter">{imageNumber} of {imageGallery}</h4>
                        <button className="arrow" onClick={nextImage}><NextIcon /></button>
                    </div>
                </div>
                <span className="lightbox-item">
                    <div className={`center-children ${value ? "show" : "hide"}`}>
                        <div>
                            <div className="lightbox-image-wrapper">
                                {currentImage === 1 && (<HeroFastrope />)}
                                {currentImage === 2 && (<FastropeTeam />)}
                                {currentImage === 3 && (<FastropeContact />)}
                                {currentImage === 4 && (<FastropeServices />)}
                                {currentImage === 5 && (<FastropePortfolio />)}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </Fragment>
    );
}

export default Lightbox