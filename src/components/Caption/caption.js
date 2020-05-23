import React from "react";
import "./caption.scss";

const Caption = (props) => (
    <div className="caption">
        <h6 className="caption-text">{props.caption}</h6>
    </div>
)

export default Caption