import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsHumble = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="hero humble" />)}
            {imageNumber === 2 && (<Caption caption="about message" />)}
            {imageNumber === 3 && (<Caption caption="investment approach" />)}
            {imageNumber === 4 && (<Caption caption="portfolio companies" />)}
            {imageNumber === 5 && (<Caption caption="humble team" />)}
            {imageNumber === 6 && (<Caption caption="call to action" />)}
        </div>
    );
}

export default LightboxCaptionsHumble