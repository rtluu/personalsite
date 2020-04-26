import React from "react";
import "./tooltip.scss";

const Tooltip = (props) => (
    <div className={"tooltip " + props.class}>
        <div className="tooltip-body">
            <span className="tooltip-message">{props.text}</span>
        </div>
    </div>
)

export default Tooltip