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
            {imageNumber === 2 && (<AdHocVetsdotgov />)}
            {imageNumber === 3 && (<AdHocWBC />)}
            {imageNumber === 4 && (<AdHocIsolatedTeams />)}
            {imageNumber === 5 && (<AdHocResearchTeams />)}
            {imageNumber === 6 && (<AdHocHandbook />)}
            {imageNumber === 7 && (<AdHocDevDocs />)}
            {imageNumber === 8 && (<AdHocDesignSystem />)}
            {imageNumber === 9 && (<AdHocDigitalLifecycle />)}
            {imageNumber === 10 && (<AdHocChecklist />)}
            {imageNumber === 11 && (<AdHocResults />)}
            {imageNumber === 12 && (<AdHocContract />)}
        </div>
    );
}

export default LightboxImagesVumble