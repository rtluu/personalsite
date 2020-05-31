import React, { useState } from "react";
import { Link } from "gatsby";
import HeroAdHoc from "./images/HeroAdHoc";
import AdHocChecklist from "./images/AdHocChecklist";
import AdHocContract from "./images/AdHocContract";
import AdHocDesignSystem from "./images/AdHocDesignSystem";
import AdHocDigitalLifecycle from "./images/AdHocDigitalLifecycle";
import AdHocFeDocs from "./images/AdHocFeDocs";
import AdHocHandbook from "./images/AdHocHandbook";
import AdHocIsolatedTeams from "./images/AdHocIsolatedTeams";
import AdHocResearchTeams from "./images/AdHocResearchTeams";
import AdHocResults from "./images/AdHocResults";
import AdHocVagovBackground from "./images/AdHocVagovBackground";
import AdHocVeterans from "./images/AdHocVeterans";
import AdHocVetsdotgov from "./images/AdHocVetsgov";
import AdHocWBC from "./images/AdHocWBC";


import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import PlayIcon from "../../icons/play-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import Caption from "../../components/Caption/caption";
import Player from "../../components/Player/player";
import { setImageNumber, setImageGallery, setVideoExpanded, useGlobalState } from '../../state';


const AdHoc = () => {
    //Lightbox - About
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    setImageGallery(5);
    function openLightbox1() { setImageNumber(1); update(!value); }
    // function openLightbox2() { setImageNumber(2); update(!value); }
    // function openLightbox3() { setImageNumber(3); update(!value); }
    // function openLightbox4() { setImageNumber(4); update(!value); }
    // function openLightbox5() { setImageNumber(5); update(!value); }

    //Collapse - Fastrope
    const [backgroundCollapsed, setBackgroundCollapsed] = useState(false);
    // const [requirementsCollapsed, setRequirementsCollapsed] = useState(false);
    // const [processCollapsed, setProcessCollapsed] = useState(false);
    // const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    // const [reflectionCollapsed, setReflectionCollapsed] = useState(false);

    return (
        <div className="template-content">
            {/* <FastropeAnchors /> */}
            <h1 id="adhoc">Ad Hoc</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button" type="button">
                        <HeroAdHoc />
                        <div className={`video ${videoExpanded ? "video-expanded" : "video-hero"}`}>
                            {!value | imageNumber === 1 ? <Player ytid="FcSqajktRFw" /> : null}
                            {!videoExpanded && <div className="video-engage-instructions">
                                <span className="play-button" onClick={openLightbox1}>
                                    <PlayIcon />
                                </span>
                                <div className="loading-spinner" />
                            </div>}
                        </div>
                    </button>
                </div>
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p><span className="bold-italic">Role: </span> Senior Product Manager, Product Manager</p>
                        <p><span className="bold-italic">Tools: </span>Github, Zenhub, Google Analytics, Slides, Sheets</p>
                        <p><span className="bold-italic">Timeline: </span>2017-2019</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block two-column ${backgroundCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setObjectiveCollapsed(!backgroundCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="objective">Background</h2>
                    </div>
                    <div className="template-text-body">
                        <p>When I started at Ad Hoc, I worked on a project called Vets.gov on a mission to recreating the core infrastructure for VA.gov.</p>
                    </div>
                    <div className="template-text-body">
                        <p>We began by recreating the most important VA forms from each VA org using user centered design, industry leading tech and with modern development processes.</p>
                    </div>
                    <div >
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${backgroundCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setRequirementsCollapsed(!requirementsCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="requirements">Requirements</h2>
                    </div>
                    <div className="template-text-body">
                        <ul className="listtype-bullet listindent1" >
                            <li><p>Create a website in a modern framework</p></li>
                            <li><p>Work with the design and marketing team translate mocks into experience</p></li>
                            <li><p>Pages to include: Work, Team, Contact</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="template-section">
                <div className={`template-text-block ${processCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setProcessCollapsed(!processCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="process">Process</h2>
                    </div>
                    <div className="template-text-body">
                        <ol className="listtype-numbered" >
                            <li><p>Client interview and requirements gathering</p></li>
                            <li><p>Design synthesis and technical discovery</p></li>
                            <li><p>Develop, deploy, feedback, adjust</p></li>
                            <li><p>Final delivery and asset transfer</p></li>
                        </ol>
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
                        <p>The focus for my development was creating a snappy, efficient site while meeting the design requirements laid out by the Fastrope design team. I made it a point to build the components in a modular format for reusability and ease in adjustment.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper ">
                                        <button onClick={openLightbox2} className="image-button" type="button">
                                            <FastropeTeam />
                                        </button>
                                        <Caption caption="team" />
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox3} className="image-button" type="button">
                                            <FastropeContact />
                                        </button>
                                        <Caption caption="contact page" />
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-neat-services">
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <FastropeServices />
                                        </button>
                                        <Caption caption="services" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-neat-portfolio">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <FastropePortfolio />
                                        </button>
                                        <Caption caption="client work" />
                                    </div>
                                </div>
                            </div>
                        </span>
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
                        <p>Working with the Fastrope team was very smooth, with a clear vision for what they wanted to build along with a stellar team that was easy to communicate with. Working on this project gave me another opportunity to refine my development in React and control the full development pipeline from first commit through deployment.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <div className="case-end-links">
                        <Link to="/humblevc/" className="case-item">
                            <div className="case-popup"><Popup text="Case Study: Humble Venture Capital" imgsrc="HumblePopup" /></div>
                            <p><span className="case-arrow previous"><CaseArrowIcon /></span>+Humble Venture Capital</p>
                        </Link>
                        <Link to="/ourluubeginning/" className="case-item next">
                            <div className="case-popup"><Popup text="Case Study: OurLuuBeginning" imgsrc="OLBPopup" /></div>
                            <p>+OurLuuBeginning<span className="case-arrow"><CaseArrowIcon /></span></p>
                        </Link>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AdHoc