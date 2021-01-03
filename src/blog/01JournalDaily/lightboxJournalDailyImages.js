import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import Player from "../../components/Player/player";
import MindPrism from "./images/MindPrism";
import TreasureMap from "./images/TreasureMap";
import TinyGains from "./images/TinyGains";

const LightboxImagesJournalDaily = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    return (
        <div className="lightbox-image-wrapper">
            {imageNumber === 1 && (<MindPrism />)}
            {imageNumber === 2 && (<TreasureMap />)}
            {imageNumber === 3 && (<TinyGains />)}
        </div>
    );
}

export default LightboxImagesJournalDaily