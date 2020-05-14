import React, { useState } from "react";
import { Link } from "gatsby";
import ReactPlayer from 'react-player';
import Lightbox from "./lightboxOpenRecord";
import HeroOpenRecord from "./images/HeroOpenRecord";
import OpenRecordDiscovery from "./images/OpenRecordDiscovery";
import OpenRecordUserInterviews from "./images/OpenRecordUserInterviews";
import OpenRecordTechnicalIA from "./images/OpenRecordTechnicalIA";
import OpenRecordCollectionFire from "./images/OpenRecordCollectionFire";
import OpenRecordCollectionMobile from "./images/OpenRecordCollectionMobile";
import OpenRecordLandingPage from "./images/OpenRecordLandingPage";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import PlayIcon from "../../icons/play-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import Player from "../../components/Player/player";
import { setImageNumber, setImageGallery, setVideoExpanded, useGlobalState } from '../../state';


const OpenRecord = () => {
    //Lightbox
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(11);
    function openLightbox1() { setImageNumber(1); update(!value); setVideoExpanded(true); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); }
    function openLightbox6() { setImageNumber(6); update(!value); }
    function openLightbox7() { setImageNumber(7); update(!value); }
    function openLightbox8() { setImageNumber(8); update(!value); }
    function openLightbox9() { setImageNumber(9); update(!value); }

    //Video
    const [isHoveredOne, setIsHoveredOne] = React.useState();
    const [isHoveredTen, setIsHoveredTen] = React.useState();
    const [isHoveredEleven, setIsHoveredEleven] = React.useState();
    const [videoExpanded] = useGlobalState('videoExpanded');
    function lightboxExpanded() {
        setVideoExpanded(true);
    }


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
            <Lightbox currentImage={imageNumber} />
            {/* <OLBAnchors /> */}
            <h1 id="openrecord">OpenRecord</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button" type="button">
                        <HeroOpenRecord />
                        <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                            <Player ytid="558t8VG-zzw" />
                            {!videoExpanded && <div className="video-engage-instructions">
                                <span className="play-button">
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
                        <h2 id="process">Research</h2>
                    </div>
                    <div className="template-text-body">
                        <p>At my job, we had a Slack channel where teammates would share music in a weekly playlist. These users were a perfect crew to ask about their music collection habits, so that’s exactly what we did. Those learnings translated to our first interaction mapping and technical information architecture (IA).</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox2} className="image-button" type="button">
                                            <OpenRecordDiscovery />
                                        </button>
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
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-technical-ia">
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <OpenRecordTechnicalIA />
                                        </button>
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
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <OpenRecordLandingPage />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-collection-fire">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <OpenRecordCollectionFire />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper flex-openrecord-collection-mobile">
                                        <button onClick={openLightbox6} className="image-button" type="button">
                                            <OpenRecordCollectionMobile />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        {/* <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-neat-grid">
                                        <button onClick={openLightbox7} className="image-button" type="button">
                                            <NeatGrid />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper flex-neat-listview">
                                        <button onClick={openLightbox8} className="image-button" type="button">
                                            <NeatListView />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper flex-neat-mobile">
                                        <button onClick={openLightbox9} className="image-button" type="button">
                                            <NeatMobile />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </span> */}
                    </div>
                </div>
            </div>
            {/* <div className="template-section">
                <div className={`template-text-block ${developmentCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setDevelopmentCollapsed(!developmentCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="development">Development</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Enabling users to save and recall quickly was the focal point of our efforts. Users could drop any link into the tool and it would either pull the relevant image or take a screenshot of the webpage to be used as the primary image that users could refer back to in their collection. We also made returning to content extremely simple with everything from videos, music and full webpages all opening within an overlay so users never had to leave their collections to interact with content.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox10} className="image-button" type="button" onMouseEnter={() => setIsHoveredTen(true)} onMouseLeave={() => setIsHoveredTen(false)}>
                                            <NeatAddLink />
                                            <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                {isHoveredTen | videoExpanded & imageNumber === 10 ? <Player ytid="Royezt5RYpw" /> : null}
                                                {!videoExpanded && <div className="video-engage-instructions">
                                                    <span className="play-button">
                                                        <PlayIcon />
                                                    </span>
                                                    <div className="loading-spinner" />
                                                </div>}
                                            </div>
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox11} className="image-button" type="button" onMouseEnter={() => setIsHoveredEleven(true)} onMouseLeave={() => setIsHoveredEleven(false)}>
                                            <NeatEmbed />
                                            <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                {isHoveredEleven | videoExpanded & imageNumber === 11 ? <Player ytid="HW5FpK13uzg" /> : null}
                                                {!videoExpanded && <div className="video-engage-instructions">
                                                    <span className="play-button">
                                                        <PlayIcon />
                                                    </span>
                                                    <div className="loading-spinner" />
                                                </div>}
                                            </div>
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
                        <p>Although we had created a clean and intuitive experience, we ran into a blocker when we weren’t able to allow users to create multiple collections. Our backend wasn’t as sophisticated as it needed to be and our lead backend dev left before bringing that functionality to fruition. That led to collections get unruly and ultimately became the downfall of the experience.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Despite the outcome, I’m very happy to have had the opportunity to work on Neat. It gave me the excuse to learn React/Redux, I was able to get more reps running through the product development lifecycle and most importantly I was able to collaborate with some awesome creators that remain close friends.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <Link to="/ourluubeginning/" className="case-item">
                        <div className="case-popup"><Popup text="Case Study: OurLuuBeginning" imgsrc="OLBPopup" /></div>
                        <p><span className="case-arrow previous"><CaseArrowIcon /></span>+OurLuuBeginning</p>
                    </Link>
                </div>
            </div> */}
        </div >
    )
}

export default OpenRecord