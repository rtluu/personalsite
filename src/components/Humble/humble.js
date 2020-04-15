import { Link } from "gatsby";
import React, { useState } from "react";
import "./humble.scss";
import HeroHumble from "./images/HeroHumble";
import HumbleAbout from "./images/HumbleAbout";
import HumbleApproach from "./images/HumbleApproach";
import HumblePortfolio from "./images/HumblePortfolio";

const Humble = () => {
    return (
        <div className="template-content">
            <h1>Humble Venture Capital</h1>
            <div className="template-section">
                <div className="hero">
                    <HeroHumble />
                </div>
                <div className="template-text-block">
                    <p><span className="bold-italic">Client: </span>Humble Venture Capital</p>
                    <p><span className="bold-italic">Role: </span>Design & Frontend</p>
                    <p><span className="bold-italic">Tools: </span>Sketch, Wordpress, HTML, CSS</p>
                    <p><span className="bold-italic">Timeline: </span>2016-2017</p>
                </div>
            </div>
            <div className="template-section">
                <h2>Objective</h2>
                <p>Design and build a website for a venture capital firm based in DC & NYC.</p>
            </div>
            <div className="template-section">
                <h2>Requirements</h2>
                <ul className="listtype-bullet listindent1" >
                    <li><p>Client must be able to edit the copy and replace images</p></li>
                    <li><p>Pages to include: Homepage, Investment Approach, Portfolio, Case Studies, Team, Contact</p></li>
                </ul>
            </div>
            <div className="template-section">
                <h2>Process</h2>
                <ol className="listtype-numbered" >
                    <li><p>Client interview and requirements gathering</p></li>
                    <li><p>Design mocks and review</p></li>
                    <li><p>Develop, deploy, feedback, adjust</p></li>
                    <li><p>Final delivery and asset transfer</p></li>
                </ol>
            </div>
            <div className="template-section">
                <h2>Design</h2>
                <p>The directive from the client was to leverage a space theme and bring a design unity across the different sections of the experience. Each one of the following blocks had a corresponding page that followed the overarching design pattern. I mocked the designs in sketch and shared them with the client in Invision throughout the design phase.</p>
                <div className="image-row three">
                    <HumbleAbout />
                    <HumbleApproach />
                    <HumblePortfolio />
                </div>
            </div>
        </div>
    )
}

export default Humble