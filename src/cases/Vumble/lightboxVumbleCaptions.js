import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsVumble = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="hero homepage" />)}
            {imageNumber === 2 && (<Caption caption="youtube 2012" />)}
            {imageNumber === 3 && (<Caption caption="powerpoint prototype" />)}
            {imageNumber === 4 && (<Caption caption="first beta build" />)}
            {imageNumber === 5 && (<Caption caption="instant playback" />)}
            {imageNumber === 6 && (<Caption caption="reddit research" />)}
            {imageNumber === 7 && (<Caption caption="reddit tv shutdown" />)}
            {imageNumber === 8 && (<Caption caption="reddit infused vumble" />)}
            {imageNumber === 9 && (<Caption caption="mobile prototype" />)}
            {imageNumber === 10 && (<Caption caption="hover to play" />)}
            {imageNumber === 11 && (<Caption caption="async comments" />)}
            {imageNumber === 12 && (<Caption caption="left/right arrows" />)}
            {imageNumber === 13 && (<Caption caption="trim and post to subreddits" />)}
            {imageNumber === 14 && (<Caption caption="vumble v2" />)}
        </div>
    );
}

export default LightboxCaptionsVumble