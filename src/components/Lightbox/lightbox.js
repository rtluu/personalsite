import React, { Fragment, useState, useEffect, useCallback, useLayoutEffect } from 'react';
import "./lightbox.scss";
import { useLocation } from "@reach/router"
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { setImageNumber, useGlobalState, } from '../../state';
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
import LightboxVumbleImages from "../../cases/Vumble/lightboxVumbleImages";
import LightboxVumbleCaptions from "../../cases/Vumble/lightboxVumbleCaptions";
import LightboxAdHocImages from "../../cases/AdHoc/lightboxAdHocImages";
import LightboxAdHocCaptions from "../../cases/AdHoc/lightboxAdHocCaptions";
import LightboxJournalDailyImages from "../../blog/01JournalDaily/lightboxJournalDailyImages";
import LightboxJournalDailyCaptions from "../../blog/01JournalDaily/lightboxJournalDailyCaptions";
import LightboxWorkRemoteImages from "../../blog/02WorkRemote/lightboxWorkRemoteImages";
import LightboxWorkRemoteCaptions from "../../blog/02WorkRemote/lightboxWorkRemoteCaptions";


const ALLOWED_KEYS = ['ArrowLeft', 'ArrowRight', 'Escape']

const Lightbox = (props) => {
    const location = useLocation();
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');
    const [videoExpanded, setVideoExpanded] = useGlobalState('videoExpanded');
    const [lightboxImages, setLightboxImages] = useState('about');
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    function closeLightbox() {
        setVideoExpanded(false);
        update(false);
        setImageNumber(1);
    }

    const nextImage = useCallback(() => {
        forceUpdate;
        if (imageNumber === imageGallery) {
            setImageNumber(1);
        } else {
            setImageNumber(imageNumber + 1);
        }
    }, [imageNumber]);

    const prevImage = useCallback(() => {
        forceUpdate;
        if (imageNumber === 1) {
            setImageNumber(imageGallery);
        } else {
            setImageNumber(imageNumber - 1);
        }
    }, [imageNumber]);

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
        } else if (location.pathname === "/vumble/") {
            setLightboxImages('vumble');
        } else if (location.pathname === "/adhoc/") {
            setLightboxImages('adhoc');
        } else if (location.pathname === "/journaldaily/") {
            setLightboxImages('journaldaily');
        } else if (location.pathname === "/remotework/") {
            setLightboxImages('remotework');
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
                                <button className="arrow" onClick={() => { setVideoExpanded(false); prevImage() }} ><BackIcon /></button>
                                <h4 className="gallery-counter">{imageNumber} of {imageGallery}</h4>
                                <button className="arrow" onClick={() => { setVideoExpanded(false); nextImage() }}><NextIcon /></button>
                            </div>
                        </div>
                        {lightboxImages === "about" && <LightboxAboutCaptions />}
                        {lightboxImages === "ourluubeginning" && <LightboxOLBCaptions />}
                        {lightboxImages === "fastrope" && <LightboxFastropeCaptions />}
                        {lightboxImages === "openrecord" && <LightboxOpenRecordCaptions />}
                        {lightboxImages === "neat" && <LightboxNeatCaptions />}
                        {lightboxImages === "humble" && <LightboxHumbleCaptions />}
                        {lightboxImages === "vumble" && <LightboxVumbleCaptions />}
                        {lightboxImages === "adhoc" && <LightboxAdHocCaptions />}
                        {lightboxImages === "journaldaily" && <LightboxJournalDailyCaptions />}
                        {lightboxImages === "remotework" && <LightboxWorkRemoteCaptions />}
                    </div>
                    <span className="lightbox-item">
                        <div className="center-children">
                            {lightboxImages === "about" && <LightboxAboutImages />}
                            {lightboxImages === "ourluubeginning" && <LightboxOLBImages />}
                            {lightboxImages === "fastrope" && <LightboxFastropeImages />}
                            {lightboxImages === "openrecord" && <LightboxOpenRecordImages />}
                            {lightboxImages === "neat" && <LightboxNeatImages />}
                            {lightboxImages === "humble" && <LightboxHumbleImages />}
                            {lightboxImages === "vumble" && <LightboxVumbleImages />}
                            {lightboxImages === "adhoc" && <LightboxAdHocImages />}
                            {lightboxImages === "journaldaily" && <LightboxJournalDailyImages />}
                            {lightboxImages === "remotework" && <LightboxWorkRemoteImages />}
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