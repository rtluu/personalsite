import { Link } from "gatsby";
import React, { useState } from "react";
import "./humble.scss";
import HeroHumble from "./images/HeroHumble";
import HumbleAbout from "./images/HumbleAbout";
import HumbleApproach from "./images/HumbleApproach";
import HumblePortfolio from "./images/HumblePortfolio";
import HumbleTeam from "./images/HumbleTeam";
import HumbleCTA from "./images/HumbleCTA";

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
                <span className="gallery">
                    <div className="gallery-outer-wrapper">
                        <div className="gallery-wrapper">
                            <div className="gallery-item-wrapper">
                                <HumbleAbout />
                            </div>
                            <div className="gallery-item-wrapper">
                                <HumbleApproach />
                            </div>
                            <div className="gallery-item-wrapper">
                                <HumblePortfolio />
                            </div>
                        </div>
                    </div>
                </span>
                <span className="gallery">
                    <div className="gallery-outer-wrapper second-gallery-row">
                        <div className="gallery-wrapper">
                            <div className="gallery-item-wrapper flex-humble-team">
                                <HumbleTeam />
                            </div>
                            <div className="gallery-item-wrapper flex-humble-cta">
                                <HumbleCTA />
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            <div className="template-section">
                <h2>Development</h2>
                <p>The website was build in Wordpress for ease of editing by the client with a significant amount of custom html and css to transform the original template into the accepted designs. It was my first experience building it Wordpress so I was learning on the fly, but it opened my eyes to the expansiveness of the Wordpress ecosystem and all the different plugins involved in creating a site on the platform.</p>
            </div>
            <div className="template-section">
                <h2>Reflection</h2>
                <p>This was my first client project and taught me a ton about managing the product development process with external stakeholders. Proactive communication works wonders in managing expectations and frequent updates makes sure everyone is on the same page throughout the process. Being clear about what blockers arise and when input is needed ensures the right prioritizations are made, leading to the right outcomes. I’m excited for the next client project and thankful for the opportunity to work with such a great organization.</p>
            </div>
        </div>
    )
}

export default Humble