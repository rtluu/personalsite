import React, { Fragment, useEffect, useCallback } from 'react';
import "../../styles/lightbox.scss";
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { setImageNumber, setVideoExpanded, useGlobalState, } from '../../state';
import HeroOpenRecord from "./images/HeroOpenRecord";
import OpenRecordDiscovery from "./images/OpenRecordDiscovery";
import OpenRecordUserInterviews from "./images/OpenRecordUserInterviews";
import OpenRecordTechnicalIA from "./images/OpenRecordTechnicalIA";
import OpenRecordCollectionFire from "./images/OpenRecordCollectionFire";
import OpenRecordCollectionMobile from "./images/OpenRecordCollectionMobile";
import OpenRecordLandingPage from "./images/OpenRecordLandingPage";
import OpenRecordWorkingDesign from "./images/OpenRecordWorkingDesign";
import OpenRecordLiveMobile from "./images/OpenRecordLiveMobile";
import OpenRecordHomepage from "./images/OpenRecordHomepage";
import OpenRecordFeedback from "./images/OpenRecordFeedback";
import OpenRecordAddSong from "./images/OpenRecordAddSong";
import OpenRecordMobileQueue from "./images/OpenRecordMobileQueue";
import Player from "../../components/Player/player";

const ALLOWED_KEYS = ['ArrowLeft', 'ArrowRight', 'Escape']

const Lightbox = (props) => {
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');
    const [videoExpanded, setVideoExpanded] = useGlobalState('videoExpanded');

    const closeLightbox = useCallback(async () => {
        setVideoExpanded(false);
        update(false);
    }, [videoExpanded])

    var currentImage = props.currentImage;

    const nextImage = useCallback(async () => {
        if (imageNumber === imageGallery) {
            setImageNumber(1);
        } else {
            setImageNumber(imageNumber + 1);
        }
    }, [videoExpanded])

    const prevImage = useCallback(async () => {
        if (imageNumber === 1) {
            setImageNumber(imageGallery);
        } else {
            setImageNumber(imageNumber - 1);
        }
    }, [videoExpanded])

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
                            <div className={`lightbox-image-wrapper ${currentImage === 1 | currentImage === 8 | currentImage === 12 ? "video-wrapper" : ""}`}>
                                {currentImage === 1 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><HeroOpenRecord /><Player ytid="558t8VG-zzw" /></div> : null}
                                {currentImage === 2 && (<OpenRecordDiscovery />)}
                                {currentImage === 3 && (<OpenRecordUserInterviews />)}
                                {currentImage === 4 && (<OpenRecordTechnicalIA />)}
                                {currentImage === 5 && (<OpenRecordLandingPage />)}
                                {currentImage === 6 && (<OpenRecordCollectionFire />)}
                                {currentImage === 7 && (<OpenRecordCollectionMobile />)}
                                {currentImage === 8 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><OpenRecordWorkingDesign /><Player ytid="ghqab6X17pE" /></div> : null}
                                {currentImage === 9 && (<OpenRecordLiveMobile />)}
                                {currentImage === 10 && (<OpenRecordHomepage />)}
                                {currentImage === 11 && (<OpenRecordFeedback />)}
                                {currentImage === 12 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><OpenRecordAddSong /><Player ytid="1PlqPOvsyA0" /></div> : null}
                                {currentImage === 13 && (<OpenRecordMobileQueue />)}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </Fragment>
    );
}

export default Lightbox