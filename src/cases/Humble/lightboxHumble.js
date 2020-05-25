import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import HeroHumble from "./images/HeroHumble";
import HumbleAbout from "./images/HumbleAbout";
import HumbleApproach from "./images/HumbleApproach";
import HumblePortfolio from "./images/HumblePortfolio";
import HumbleTeam from "./images/HumbleTeam";
import HumbleCTA from "./images/HumbleCTA";

const LightboxImagesHumble = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-image-wrapper">
            {imageNumber === 1 && (<HeroHumble />)}
            {imageNumber === 2 && (<HumbleAbout />)}
            {imageNumber === 3 && (<HumbleApproach />)}
            {imageNumber === 4 && (<HumblePortfolio />)}
            {imageNumber === 5 && (<HumbleTeam />)}
            {imageNumber === 6 && (<HumbleCTA />)}
        </div>
    );
}

export default LightboxImagesHumble
