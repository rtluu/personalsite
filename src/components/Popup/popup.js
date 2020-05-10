import React, { useState, useEffect } from "react";
import "./popup.scss";
import HumblePopup from "../../cases/Humble/images/HumblePopup";
import HumblePopupLight from "../../cases/Humble/images/HumblePopupLight";
import FastropePopup from "../../cases/Fastrope/images/FastropePopup";
import FastropePopupLight from "../../cases/Fastrope/images/FastropePopupLight";
import OLBPopup from "../../cases/OurLuuBeginning/images/OLBPopup";
import OLBPopupLight from "../../cases/OurLuuBeginning/images/OLBPopupLight";

import { useGlobalState } from '../../state';

const Popup = (props) => {
    const [lightMode] = useGlobalState('lightMode');
    return(
        <div className="popup-container">
        <div className="popup-inner">
            <div className="popup-media">
                {props.imgsrc === "HumblePopup" && [ (lightMode ? <HumblePopupLight/> : <HumblePopup />)]} 
                {props.imgsrc === "FastropePopup" && [ (lightMode ? <FastropePopupLight/> : <FastropePopup />)]}
                {props.imgsrc === "OLBPopup" && [ (lightMode ? <OLBPopupLight/> : <OLBPopup />)]}
            </div>
            <div className="popup-text">
                <h6 className="popup-message">{props.text}</h6>
            </div>
        </div>
    </div>
    )
}

export default Popup