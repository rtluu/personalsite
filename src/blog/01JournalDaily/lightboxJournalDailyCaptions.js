import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsJournalDaily = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="mind prism" />)}
            {imageNumber === 2 && (<Caption caption="treasure map" />)}
            {imageNumber === 3 && (<Caption caption="tiny gains" />)}
        </div>
    );
}

export default LightboxCaptionsJournalDaily