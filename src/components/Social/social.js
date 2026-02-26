import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./social.scss";
import WebIcon from "../../icons/web-icon.inline.svg";
import TwitterIcon from "../../icons/twitter-icon.inline.svg";
import LinkedinIcon from "../../icons/linkedin-icon.inline.svg";
import GithubIcon from "../../icons/github-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";

import { useGlobalState } from '../../state';

const platformIcons = {
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    github: GithubIcon,
}

function useSocialActive(ref) {
    const [socialOpen, socialSwitch] = useGlobalState('socialOpen');
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                socialSwitch(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Social = () => {
    const [socialOpen, socialSwitch] = useGlobalState('socialOpen');
    const socialRef = useRef(null);
    useSocialActive(socialRef);

    const data = useStaticQuery(graphql`
        query {
            allSocialJson {
                nodes {
                    platform
                    label
                    url
                }
            }
        }
    `)

    const links = data.allSocialJson.nodes

    return (
        <div ref={socialRef} className={`social-container ${socialOpen ? "show" : ""}`}>
            <button className='icon social-button' onClick={() => socialSwitch(!socialOpen)}>
                <WebIcon />
                <Tooltip text='Web links' class='social-tip down-point left-side' />
            </button>

            <div className="social-inner">
                <h3 className="social-header">Web Links</h3>
                <ul className="social-list">
                    {links.map(link => {
                        const Icon = platformIcons[link.platform]
                        return (
                            <a href={link.url} key={link.platform}>
                                <li>
                                    <span className="social-icon">{Icon && <Icon />}</span>
                                    <h5>{link.label}</h5>
                                </li>
                            </a>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Social
