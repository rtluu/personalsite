import React, { useState } from "react";
import { Link } from "gatsby";
import ReactPlayer from 'react-player';
import Lightbox from "./lightboxOurLuuBeginning";
import HeroOLB from "./images/HeroOLB";
import OLBAccommodations from "./images/OLBAccommodations";
import OLBExpanded from "./images/OLBExpanded";
import OLBFooter from "./images/OLBFooter";
import OLBGrid from "./images/OLBGrid";
import OLBProposalPage from "./images/OLBProposalPage";
import OLBProposalSlides from "./images/OLBProposalSlides";
import OLBSchedule from "./images/OLBSchedule";
import OLBAnchors from "./anchorsOurLuuBeginning";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import PlayIcon from "../../icons/play-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import Caption from "../../components/Caption/caption";
import Player from "../../components/Player/player";
import { setImageNumber, setImageGallery, setVideoExpanded, useGlobalState } from '../../state';


const OurLuuBeginning = () => {
    //Lightbox
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(8);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); setVideoExpanded(true); }
    function openLightbox6() { setImageNumber(6); update(!value); setVideoExpanded(true); }
    function openLightbox7() { setImageNumber(7); update(!value); }
    function openLightbox8() { setImageNumber(8); update(!value); }

    //Video
    const [isHoveredFive, setIsHoveredFive] = React.useState();
    const [isHoveredSix, setIsHoveredSix] = React.useState();
    const [videoExpanded] = useGlobalState('videoExpanded');
    // function lightboxExpanded() {
    //     setVideoExpanded(true);
    // }


    //Collapse
    const [objectiveCollapsed, setObjectiveCollapsed] = useState(false);
    const [requirementsCollapsed, setRequirementsCollapsed] = useState(false);
    const [processCollapsed, setProcessCollapsed] = useState(false);
    const [designCollapsed, setDesignCollapsed] = useState(false);
    const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    const [reflectionCollapsed, setReflectionCollapsed] = useState(false);

    return (
        <div className="template-content">
            <Lightbox currentImage={imageNumber} />
            <OLBAnchors />
            <h1 id="ourluubeginning">OurLuuBeginning</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button" type="button">
                        <HeroOLB />
                    </button>
                </div>
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p><span className="bold-italic">Role: </span>Design, Frontend</p>
                        <p><span className="bold-italic">Team: </span>Me, myself and I (with guidance from K)</p>
                        <p><span className="bold-italic">Tools: </span>Figma, React, Styled Components</p>
                        <p><span className="bold-italic">Timeline: </span>2019</p>
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
                        <p>Create a wedding website to inform guests about our wedding details and document our marriage journey. </p>
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
                            <li><span className="bullet">&bull;</span><p>Guests can access all relevant wedding info</p></li>
                            <li><span className="bullet">&bull;</span><p>Ability to fully customize the UI and add pages for capturing the wedding after it’s over</p></li>
                            <li><span className="bullet">&bull;</span><p>Pages to include: Homepage, Schedule, Accommodations, Registry, Wedding Party, Photos, Proposal</p></li>
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
                            <li><p>Build proposal poem page to give K at engagement</p></li>
                            <li><p>Get engaged 💍 (9/22/19 at Longwood Gardens)</p></li>
                            <li><p>Determine necessary wedding info with K</p></li>
                            <li><p>Design mocks and iteration</p></li>
                            <li><p>Development and refinement based on K’s feedback</p></li>
                            <li><p>Share with guests on our ‘Save the Date’ and invitation</p></li>
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
                        <p>K and I wanted the site to reflect our connection as a couple and prefer a minimalist design ease in readability. I laid out the mocks in Figma, iterating through different designs and color patterns. We landed on a cursive primary font and outline icons tied together with a smooth blue background.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-olb-hero">
                                        <button onClick={openLightbox1} className="image-button" type="button">
                                            <HeroOLB />
                                            <Caption caption="hero banner" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper flex-olb-footer">
                                        <button onClick={openLightbox2} className="image-button" type="button">
                                            <OLBFooter />
                                            <Caption caption="home footer" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox3} className="image-button" type="button">
                                            <OLBSchedule />
                                            <Caption caption="wedding schedule" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <OLBAccommodations />
                                            <Caption caption="accommodations" />
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
                        <p>I built the site in React, allowing me to leverage npm packages to create the scroll effect for the proposal poem. I also put int two different types of photo galleries - one for the proposal pics and the other for the photo collage.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox5} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredFive(true)} onMouseLeave={() => setIsHoveredFive(false)}>
                                            <OLBProposalPage />
                                            <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                {isHoveredFive | videoExpanded & imageNumber === 5 ? <Player ytid="kEwzQi0bgc4" /> : null}
                                                {!videoExpanded && <div className="video-engage-instructions">
                                                    <span className="play-button" onClick={openLightbox5}>
                                                        <PlayIcon />
                                                    </span>
                                                    <div className="loading-spinner" />
                                                </div>}
                                            </div>
                                        </button>
                                        <Caption caption="proposal page" />
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox6} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredSix(true)} onMouseLeave={() => setIsHoveredSix(false)}>
                                            <OLBProposalSlides />
                                            <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                {isHoveredSix | videoExpanded & imageNumber === 6 ? <Player ytid="EHQywvZ6ILc" /> : null}
                                                {!videoExpanded && <div className="video-engage-instructions">
                                                    <span className="play-button" onClick={openLightbox6}>
                                                        <PlayIcon />
                                                    </span>
                                                    <div className="loading-spinner" />
                                                </div>}
                                            </div>
                                        </button>
                                        <Caption caption="proposal pics" />
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper ">
                                        <button onClick={openLightbox7} className="image-button" type="button">
                                            <OLBGrid />
                                            <Caption caption="picture gallery" />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox8} className="image-button" type="button">
                                            <OLBExpanded />
                                            <Caption caption="expanded picture" />
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
                        <p>It has been a very fun project and I loved collaborating with K to tell our story. Creating the site from scratch allow us to really craft the design to fit our aesthetic and I got some good practice on both the design and development fronts. Can’t wait for the wedding!</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <div className="case-end-links">
                        <Link to="/fastropelabs/" className="case-item">
                            <div className="case-popup"><Popup text="Case Study: Fastrope Labs" imgsrc="FastropePopup" /></div>
                            <p><span className="case-arrow previous"><CaseArrowIcon /></span>+Fastrope Labs</p>
                        </Link>
                        <Link to="/neat/" className="case-item next">
                            <div className="case-popup"><Popup text="Case Study: Neat" imgsrc="NeatPopup" /></div>
                            <p>+Neat<span className="case-arrow"><CaseArrowIcon /></span></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OurLuuBeginning