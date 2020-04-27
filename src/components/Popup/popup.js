import React from "react";
import { Link } from "gatsby";
import "./popup.scss";
import HumblePopup from "../Humble/images/HumblePopup";

const Popup = (props) => (
    <div className="popup-container">
        <div className="popup-inner">
            <div className="popup-media">
                <HumblePopup />
            </div>
            <div className="popup-text">
                <h6 className="popup-message">{props.text}</h6>
            </div>
        </div>
    </div>
)

export default Popup