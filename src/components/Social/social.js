import React, { useState, useEffect, useRef } from "react";
import "./social.scss";
import SocialIcon from "../../icons/web-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";

import { useGlobalState, socialSwitch, socialOpen } from '../../state';

function useSocialActive(ref) {
    const [socialOpen, socialSwitch] = useGlobalState('socialOpen');
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log('social closed');
                socialSwitch(false);
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

const Social = () => {
    const [socialOpen, socialSwitch] = useGlobalState('socialOpen');
    const socialRef = useRef(null);
    useSocialActive(socialRef);

    return (
        <div ref={socialRef} className={`social-container ${socialOpen ? "show" : ""}`}>
            <button className='icon social-button' onClick={() => socialSwitch(!socialOpen)}>
                <SocialIcon />
                <Tooltip text='Web links' class='social-tip down-point left-side' />
            </button>

            <div className="social-inner">
                <h3 className="social-header">Web Links</h3>
                <div className="info-qa">
                    <h4 className="question">What is this?</h4>
                    <h5 className="answer">Ryan Luu's Portfolio & Blog</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">Why does this look familiar?</h4>
                    <h5 className="answer">The design mimics Dropbox Paper. It's what I use to organize my daily process, so I thought it would be a fun challenge to recreate it's ux from scatch for my personal site.</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">How was it built?</h4>
                    <h5 className="answer">This site was custom coded with React Hooks and Gatsby. I included a few unique features that I enjoy, like hovering over videos to initiate playback.</h5>
                </div>
            </div>
        </div>
    )
}

export default Social