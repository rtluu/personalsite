import React, { useState, useEffect, useRef } from "react";
import "./info.scss";
import InfoIcon from "../../icons/info-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";

import { useGlobalState, infoSwitch } from '../../state';

const Info = (props) => {

    const [infoOpen, infoSwitch] = useGlobalState('infoOpen');

    return (
        <div className={`info-container ${infoOpen ? "show" : ""}`}>
            <button className='icon info-button' onClick={() => infoSwitch(!infoOpen)}>
                <InfoIcon />
                <Tooltip text='Site info' class='info-tip down-point' />
            </button>

            <div className="info-inner">
                <div className="info-qa">
                    <h4 className="question">What is this?</h4>
                    <h5 className="answer">This is Ryan Luu's portfolio and blog.</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">Why does this look familiar?</h4>
                    <h5 className="answer">The design and features are inspired by Dropbox Paper. I use Paper daily to organize my process, so it felt fitting to convey my work in the format I actually use to document my thoughts.</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">What is it built with?</h4>
                    <h5 className="answer">It's built with Gatsby and React Hooks with some custom features like hovering on videos to start playback.</h5>
                </div>
            </div>
        </div>
    )
}

export default Info


// onClick={() => setLightMode(!lightMode)}