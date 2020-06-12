import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import Player from "../../components/Player/player";
import HeroNeat from "./images/HeroNeat";
import NeatAddLink from "./images/NeatAddLink";
import NeatEmbed from "./images/NeatEmbed";
import NeatGrid from "./images/NeatGrid";
import NeatListView from "./images/NeatListView";
import NeatMobile from "./images/NeatMobile";
import NeatUserFlow from "./images/NeatUserFlow";
import NeatUserInterview from "./images/NeatUserInterview";
import NeatWireframeListView from "./images/NeatWireframeListView";
import NeatWireframeLogin from "./images/NeatWireframeLogin";
import NeatWireframeMobile from "./images/NeatWireframeMobile";

const LightboxImagesNeat = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    return (
        <div className={`${imageNumber === 1 | imageNumber === 10 | imageNumber === 11 ? "lightbox-video-wrapper" : "lightbox-image-wrapper"}`}>
            {imageNumber === 1 && !videoExpanded ? <div className="media-box vert-neat-hero"><div className="loading-spinner" /><HeroNeat /><Player ytid="XkhYtBU0GSo" /></div> : null}
            {imageNumber === 2 && (<NeatUserInterview />)}
            {imageNumber === 3 && (<NeatUserFlow />)}
            {imageNumber === 4 && (<NeatWireframeListView />)}
            {imageNumber === 5 && (<NeatWireframeLogin />)}
            {imageNumber === 6 && (<NeatWireframeMobile />)}
            {imageNumber === 7 && (<NeatGrid />)}
            {imageNumber === 8 && (<NeatListView />)}
            {imageNumber === 9 && (<NeatMobile />)}
            {imageNumber === 10 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><NeatAddLink /><Player ytid="Royezt5RYpw" /></div> : null}
            {imageNumber === 11 & !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><NeatEmbed /><Player ytid="HW5FpK13uzg" /></div> : null}
        </div>
    );
}

export default LightboxImagesNeat