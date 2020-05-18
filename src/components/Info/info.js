import React, { useState, useEffect, useRef } from "react";
import "./info.scss";
import InfoIcon from "../../icons/info-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";

import { useGlobalState, infoSwitch, infoOpen } from '../../state';

function useInfoActive(ref) {
    const [infoOpen, infoSwitch] = useGlobalState('infoOpen');
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log('info closed');
                infoSwitch(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Info = (props) => {
    const [infoOpen, infoSwitch] = useGlobalState('infoOpen');
    const infoRef = useRef(null);
    useInfoActive(infoRef);

    return (
        <div ref={infoRef} className={`info-container ${infoOpen ? "show" : ""}`} >
            <button className='icon info-button' onClick={() => infoSwitch(!infoOpen)}>
                <InfoIcon />
                <Tooltip text='Site info' class='info-tip down-point' />
            </button>

            <div className="info-inner">
                <h3 className="info-header">Site Info</h3>
                <div className="info-qa">
                    <h4 className="question">What is this?</h4>
                    <h5 className="answer">Ryan Luu's Portfolio & Blog</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">Why does this look familiar?</h4>
                    <h5 className="answer">The design and features are inspired by Dropbox Paper. It's my go to for organizing my ideas and documenting my process. I appreciate it's intuitive system for capturing and conveying info - so, I challenged myself to replicate that look and feel for my portfolio.</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">How was it built?</h4>
                    <h5 className="answer">It's built with React Hooks + Gatsby and includes some custom features like hovering over videos to initiate playback.</h5>
                </div>

                <div className="info-footer">
                    <h6 className="copyright">© {new Date().getFullYear()} Ryan Luu</h6>
                </div>
            </div>
        </div>
    )
}

export default Info


// onClick={() => setLightMode(!lightMode)}