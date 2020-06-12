import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import Player from "../../components/Player/player";
import HeroOLB from "./images/HeroOLB";
import OLBAccommodations from "./images/OLBAccommodations";
import OLBExpanded from "./images/OLBExpanded";
import OLBFooter from "./images/OLBFooter";
import OLBGrid from "./images/OLBGrid";
import OLBProposalPage from "./images/OLBProposalPage";
import OLBProposalSlides from "./images/OLBProposalSlides";
import OLBSchedule from "./images/OLBSchedule";


const LightboxImagesOLB = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    return (
        <div className={`${imageNumber === 5 | imageNumber === 6 ? "lightbox-video-wrapper" : "lightbox-image-wrapper"}`}>
            {imageNumber === 1 && (<HeroOLB />)}
            {imageNumber === 2 && (<OLBFooter />)}
            {imageNumber === 3 && (<OLBSchedule />)}
            {imageNumber === 4 && (<OLBAccommodations />)}
            {imageNumber === 5 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><OLBProposalPage /><Player ytid="kEwzQi0bgc4" /></div> : null}
            {imageNumber === 6 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><OLBProposalSlides /><Player ytid="EHQywvZ6ILc" /></div> : null}
            {imageNumber === 7 && (<OLBGrid />)}
            {imageNumber === 8 && (<OLBExpanded />)}
        </div>
    );
}

export default LightboxImagesOLB