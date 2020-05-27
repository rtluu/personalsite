import React from 'react';
import { useGlobalState } from '../../state';
import Headshot from "./images/Headshot";

const LightboxImagesAbout = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    return (
        <div className="lightbox-image-wrapper headshot">
            {imageNumber === 1 && (<Headshot />)}
        </div>
    );
}

export default LightboxImagesAbout