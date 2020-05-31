import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import Player from "../../components/Player/player";
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

const LightboxImagesOpenRecord = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    return (
        <div className={`lightbox-image-wrapper ${imageNumber === 1 | imageNumber === 8 | imageNumber === 12 ? "video-wrapper" : ""}`}>
            {imageNumber === 1 && !videoExpanded ? <div className="media-box vert-openrecord-hero"><div className="loading-spinner" /><HeroOpenRecord /><Player ytid="558t8VG-zzw" /></div> : null}
            {imageNumber === 2 && (<OpenRecordDiscovery />)}
            {imageNumber === 3 && (<OpenRecordUserInterviews />)}
            {imageNumber === 4 && (<OpenRecordTechnicalIA />)}
            {imageNumber === 5 && (<OpenRecordLandingPage />)}
            {imageNumber === 6 && (<OpenRecordCollectionFire />)}
            {imageNumber === 7 && (<OpenRecordCollectionMobile />)}
            {imageNumber === 8 && !videoExpanded ? <div className="media-box vert-openrecord-working-design"><div className="loading-spinner" /><OpenRecordWorkingDesign /><Player ytid="ghqab6X17pE" /></div> : null}
            {imageNumber === 9 && (<OpenRecordLiveMobile />)}
            {imageNumber === 10 && (<OpenRecordHomepage />)}
            {imageNumber === 11 && (<OpenRecordFeedback />)}
            {imageNumber === 12 & !videoExpanded ? <div className="media-box vert-openrecord-add-song"><div className="loading-spinner" /><OpenRecordAddSong /><Player ytid="1PlqPOvsyA0" /></div> : null}
            {imageNumber === 13 && (<OpenRecordMobileQueue />)}
        </div>
    );
}

export default LightboxImagesOpenRecord