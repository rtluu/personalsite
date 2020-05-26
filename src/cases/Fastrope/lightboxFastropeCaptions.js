import React from 'react';
import Caption from "../../components/Caption/caption";
import { useGlobalState } from '../../state';

const LightboxCaptionsFastrope = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-caption-wrapper">
            {imageNumber === 1 && (<Caption caption="hero fastrope" />)}
            {imageNumber === 2 && (<Caption caption="fastrope team" />)}
            {imageNumber === 3 && (<Caption caption="contact page" />)}
            {imageNumber === 4 && (<Caption caption="services" />)}
            {imageNumber === 5 && (<Caption caption="client work" />)}
        </div>
    );
}

export default LightboxCaptionsFastrope