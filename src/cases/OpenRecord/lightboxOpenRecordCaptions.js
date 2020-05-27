import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsOpenRecord = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="hero collection" />)}
            {imageNumber === 2 && (<Caption caption="weekly slack thread" />)}
            {imageNumber === 3 && (<Caption caption="brainstorming development approaches" />)}
            {imageNumber === 4 && (<Caption caption="whiteboarding" />)}
            {imageNumber === 5 && (<Caption caption="homepage mock" />)}
            {imageNumber === 6 && (<Caption caption="collection mock" />)}
            {imageNumber === 7 && (<Caption caption="mobile mock" />)}
            {imageNumber === 8 && (<Caption caption="local version of collections" />)}
            {imageNumber === 9 && (<Caption caption="local mobile web" />)}
            {imageNumber === 10 && (<Caption caption="openrecord homepage" />)}
            {imageNumber === 11 && (<Caption caption="openrecord about" />)}
            {imageNumber === 12 && (<Caption caption="collection demo" />)}
            {imageNumber === 13 && (<Caption caption="collection mobile" />)}
        </div>
    );
}

export default LightboxCaptionsOpenRecord