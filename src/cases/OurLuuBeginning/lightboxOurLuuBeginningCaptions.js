import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsOLB = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="hero banner" />)}
            {imageNumber === 2 && (<Caption caption="home footer" />)}
            {imageNumber === 3 && (<Caption caption="wedding-schedule" />)}
            {imageNumber === 4 && (<Caption caption="accomodations" />)}
            {imageNumber === 5 && (<Caption caption="proposal poem" />)}
            {imageNumber === 6 && (<Caption caption="proposal pics" />)}
            {imageNumber === 7 && (<Caption caption="image gallery" />)}
            {imageNumber === 8 && (<Caption caption="image expanded" />)}
        </div>
    );
}

export default LightboxCaptionsOLB