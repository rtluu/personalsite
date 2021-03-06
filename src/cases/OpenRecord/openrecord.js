import React, { useState } from "react";
import { Link } from "gatsby";
import ReactPlayer from 'react-player';
import HeroOpenRecord from "./images/HeroOpenRecord";
import OpenRecordDiscovery from "./images/OpenRecordDiscovery";
import OpenRecordUserInterviews from "./images/OpenRecordUserInterviews";
import OpenRecordTechnicalIA from "./images/OpenRecordTechnicalIA";
import OpenRecordCollectionFire from "./images/OpenRecordCollectionFire";
import OpenRecordCollectionMobile from "./images/OpenRecordCollectionMobile";
import OpenRecordLandingPage from "./images/OpenRecordLandingPage";
import OpenRecordWorkingDesign from "./images/OpenRecordWorkingDesign";
import OpenRecordLiveMobile from "./images/OpenRecordLiveMobile";
import OpenRecordHomepage from "./images/OpenRecordHomepage";
import OpenRecordFeedback from "./images/OpenRecordFeedback";
import OpenRecordAddSong from "./images/OpenRecordAddSong";
import OpenRecordMobileQueue from "./images/OpenRecordMobileQueue";
import OpenRecordAnchors from "./anchorsOpenRecord";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import PlayIcon from "../../icons/play-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import Caption from "../../components/Caption/caption";
import Player from "../../components/Player/player";
import { setImageNumber, setImageGallery, setVideoExpanded, useGlobalState } from '../../state';

const OpenRecord = () => {
    //Lightbox
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(13);
    function openLightbox1() { setImageNumber(1); update(!value); setVideoExpanded(true); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); }
    function openLightbox6() { setImageNumber(6); update(!value); }
    function openLightbox7() { setImageNumber(7); update(!value); }
    function openLightbox8() { setImageNumber(8); update(!value); setVideoExpanded(true); }
    function openLightbox9() { setImageNumber(9); update(!value); }
    function openLightbox10() { setImageNumber(10); update(!value); }
    function openLightbox11() { setImageNumber(11); update(!value); }
    function openLightbox12() { setImageNumber(12); update(!value); setVideoExpanded(true); }
    function openLightbox13() { setImageNumber(13); update(!value); }

    //Video
    const [isHoveredOne, setIsHoveredOne] = React.useState();
    const [isHoveredEight, setIsHoveredEight] = React.useState();
    const [isHoveredTwelve, setIsHoveredTwelve] = React.useState();
    const [videoExpanded] = useGlobalState('videoExpanded');

    //Collapse
    const [backgroundCollapsed, setBackgroundCollapsed] = useState(false);
    const [problemCollapsed, setProblemCollapsed] = useState(false);
    const [questionCollapsed, setQuestionCollapsed] = useState(false);
    const [solutionCollapsed, setSolutionCollapsed] = useState(false);
    const [researchCollapsed, setResearchCollapsed] = useState(false);
    const [designCollapsed, setDesignCollapsed] = useState(false);
    const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    const [reflectionCollapsed, setReflectionCollapsed] = useState(false);

    return (
        <div className="template-content">
            <OpenRecordAnchors />
            <h1 id="openrecord">OpenRecord</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button video-button" type="button">
                        <HeroOpenRecord />
                        <div className={`video vert-openrecord-hero ${videoExpanded ? "video-expanded" : "video-hero"}`}>
                            {!value | imageNumber === 1 ? <Player ytid="558t8VG-zzw" /> : null}
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
                        <p><span className="bold-italic">Idea: </span>Collaborative Music Collections</p>
                        <p><span className="bold-italic">Role: </span>Creator, Product, Frontend</p>
                        <p><span className="bold-italic">Team: </span>James McNamara, Osebo Akhigbe, Chas DeVeas</p>
                        <p><span className="bold-italic">Tools: </span>React Hooks, Typescript, GraphQL, Node</p>
                        <p><span className="bold-italic">Timeline: </span>2018</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${backgroundCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setBackgroundCollapsed(!backgroundCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="background">Background</h2>
                    </div>
                    <div className="template-text-body">
                        <p>It started with a problem experienced while throwing a party with friends. I wanted to create a playlist of music for the event and asked everyone if they would contribute. Problem was, not everyone had a Spotify membership and most just ended up sharing various song names or YouTube links.</p>
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
                        <p>I wished there was a way to easily create party playlists with friends without having to log in, while still having access to all of the best music.</p>
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
                        <p>How could we make it simpler for music lovers to create playlists with others?</p>
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
                        <p>I’ve used the react-player npm package before on other projects and knew it was capable of rendering YouTube and Soundcloud embeds. If we could query tap into those libraries we’d access endless content and could build a fluid UI on top.</p>
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
                        <p>When I worked at Ad Hoc, the team had a Slack channel where we'd share music in themed weekly playlist. It was the perfect crew to ask about their music collection habits, so that’s what we did. Those discussions drove our initial user flows and information architecture.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox2} className="image-button" type="button">
                                            <OpenRecordDiscovery />
                                        </button>
                                        <Caption caption="weekly slack thread" />
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-openrecord-user-interviews">
                                        <button onClick={openLightbox3} className="image-button" type="button">
                                            <OpenRecordUserInterviews />
                                        </button>
                                        <Caption caption="brainstorming development approaches" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-technical-ia">
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <OpenRecordTechnicalIA />
                                        </button>
                                        <Caption caption="whiteboarding" />
                                    </div>
                                </div>
                            </div>
                        </span>
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
                        <p>We used Figma to mock out the UX, focusing on ease of starting collections and adding songs.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-openrecord-landing-page">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <OpenRecordLandingPage />
                                        </button>
                                        <Caption caption="homepage mock" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-collection-fire">
                                        <button onClick={openLightbox6} className="image-button" type="button">
                                            <OpenRecordCollectionFire />
                                        </button>
                                        <Caption caption="collection mock" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-collection-mobile">
                                        <button onClick={openLightbox7} className="image-button" type="button">
                                            <OpenRecordCollectionMobile />
                                        </button>
                                        <Caption caption="mobile mock" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="template-text-body">
                        <p>After some tweaks and functionality slimming we had a working experience that enabled users to create collections with songs from Soundcloud and YouTube.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper flex-openrecord-working-design">
                                        <button onClick={openLightbox8} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredEight(true)} onMouseLeave={() => setIsHoveredEight(false)}>
                                            <div className="video-inner">
                                                <OpenRecordWorkingDesign />
                                                <div className={`video vert-openrecord-working-design ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredEight | videoExpanded & imageNumber === 8 ? <Player ytid="ghqab6X17pE" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox8}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="local version of collection" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-live-mobile">
                                        <button onClick={openLightbox9} className="image-button" type="button">
                                            <OpenRecordLiveMobile />
                                        </button>
                                        <Caption caption="local mobile web" />
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
                        <p>Throughout development, we sought feedback from friends and teammates and work. Over time we refined the messaging and user experience to help users discover other collections and make each song stand out during playback with dynamic colored backgrounds.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-openrecord-homepage">
                                        <button onClick={openLightbox10} className="image-button" type="button">
                                            <OpenRecordHomepage />
                                        </button>
                                        <Caption caption="openrecord homepage" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-feedback">
                                        <button onClick={openLightbox11} className="image-button" type="button">
                                            <OpenRecordFeedback />
                                        </button>
                                        <Caption caption="openrecord about" />
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper flex-openrecord-add-song">
                                        <button onClick={openLightbox12} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredTwelve(true)} onMouseLeave={() => setIsHoveredTwelve(false)}>
                                            <OpenRecordAddSong />
                                            <div className={`video vert-openrecord-add-song ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                {isHoveredTwelve | videoExpanded & imageNumber === 12 ? <Player ytid="1PlqPOvsyA0" /> : null}
                                                {!videoExpanded && <div className="video-engage-instructions">
                                                    <span className="play-button" onClick={openLightbox12} >
                                                        <PlayIcon />
                                                    </span>
                                                    <div className="loading-spinner" />
                                                </div>}
                                            </div>
                                        </button>
                                        <Caption caption="collection demo" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-mobile-queue">
                                        <button onClick={openLightbox13} className="image-button" type="button">
                                            <OpenRecordMobileQueue />
                                        </button>
                                        <Caption caption="collection mobile" />
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
                        <p>Open Record was my first open source project and I really enjoyed being able to rapidly share and get feedback from other creators. Further, working with more experienced developers pushed me to learn new languages/tools like Typescript, Hooks, and GraphQL.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Open source comes with its own set of challenges. Keeping everyone on the same page and working towards a clear goal is difficult when contributors are transient. Naturally, there are parts of the product that one person champions and it can be difficult for someone else to pick up and continue that work.</p>
                    </div>
                    <div className="template-text-body">
                        <p>A great experience all around and I’ll definitely be contributing to more open source projects soon.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <div className="case-end-links">
                        <Link to="/neat/" className="case-item">
                            <div className="case-popup"><Popup text="Case Study: Neat" imgsrc="NeatPopup" /></div>
                            <span className="case-arrow previous"><CaseArrowIcon /></span>
                            <p>+Neat</p>
                        </Link>
                        <Link to="/vumble/" className="case-item next">
                            <div className="case-popup"><Popup text="Case Study: Vumble" imgsrc="VumblePopup" /></div>
                            <span className="case-arrow"><CaseArrowIcon /></span>
                            <p>+Vumble</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OpenRecord