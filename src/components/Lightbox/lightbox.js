import React, { Fragment, useState, useEffect } from 'react';
import "../../styles/lightbox.scss";
import { useLocation } from "@reach/router"
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { setImageNumber, setVideoExpanded, useGlobalState, } from '../../state';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

import LightboxAbout from "../About/lightboxAbout";
import LightboxOLB from "../../cases/OurLuuBeginning/lightboxOurLuuBeginning";
import LightboxFastrope from "../../cases/Fastrope/lightboxFastrope";
import LightboxOpenRecord from "../../cases/OpenRecord/lightboxOpenRecord";
import LightboxNeat from "../../cases/Neat/lightboxNeat";
import LightboxHumble from "../../cases/Humble/lightboxHumble";


const ALLOWED_KEYS = ['ArrowLeft', 'ArrowRight', 'Escape']

const Lightbox = (props) => {
    const location = useLocation();
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');
    const [lightboxImages, setLightboxImages] = useState('about');

    function closeLightbox() {
        setVideoExpanded(false);
        update(!value);
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

    return (
        <Fragment>
            <div className={`lightbox ${value ? "show" : ""} ${isMobile ? "mobile" : ""}`} >
                <div className="invisible-close" onClick={closeLightbox} />
                <div className="lightbox-header">
                    <BrowserView>
                        <div className="web-button-box">
                            <button className="icon close" type="button" onClick={closeLightbox} >
                                <CloseIcon />
                            </button>
                            <div className="gallery-arrows">
                                <button className="arrow" onClick={prevImage}><BackIcon /></button>
                                <h4 className="gallery-counter">{imageNumber} of {imageGallery}</h4>
                                <button className="arrow" onClick={nextImage}><NextIcon /></button>
                            </div>
                        </div>
                    </BrowserView>
                </div>
                <span className="lightbox-item">
                    <div className="center-children">
                        {lightboxImages === "about" && <LightboxAbout />}
                        {lightboxImages === "ourluubeginning" && <LightboxOLB />}
                        {lightboxImages === "fastrope" && <LightboxFastrope />}
                        {lightboxImages === "openrecord" && <LightboxOpenRecord />}
                        {lightboxImages === "neat" && <LightboxNeat />}
                        {lightboxImages === "humble" && <LightboxHumble />}
                    </div>
                </span>
                <MobileView>
                    <div className="mobile-button-box">
                        <button className="icon close" type="button" onClick={closeLightbox} >
                            <CloseIcon />
                        </button>
                        <div className="gallery-arrows">
                            <button className="arrow" onClick={prevImage}><BackIcon /></button>
                            <h4 className="gallery-counter">{imageNumber} of {imageGallery}</h4>
                            <button className="arrow" onClick={nextImage}><NextIcon /></button>
                        </div>
                    </div>
                </MobileView>
            </div>
        </Fragment>
    );
}

export default Lightbox