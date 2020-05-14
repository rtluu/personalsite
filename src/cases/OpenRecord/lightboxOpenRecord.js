import React, { Fragment, useEffect } from 'react';
import "../../styles/lightbox.scss";
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { setImageNumber, setVideoExpanded, useGlobalState, } from '../../state';
import HeroOpenRecord from "./images/HeroOpenRecord";
import OpenRecordDiscovery from "./images/OpenRecordDiscovery";
import OpenRecordUserInterviews from "./images/OpenRecordUserInterviews";
import OpenRecordTechnicalIA from "./images/OpenRecordTechnicalIA";
import Player from "../../components/Player/player";

const ALLOWED_KEYS = ['ArrowLeft', 'ArrowRight', 'Escape']

const Lightbox = (props) => {
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [imageGallery] = useGlobalState('imageGallery');
    const [videoExpanded] = useGlobalState('videoExpanded');

    function closeLightbox() {
        setVideoExpanded(false);
        update(!value);
    }

    var currentImage = props.currentImage;

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
                            <div className={`lightbox-image-wrapper ${currentImage === 1 | currentImage === 10 | currentImage === 11 ? "video-wrapper" : ""}`}>
                                {currentImage === 1 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><HeroOpenRecord /><Player ytid="558t8VG-zzw" /></div> : null}
                                {currentImage === 2 && (<OpenRecordDiscovery />)}
                                {currentImage === 3 && (<OpenRecordUserInterviews />)}
                                {currentImage === 4 && (<OpenRecordTechnicalIA />)}
                                {/* {currentImage === 5 && (<NeatWireframeLogin />)}
                                {currentImage === 6 && (<NeatWireframeMobile />)}
                                {currentImage === 7 && (<NeatGrid />)}
                                {currentImage === 8 && (<NeatListView />)}
                                {currentImage === 9 && (<NeatMobile />)}
                                {currentImage === 10 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><NeatAddLink /><Player ytid="Royezt5RYpw" /></div> : null}
                                {currentImage === 11 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><NeatEmbed /><Player ytid="HW5FpK13uzg" /></div> : null} */}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </Fragment>
    );
}

export default Lightbox