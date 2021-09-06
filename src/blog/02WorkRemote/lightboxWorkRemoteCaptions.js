import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsWorkRemote = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="our cross-country route" />)}
            {imageNumber === 2 && (<Caption caption="cali setup" />)}
            {imageNumber === 3 && (<Caption caption="chicago setup" />)}
            {imageNumber === 4 && (<Caption caption="miami setup" />)}
            {imageNumber === 5 && (<Caption caption="posture comparison" />)}
            {imageNumber === 6 && (<Caption caption="packing for our transition between denver & chicago" />)}
        </div>
    );
}

export default LightboxCaptionsWorkRemote