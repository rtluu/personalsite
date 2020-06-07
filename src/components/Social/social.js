import React, { useState, useEffect, useRef } from "react";
import "./social.scss";
import WebIcon from "../../icons/web-icon.inline.svg";
import TwitterIcon from "../../icons/twitter-icon.inline.svg";
import LinkedinIcon from "../../icons/linkedin-icon.inline.svg";
import GithubIcon from "../../icons/github-icon.inline.svg";
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
                <WebIcon />
                <Tooltip text='Web links' class='social-tip down-point left-side' />
            </button>

            <div className="social-inner">
                <h3 className="social-header">Web Links</h3>
                <ul className="social-list">
                    <a href="https://twitter.com/rtluu">
                        <li className="" >
                            <span className="social-icon"><TwitterIcon /></span>
                            <h5>Twitter</h5>
                        </li>
                    </a>
                    <a href="https://linkedin.com/in/ryanluu">
                        <li className="">
                            <span className="social-icon"><LinkedinIcon /></span>
                            <h5>LinkedIn</h5>
                        </li>
                    </a>
                    <a href="https://github.com/rtluu">
                        <li className="">
                            <span className="social-icon"><GithubIcon /></span>
                            <h5>Github</h5>
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Social