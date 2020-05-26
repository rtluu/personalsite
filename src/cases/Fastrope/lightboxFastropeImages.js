import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import HeroFastrope from "./images/HeroFastrope";
import FastropeContact from "./images/FastropeContact";
import FastropePortfolio from "./images/FastropePortfolio";
import FastropeServices from "./images/FastropeServices";
import FastropeTeam from "./images/FastropeTeam";


const LightboxImagesFastrope = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-image-wrapper">
            {imageNumber === 1 && (<HeroFastrope />)}
            {imageNumber === 2 && (<FastropeTeam />)}
            {imageNumber === 3 && (<FastropeContact />)}
            {imageNumber === 4 && (<FastropeServices />)}
            {imageNumber === 5 && (<FastropePortfolio />)}
        </div>
    );
}

export default LightboxImagesFastrope