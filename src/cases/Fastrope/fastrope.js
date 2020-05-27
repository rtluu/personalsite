import React, { useState } from "react";
import { Link } from "gatsby";
import HeroFastrope from "./images/HeroFastrope";
import FastropeContact from "./images/FastropeContact";
import FastropePortfolio from "./images/FastropePortfolio";
import FastropeServices from "./images/FastropeServices";
import FastropeTeam from "./images/FastropeTeam";
import FastropeAnchors from "./anchorsFastrope";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import Caption from "../../components/Caption/caption";
import { setImageNumber, setImageGallery, useGlobalState } from '../../state';


const Fastrope = () => {
    //Lightbox - About
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(5);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); }

    //Collapse - Fastrope
    const [objectiveCollapsed, setObjectiveCollapsed] = useState(false);
    const [requirementsCollapsed, setRequirementsCollapsed] = useState(false);
    const [processCollapsed, setProcessCollapsed] = useState(false);
    const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    const [reflectionCollapsed, setReflectionCollapsed] = useState(false);

    return (
        <div className="template-content">
            <FastropeAnchors />
            <h1 id="fastrope">Fastrope Labs</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button" type="button">
                        <HeroFastrope />
                    </button>
                </div>
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p><span className="bold-italic">Client: </span>Fastrope Labs</p>
                        <p><span className="bold-italic">Role: </span>Frontend</p>
                        <p><span className="bold-italic">Tools: </span>React, SCSS, Git</p>
                        <p><span className="bold-italic">Timeline: </span>2017</p>
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
                        <p>Develop a website for the creative agency based in Washington DC.</p>
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
                            <li><p>Create a website in a modern framework</p></li>
                            <li><p>Work with the design and marketing team translate mocks into experience</p></li>
                            <li><p>Pages to include: Work, Team, Contact</p></li>
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
                                            <Caption caption="team" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox3} className="image-button" type="button">
                                            <FastropeContact />
                                            <Caption caption="contact page" />
                                        </button>
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
                                            <Caption caption="services" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper flex-neat-portfolio">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <FastropePortfolio />
                                            <Caption caption="client work" />
                                        </button>
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
            </div>
        </div>
    )
}

export default Fastrope