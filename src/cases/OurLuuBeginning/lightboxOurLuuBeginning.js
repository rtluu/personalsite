import React, { Fragment, useEffect } from 'react';
import "../../styles/lightbox.scss";
import CloseIcon from "../../icons/close-icon.inline.svg";
import BackIcon from "../../icons/back-icon.inline.svg";
import NextIcon from "../../icons/next-icon.inline.svg";
import { setImageNumber, setVideoExpanded, useGlobalState, } from '../../state';
import HeroOLB from "./images/HeroOLB";
import OLBAccommodations from "./images/OLBAccommodations";
import OLBExpanded from "./images/OLBExpanded";
import OLBFooter from "./images/OLBFooter";
import OLBGrid from "./images/OLBGrid";
import OLBProposalPage from "./images/OLBProposalPage";
import OLBProposalSlides from "./images/OLBProposalSlides";
import OLBSchedule from "./images/OLBSchedule";
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
                            <div className={`lightbox-image-wrapper ${currentImage === 5 | currentImage === 6 ? "video-wrapper" : ""}`}>
                                {currentImage === 1 && (<HeroOLB />)}
                                {currentImage === 2 && (<OLBFooter />)}
                                {currentImage === 3 && (<OLBSchedule />)}
                                {currentImage === 4 && (<OLBAccommodations />)}
                                {currentImage === 5 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><OLBProposalPage /><Player ytid="kEwzQi0bgc4" /></div> : null}
                                {currentImage === 6 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><OLBProposalSlides /><Player ytid="EHQywvZ6ILc" /></div> : null}
                                {currentImage === 7 && (<OLBGrid />)}
                                {currentImage === 8 && (<OLBExpanded />)}
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </Fragment>
    );
}

export default Lightbox