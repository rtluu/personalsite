import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import Player from "../../components/Player/player";
import Map from "./images/Map";
import DeskCali from "./images/DeskCali";
import DeskChicago from "./images/DeskChicago";
import DeskMiami from "./images/DeskMiami";
import Posture from "./images/Posture";
import Packing from "./images/Packing";

const LightboxImagesWorkRemote = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    return (
        <div className="lightbox-image-wrapper">
            {imageNumber === 1 && (<Map />)}
            {imageNumber === 2 && (<DeskCali />)}
            {imageNumber === 3 && (<DeskChicago />)}
            {imageNumber === 4 && (<DeskMiami />)}
            {imageNumber === 5 && (<Posture />)}
            {imageNumber === 6 && (<Packing />)}
        </div>
    );
}

export default LightboxImagesWorkRemote