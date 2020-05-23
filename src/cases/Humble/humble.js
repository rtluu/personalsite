import React, { useState } from "react";
import { Link } from "gatsby";
import Lightbox from "./lightboxHumble"
import HeroHumble from "./images/HeroHumble";
import HumbleAbout from "./images/HumbleAbout";
import HumbleApproach from "./images/HumbleApproach";
import HumblePortfolio from "./images/HumblePortfolio";
import HumbleTeam from "./images/HumbleTeam";
import HumbleCTA from "./images/HumbleCTA";
import HumbleAnchors from "./anchorsHumble";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import Caption from "../../components/Caption/caption";
import Popup from "../../components/Popup/popup";
import { setImageNumber, setImageGallery, useGlobalState } from '../../state';


const Humble = () => {
    //Lightbox - Humble
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(6);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); }
    function openLightbox6() { setImageNumber(6); update(!value); }

    //Collapse - Humble
    const [objectiveCollapsed, setObjectiveCollapsed] = useState(false);
    const [requirementsCollapsed, setRequirementsCollapsed] = useState(false);
    const [processCollapsed, setProcessCollapsed] = useState(false);
    const [designCollapsed, setDesignCollapsed] = useState(false);
    const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    const [reflectionCollapsed, setReflectionCollapsed] = useState(false);

    return (
        <div className="template-content">
            <Lightbox currentImage={imageNumber} />
            <HumbleAnchors />
            <h1 id="humblevc">Humble Venture Capital</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button" type="button">
                        <HeroHumble />
                    </button>
                </div>
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p><span className="bold-italic">Client: </span>Humble Venture Capital</p>
                        <p><span className="bold-italic">Role: </span>Design & Frontend</p>
                        <p><span className="bold-italic">Tools: </span>Sketch, Wordpress, HTML, CSS</p>
                        <p><span className="bold-italic">Timeline: </span>2016-2017</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${objectiveCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setObjectiveCollapsed(!objectiveCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="objective">Objective</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Design and build a website for a venture capital firm based in DC & NYC.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${requirementsCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setRequirementsCollapsed(!requirementsCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="requirements">Requirements</h2>
                    </div>
                    <div className="template-text-body">
                        <ul className="listtype-bullet listindent1" >
                            <li><p>Client must be able to edit the copy and replace images</p></li>
                            <li><p>Pages to include: Homepage, Investment Approach, Portfolio, Case Studies, Team, Contact</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${processCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setProcessCollapsed(!processCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="process">Process</h2>
                    </div>
                    <div className="template-text-body">
                        <ol className="listtype-numbered" >
                            <li><p>Client interview and requirements gathering</p></li>
                            <li><p>Design mocks and review</p></li>
                            <li><p>Develop, deploy, feedback, adjust</p></li>
                            <li><p>Final delivery and asset transfer</p></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${designCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setDesignCollapsed(!designCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="design">Design</h2>
                    </div>
                    <div className="template-text-body">
                        <p>The directive from the client was to leverage a space theme and bring a design unity across the different sections of the experience. Each one of the following blocks had a corresponding page that followed the overarching design pattern. I mocked the designs in sketch and shared them with the client in Invision throughout the design phase.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox2} className="image-button" type="button">
                                            <HumbleAbout />
                                            <Caption caption="hero message" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox3} className="image-button" type="button">
                                            <HumbleApproach />
                                            <Caption caption="investment approach" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <HumblePortfolio />
                                            <Caption caption="porfolio companies" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-humble-team">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <HumbleTeam />
                                            <Caption caption="team" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper flex-humble-cta">
                                        <button onClick={openLightbox6} className="image-button" type="button">
                                            <HumbleCTA />
                                            <Caption caption="call to action" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${developmentCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setDevelopmentCollapsed(!developmentCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="development">Development</h2>
                    </div>
                    <div className="template-text-body">
                        <p>The website was built in Wordpress for ease of editing by the client and required a significant amount of custom html and css to transform the original template into the accepted designs. It was my first experience creating in wordpress so I was learning while building and required different considerations for developing the system to be pick up and used by the client after the site is set up. It also opened my eyes to the expansiveness of the Wordpress ecosystem and the different themes/plugins available for creators to leverage.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${reflectionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setReflectionCollapsed(!reflectionCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="reflection" >Reflection</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Humble's website was my first dive into client work and exposed me to managing the product development process with external stakeholders. Proactive communication works wonders in managing expectations and frequent updates makes sure everyone is on the same page throughout the process. Being clear about what blockers arise and when input is needed ensures the right prioritizations are made, leading to the right outcomes. I’m excited for the next client project and thankful for the opportunity to work with such a great organization.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <Link to="/fastropelabs/" className="case-item">
                        <div className="case-popup"><Popup text="Case Study: Fastrope Labs" imgsrc="FastropePopup" /></div>
                        <p>+Fastrope Labs<span className="case-arrow"><CaseArrowIcon /></span></p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Humble