import React, { useState } from "react";
import { Link } from "gatsby";
import HeroAdHoc from "./images/HeroAdHoc";
import AdHocChecklist from "./images/AdHocChecklist";
import AdHocContract from "./images/AdHocContract";
import AdHocDesignSystem from "./images/AdHocDesignSystem";
import AdHocDigitalLifecycle from "./images/AdHocDigitalLifecycle";
import AdHocDevDocs from "./images/AdHocDevDocs";
import AdHocHandbook from "./images/AdHocHandbook";
import AdHocIsolatedTeams from "./images/AdHocIsolatedTeams";
import AdHocResearchTeams from "./images/AdHocResearchTeams";
import AdHocResults from "./images/AdHocResults";
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
    setImageGallery(10);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); }
    function openLightbox6() { setImageNumber(6); update(!value); }
    function openLightbox7() { setImageNumber(7); update(!value); }
    function openLightbox8() { setImageNumber(8); update(!value); }
    function openLightbox9() { setImageNumber(9); update(!value); }
    function openLightbox10() { setImageNumber(10); update(!value); }

    //Collapse - Fastrope
    const [backgroundCollapsed, setBackgroundCollapsed] = useState(false);
    const [problemCollapsed, setProblemCollapsed] = useState(false);
    const [questionCollapsed, setQuestionCollapsed] = useState(false);
    const [objectiveCollapsed, setObjectiveCollapsed] = useState(false);
    const [researchCollapsed, setResearchCollapsed] = useState(false);
    const [solutionCollapsed, setSolutionCollapsed] = useState(false);
    const [resultsCollapsed, setResultsCollapsed] = useState(false);
    const [reflectionCollapsed, setReflectionCollapsed] = useState(false);

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
                    <div className="template-text-header" onClick={() => setBackgroundCollapsed(!backgroundCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="background">Background</h2>
                    </div>
                    <div className="template-text-body">
                        <p>When I started at Ad Hoc, I worked on a project called Vets.gov with a goal of modernizing the core infrastructure for Veterans to apply for and manage their benefits.</p>
                    </div>
                    <div className={`side-pic-box section ${backgroundCollapsed ? "hide" : ""}`}>
                        <div className="side-pic" onClick={openLightbox2} onKeyDown={openLightbox2} key={2} type="button">
                            <AdHocVetsdotgov />
                            <Caption caption="vets.gov" />
                        </div>
                    </div>
                    <div className="template-text-body">
                        <p>We began by recreating the most important VA forms from each VA org using user centered design, industry leading tech and with modern development processes.</p>
                    </div>
                    <div className="template-text-body full-width">
                        <p>In November 2018, we relaunched Vets.gov as VA.gov and became the front door for Veterans to navigate the VA ecosystem. Now that we had established a core architecture and development pipeline for the new VA, we faced a new issue - unifying the different VA orgs under one digital property.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox3} className="image-button" type="button">
                                            <AdHocWBC />
                                        </button>
                                        <Caption caption="web brand consolidation" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${problemCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setProblemCollapsed(!problemCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="problem">Problem</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Different VA departments are responsible for managing different Veterans’ benefits. There’s healthcare, education, pension - each with separate leadership, budgets and development teams. As a result, teams build in isolation, producing a fragmented experience for Veterans to navigate for accessing their benefits.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <AdHocIsolatedTeams />
                                        </button>
                                        <Caption caption="isolated va teams" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${questionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setQuestionCollapsed(!questionCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="question">Question</h2>
                    </div>
                    <div className="template-text-body">
                        <p>How can we improve the way VA development teams work together so we can create higher quality digital services and get Veterans their benefits faster?</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${objectiveCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setObjectiveCollapsed(!objectiveCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="question">Objective</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Build the tools and system for development teams from different consulting agencies to create VA applications together.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${researchCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setResearchCollapsed(!researchCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="research">Research</h2>
                    </div>
                    <div className="template-text-body">
                        <p>As we kicked off this effort, we needed to define who our users are. We started by looking at our own team - the crew that had been building Vets.gov over the past 2 years. The primary groups were developers, designers, and product managers. I worked with my design lead to conduct interviews across the different disciplines to understand their workflows and identify the resources they leveraged in their process.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <AdHocResearchTeams />
                                        </button>
                                        <Caption caption="va platform user groups" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${solutionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setSolutionCollapsed(!solutionCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="solution">Solution approach</h2>
                    </div>
                    <div className="template-text-body">
                        <p>We identified two areas necessary elements for bringing new teams onboard, Documentation and Support. I was put in charge of two product teams to drive the VA platform: one to produce the platform documentation and one to support new teams in launching apps on the platform.</p>
                    </div>
                    <div className="template-text-body">
                        <p className="bold">Documentation</p>
                        <p>To succeed in creating new VA.gov applications, teams need instructions for the tools and processes they’ll use in their workflow. We split the docs into separate sets, tailoring the information for each user group.</p>
                    </div>
                    <div className="template-text-body">
                        <ol className="listtype-numbered">
                            <li><p><span className="underline">Digital Services Handbook</span> - outlines the digital delivery pipeline that product managers use to navigate their team from first contact through deployment.</p></li>
                            <li><p><span className="underline">Client Application Documentation</span> - guides developers through the development process covering everything from setting up their environment to running tests and deploying changes.</p></li>
                            <li><p><span className="underline">Design System</span> - provides designers and content editors with the components and patterns available for creating user flows that help Veterans achieve their goals.</p></li>
                        </ol>
                    </div>
                    <div className="template-text-body">
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-adhoc-handbook">
                                        <button onClick={openLightbox6} className="image-button" type="button">
                                            <AdHocHandbook />
                                        </button>
                                        <Caption caption="digital services handbook" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-adhoc-fe-docs">
                                        <button onClick={openLightbox7} className="image-button" type="button">
                                            <AdHocDevDocs />
                                        </button>
                                        <Caption caption="developer docs" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-adhoc-design-system">
                                        <button onClick={openLightbox8} className="image-button" type="button">
                                            <AdHocDesignSystem />
                                        </button>
                                        <Caption caption="design system" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="template-text-body">
                        <p className="bold">Support</p>
                        <p>Building quality applications requires good process with the appropriate checks and balances. We instituted a development lifecycle to ensure that the disparate teams were producing quality apps and maintained a consistent experience.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <AdHocDigitalLifecycle />
                                        </button>
                                        <Caption caption="product development lifecycle" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className={`template-text-block two-column ${solutionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-body">
                        <p>Throughout the delivery lifecycle, the support team would provide assistance and perform critical functions like:</p>
                        <ul className="listtype-bullet spacing">
                            <li><span className="bullet">&bull;</span><p>Code Reviews</p></li>
                            <li><span className="bullet">&bull;</span><p>QA Testing</p></li>
                            <li><span className="bullet">&bull;</span><p>Load Testing</p></li>
                            <li><span className="bullet">&bull;</span><p>Analytics Setup</p></li>
                            <li><span className="bullet">&bull;</span><p>Accessibility Reviews</p></li>
                            <li><span className="bullet">&bull;</span><p>Design Reviews</p></li>
                            <li><span className="bullet">&bull;</span><p>Content Reviews</p></li>
                        </ul>
                    </div>
                    <div className={`side-pic-box section hide-mobile ${solutionCollapsed ? "hide" : ""}`}>
                        <div className="side-pic" onClick={openLightbox2} onKeyDown={openLightbox2} key={2} type="button">
                            <AdHocChecklist />
                            <Caption caption="support process" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${resultsCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setResultsCollapsed(!resultsCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="question">Results</h2>
                    </div>
                    <div className="template-text-body">
                        <p>In the first 6 months of launching the VA Platform, we helped six teams from five different VA groups deployed new applications and features on Va.gov.</p>
                    </div>
                    <div className="template-text-body">
                        <p>VA leadership saw promise in our initiative and decided to turn the Platform model into a 9 figure, 3 year contract. Ad Hoc put together a bid and as a part of that process, each company participates in a work challenge in front of a panel of judges to demonstrate their ability to perform the job. I was chosen to lead Ad Hoc’s cross functional demo team and I’m proud to say we won the VA Platform contract!</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-adhoc-results">
                                        <button onClick={openLightbox9} className="image-button" type="button">
                                            <AdHocResults />
                                        </button>
                                        <Caption caption="initial cohort of dev teams" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-adhoc-contract">
                                        <button onClick={openLightbox10} className="image-button" type="button">
                                            <AdHocContract />
                                        </button>
                                        <Caption caption="platform contract proposal" />
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
                        <p>Working at Ad Hoc was an incredible experience. I learned so much from running multiple product teams across different verticals within the VA ecosystem. I helped create a whole new model of development in government with the VA platform and had the pleasure of working alongside some incredibly smart people. Beyond that, the outcomes of my work impact Veterans by enabling them to received the benefits they deserve. I treasure being able to contribute positively towards improving someone's life through technology and my experience at AdHox is a perfect example of that coming to fruition.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <div className="case-end-links">
                        <Link to="/vumble/" className="case-item">
                            <div className="case-popup"><Popup text="Case Study: Vumble" imgsrc="VumblePopup" /></div>
                            <p><span className="case-arrow previous"><CaseArrowIcon /></span>+Vumble</p>
                        </Link>
                        <span className="case-item next">
                            <p>+Washington Post<span className="case-arrow"><CaseArrowIcon /></span></p>
                            <p className="coming-soon">(coming soon)</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdHoc