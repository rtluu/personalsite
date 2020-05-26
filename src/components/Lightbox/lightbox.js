import React, { Fragment, useState, useEffect, useLayoutEffect } from 'react';
import "./lightbox.scss";
import { useLocation } from "@reach/router"
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { setImageNumber, setVideoExpanded, useGlobalState, } from '../../state';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

import LightboxAboutImages from "../About/lightboxAboutImages";
import LightboxAboutCaptions from "../About/lightboxAboutCaptions";
import LightboxOLBImages from "../../cases/OurLuuBeginning/lightboxOurLuuBeginningImages";
import LightboxOLBCaptions from "../../cases/OurLuuBeginning/lightboxOurLuuBeginningCaptions";
import LightboxFastropeImages from "../../cases/Fastrope/lightboxFastropeImages";
import LightboxFastropeCaptions from "../../cases/Fastrope/lightboxFastropeCaptions";
import LightboxOpenRecordImages from "../../cases/OpenRecord/lightboxOpenRecordImages";
import LightboxOpenRecordCaptions from "../../cases/OpenRecord/lightboxOpenRecordCaptions";
import LightboxNeatImages from "../../cases/Neat/lightboxNeatImages";
import LightboxNeatCaptions from "../../cases/Neat/lightboxNeatCaptions";
import LightboxHumbleImages from "../../cases/Humble/lightboxHumbleImages";
import LightboxHumbleCaptions from "../../cases/Humble/lightboxHumbleCaptions";


const ALLOWED_KEYS = ['ArrowLeft', 'ArrowRight', 'Escape']

const Lightbox = (props) => {
    const location = useLocation();
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');
    const [lightboxImages, setLightboxImages] = useState('about');

    function closeLightbox() {
        setVideoExpanded(false);
        update(false);
    }

    function nextImage() {
        setVideoExpanded(false);
        if (imageNumber === imageGallery) {
            setImageNumber(1);
        } else {
            setImageNumber(imageNumber + 1);
        }
    }
    function prevImage() {
        setVideoExpanded(false);
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

    useEffect(() => {
        if (location.pathname === "/") {
            setLightboxImages('about');
        } else if (location.pathname === "/ourluubeginning/") {
            setLightboxImages('ourluubeginning');
        } else if (location.pathname === "/fastropelabs/") {
            setLightboxImages('fastrope');
        } else if (location.pathname === "/humblevc/") {
            setLightboxImages('humble');
        } else if (location.pathname === "/neat/") {
            setLightboxImages('neat');
        } else if (location.pathname === "/openrecord/") {
            setLightboxImages('openrecord');
        }

    }, [])

    // Hook
    useLayoutEffect(() => {
        if (value) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    }, [value]); // Empty array ensures effect is only run on mount and unmount


    return (
        <Fragment>
            {value &&
                <div className={`lightbox ${value ? "show" : "hide"} ${isMobile ? "mobile" : ""}`} >
                    <div className="invisible-close" onClick={closeLightbox} />
                    <div className="lightbox-header">
                        <button className="icon close" type="button" onClick={closeLightbox} >
                            <CloseIcon />
                        </button>
                        <div className="browser-arrow-box">
                            <div className="gallery-arrows">
                                <button className="arrow" onClick={prevImage}><BackIcon /></button>
                                <h4 className="gallery-counter">{imageNumber} of {imageGallery}</h4>
                                <button className="arrow" onClick={nextImage}><NextIcon /></button>
                            </div>
                        </div>
                        {lightboxImages === "about" && <LightboxAboutCaptions />}
                        {lightboxImages === "ourluubeginning" && <LightboxOLBCaptions />}
                        {lightboxImages === "fastrope" && <LightboxFastropeCaptions />}
                        {lightboxImages === "openrecord" && <LightboxOpenRecordCaptions />}
                        {lightboxImages === "neat" && <LightboxNeatCaptions />}
                        {lightboxImages === "humble" && <LightboxHumbleCaptions />}
                    </div>
                    <span className="lightbox-item">
                        <div className="center-children">
                            {lightboxImages === "about" && <LightboxAboutImages />}
                            {lightboxImages === "ourluubeginning" && <LightboxOLBImages />}
                            {lightboxImages === "fastrope" && <LightboxFastropeImages />}
                            {lightboxImages === "openrecord" && <LightboxOpenRecordImages />}
                            {lightboxImages === "neat" && <LightboxNeatImages />}
                            {lightboxImages === "humble" && <LightboxHumbleImages />}
                        </div>
                    </span>
                    <div className="mobile-arrow-box">
                        <div className="gallery-arrows">
                            <button className="arrow" onClick={prevImage}><BackIcon /></button>
                            <h4 className="gallery-counter">{imageNumber} of {imageGallery}</h4>
                            <button className="arrow" onClick={nextImage}><NextIcon /></button>
                        </div>
                    </div>
                </div>
            }

        </Fragment>
    );
}

export default Lightbox