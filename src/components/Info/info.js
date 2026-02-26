import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./info.scss";
import InfoIcon from "../../icons/info-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";

import { useGlobalState } from '../../state';

function useInfoActive(ref) {
    const [infoOpen, infoSwitch] = useGlobalState('infoOpen');
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                infoSwitch(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const Info = () => {
    const [infoOpen, infoSwitch] = useGlobalState('infoOpen');
    const infoRef = useRef(null);
    useInfoActive(infoRef);

    const data = useStaticQuery(graphql`
        query {
            allSiteJson {
                nodes {
                    infoTitle
                    infoFamiliar
                    infoBuilt
                }
            }
        }
    `)

    const site = data.allSiteJson.nodes[0]

    return (
        <div ref={infoRef} className={`info-container ${infoOpen ? "show" : ""}`} >
            <button className='icon info-button' onClick={() => infoSwitch(!infoOpen)}>
                <InfoIcon />
                <Tooltip text='Site info' class='info-tip down-point right-side' />
            </button>

            <div className="info-inner">
                <h3 className="info-header">Site Info</h3>
                <div className="info-qa">
                    <h4 className="question">What is this?</h4>
                    <h5 className="answer">{site.infoTitle}</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">Why does this look familiar?</h4>
                    <h5 className="answer">{site.infoFamiliar}</h5>
                </div>
                <div className="info-qa">
                    <h4 className="question">How was it built?</h4>
                    <h5 className="answer">{site.infoBuilt}</h5>
                </div>
            </div>
        </div>
    )
}

export default Info
