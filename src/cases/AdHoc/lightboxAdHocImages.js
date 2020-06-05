import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import Player from "../../components/Player/player";
import HeroAdHoc from "./images/HeroAdHoc";
import AdHocChecklist from "./images/AdHocChecklist";
import AdHocContract from "./images/AdHocContract";
import AdHocDesignSystem from "./images/AdHocDesignSystem";
import AdHocDigitalLifecycle from "./images/AdHocDigitalLifecycle";
import AdHocDevDocs from "./images/AdHocDevDocs";
import AdHocHandbook from "./images/AdHocHandbook";
import AdHocIsolatedTeams from "./images/AdHocIsolatedTeams";
import AdHocResearchTeams from "./images/AdHocResearchTeams";
import AdHocResults from "./images/AdHocResults";
import AdHocVeterans from "./images/AdHocVeterans";
import AdHocVetsdotgov from "./images/AdHocVetsgov";
import AdHocWBC from "./images/AdHocWBC";

const LightboxImagesVumble = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    return (
        <div className={`lightbox-image-wrapper ${imageNumber === 1 ? "video-wrapper" : ""}`}>
            {imageNumber === 1 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><HeroAdHoc /><Player ytid="FcSqajktRFw" /></div> : null}
            {imageNumber === 2 && (<div className="media-box image-box"><AdHocVetsdotgov /></div>)}
            {imageNumber === 3 && (<div className="media-box image-box"><AdHocWBC /></div>)}
            {imageNumber === 4 && (<div className="media-box image-box"><AdHocIsolatedTeams /></div>)}
            {imageNumber === 5 && (<div className="media-box image-box"><AdHocResearchTeams /></div>)}
            {imageNumber === 6 && (<div className="media-box image-box"><AdHocHandbook /></div>)}
            {imageNumber === 7 && (<div className="media-box image-box"><AdHocDevDocs /></div>)}
            {imageNumber === 8 && (<div className="media-box image-box"><AdHocDesignSystem /></div>)}
            {imageNumber === 9 && (<div className="media-box image-box"><AdHocDigitalLifecycle /></div>)}
            {imageNumber === 10 && (<div className="media-box image-box"><AdHocChecklist /></div>)}
            {imageNumber === 11 && (<div className="media-box image-box"><AdHocResults /></div>)}
            {imageNumber === 12 && (<div className="media-box image-box"><AdHocContract /></div>)}
        </div>
    );
}

export default LightboxImagesVumble