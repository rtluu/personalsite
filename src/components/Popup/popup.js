import React from "react";
import { Link } from "gatsby";
import "./popup.scss";
import HumblePopup from "../../cases/Humble/images/HumblePopup";
import FastropePopup from "../../cases/Fastrope/images/FastropePopup";

const Popup = (props) => (
    <div className="popup-container">
        <div className="popup-inner">
            <div className="popup-media">
                {props.imgsrc === "HumblePopup" && <HumblePopup />}
                {props.imgsrc === "FastropePopup" && <FastropePopup />}
            </div>
            <div className="popup-text">
                <h6 className="popup-message">{props.text}</h6>
            </div>
        </div>
    </div>
)

export default Popup