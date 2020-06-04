import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsAdHoc = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="hero adhoc" />)}
            {imageNumber === 2 && (<Caption caption="vets.gov" />)}
            {imageNumber === 3 && (<Caption caption="web brand consolidation" />)}
            {imageNumber === 4 && (<Caption caption="isolated va teams" />)}
            {imageNumber === 5 && (<Caption caption="va platform user groups" />)}
            {imageNumber === 6 && (<Caption caption="digital services handbook" />)}
            {imageNumber === 7 && (<Caption caption="developer docs" />)}
            {imageNumber === 8 && (<Caption caption="design system" />)}
            {imageNumber === 9 && (<Caption caption="product development lifecycle" />)}
            {imageNumber === 10 && (<Caption caption="support process" />)}
            {imageNumber === 11 && (<Caption caption="initial cohort of dev teams" />)}
            {imageNumber === 12 && (<Caption caption="platform contract proposal" />)}
        </div>
    );
}

export default LightboxCaptionsAdHoc