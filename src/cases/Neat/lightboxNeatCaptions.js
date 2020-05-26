import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsNeat = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="neat example" />)}
            {imageNumber === 2 && (<Caption caption="user interview" />)}
            {imageNumber === 3 && (<Caption caption="interaction mapping" />)}
            {imageNumber === 4 && (<Caption caption="wireframe list view" />)}
            {imageNumber === 5 && (<Caption caption="wireframe login" />)}
            {imageNumber === 6 && (<Caption caption="wireframe collection" />)}
            {imageNumber === 7 && (<Caption caption="grid" />)}
            {imageNumber === 8 && (<Caption caption="list view" />)}
            {imageNumber === 9 && (<Caption caption="mobile" />)}
            {imageNumber === 10 && (<Caption caption="add link to collection" />)}
            {imageNumber === 11 && (<Caption caption="embed rich media" />)}

        </div>
    );
}

export default LightboxCaptionsNeat