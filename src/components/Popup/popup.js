import React, { useState, useEffect } from "react";
import "./popup.scss";
import HumblePopup from "../../cases/Humble/images/HumblePopup";
import HumblePopupLight from "../../cases/Humble/images/HumblePopupLight";
import FastropePopup from "../../cases/Fastrope/images/FastropePopup";
import FastropePopupLight from "../../cases/Fastrope/images/FastropePopupLight";
import OLBPopup from "../../cases/OurLuuBeginning/images/OLBPopup";
import OLBPopupLight from "../../cases/OurLuuBeginning/images/OLBPopupLight";
import NeatPopup from "../../cases/Neat/images/NeatPopup";
import NeatPopupLight from "../../cases/Neat/images/NeatPopupLight";
import OpenRecordPopup from "../../cases/OpenRecord/images/OpenRecordPopup";
import OpenRecordPopupLight from "../../cases/OpenRecord/images/OpenRecordPopupLight";


import { useGlobalState } from '../../state';

const Popup = (props) => {
    const [lightMode] = useGlobalState('lightMode');
    return (
        <div className="popup-container">
            <div className="popup-inner">
                <div className="popup-media">
                    {props.imgsrc === "HumblePopup" && [(lightMode ? <HumblePopupLight /> : <HumblePopup />)]}
                    {props.imgsrc === "FastropePopup" && [(lightMode ? <FastropePopupLight /> : <FastropePopup />)]}
                    {props.imgsrc === "OLBPopup" && [(lightMode ? <OLBPopupLight /> : <OLBPopup />)]}
                    {props.imgsrc === "NeatPopup" && [(lightMode ? <NeatPopupLight /> : <NeatPopup />)]}
                    {props.imgsrc === "OpenRecordPopup" && [(lightMode ? <OpenRecordPopupLight /> : <OpenRecordPopup />)]}
                </div>
                <div className="popup-text">
                    <h6 className="popup-message">{props.text}</h6>
                </div>
            </div>
        </div>
    )
}

export default Popup