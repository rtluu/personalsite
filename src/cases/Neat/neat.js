import React, { useState } from "react";
import { Link } from "gatsby";
import ReactPlayer from 'react-player';
import Lightbox from "../../components/Lightbox/lightbox";
import HeroNeat from "./images/HeroNeat";
import NeatAddLink from "./images/NeatAddLink";
import NeatEmbed from "./images/NeatEmbed";
import NeatGrid from "./images/NeatGrid";
import NeatListView from "./images/NeatListView";
import NeatMobile from "./images/NeatMobile";
import NeatUserFlow from "./images/NeatUserFlow";
import NeatUserInterview from "./images/NeatUserInterview";
import NeatWireframeListView from "./images/NeatWireframeListView";
import NeatWireframeLogin from "./images/NeatWireframeLogin";
import NeatWireframeMobile from "./images/NeatWireframeMobile";
import NeatAnchors from "./anchorsNeat";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import PlayIcon from "../../icons/play-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import Caption from "../../components/Caption/caption";
import Player from "../../components/Player/player";
import { setImageNumber, setImageGallery, setVideoExpanded, useGlobalState } from '../../state';


const Neat = () => {
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
    function openLightbox10() { setImageNumber(10); update(!value); setVideoExpanded(true); }
    function openLightbox11() { setImageNumber(11); update(!value); setVideoExpanded(true); }

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
        <>
            <Lightbox />
            <div className="template-content">
                <NeatAnchors />
                <h1 id="neat">Neat</h1>
                <div className="template-section">
                    <div className="hero">
                        <button onClick={openLightbox1} key={1} className="image-button video-button" type="button">
                            <HeroNeat />
                            <div className={`video ${videoExpanded ? "video-expanded" : "video-hero"}`}>
                                <Player ytid="XkhYtBU0GSo" />
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
                            <p><span className="bold-italic">Idea: </span>Visual Media Collection</p>
                            <p><span className="bold-italic">Role: </span>Creator, Product, Frontend</p>
                            <p><span className="bold-italic">Team: </span>Osebo Akhigbe, Diego Quispe</p>
                            <p><span className="bold-italic">Tools: </span>React, Redux, MySql, SCSS, Sketch</p>
                            <p><span className="bold-italic">Timeline: </span>2016-2017</p>
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
                            <p>It started with a problem that Osebo experienced when trying to organize inspiration and digital resources in his design process. These assets were scattered across difficult services making them difficult to track and recall when needed.</p>
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
                            <p>Osebo is a visual learner and was seeking a better way to organize his design inspiration and useful resources for his design process.</p>
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
                            <p>How could we create a visual way for designers to collect and organize their digital resources?</p>
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
                            <p>A web app that enables designers to save any url, embedding the content and visuals for easy recall.</p>
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
                            <p>To see if others had similar challenges, we interviewed designers asking them about the tools they use to organize their digital resources. The primary responses were bookmarks, Pinterest and Slack, so we did competitive discovery to understand the strengths and weaknesses of each.</p>
                            <ul className="listtype-bullet listindent1 spacing" >
                                <li><span className="bullet">&bull;</span><p><b className="bold-underline">Bookmarks</b> are universal and simple to use, but they lack visuals which can make them difficult to quickly recall.</p></li>
                                <li><span className="bullet">&bull;</span><p><b className="bold-underline">Pinterest</b> pins are great for visual collections but limited to certain forms of content missing the ability to collect articles, webpages and 3d experiences that creators use in their workflows.</p></li>
                                <li><span className="bullet">&bull;</span><p><b className="bold-underline">Slack</b> has a plethora of places for collecting resources, but content is easily lost across chats and channels due to the quick pace of conversations.</p></li>
                            </ul>
                            <p>Those learnings gave us the confidence to move into user flow mapping and information architecture.</p>
                            <span className="gallery">
                                <div className="gallery-outer-wrapper">
                                    <div className="gallery-wrapper">
                                        <div className="gallery-item-wrapper flex-neat-user-interview">
                                            <button onClick={openLightbox2} className="image-button" type="button">
                                                <NeatUserInterview />
                                                <Caption caption="user interview" />
                                            </button>
                                        </div>
                                        <div className="gallery-item-wrapper flex-neat-user-flow">
                                            <button onClick={openLightbox3} className="image-button" type="button">
                                                <NeatUserFlow />
                                                <Caption caption="interaction mapping" />
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
                            <p>During our design process we prioritized making saved items as visual as possible for ease of recall and appealing to our designer target audience. We also heard from early users that it can be frustrating to have to sign up or log to begin saving, so we built a way for users to create anonymous collections that would temporarily save their content to local storage and then signing in would permanently save the items to their account.</p>
                            <span className="gallery">
                                <div className="gallery-outer-wrapper">
                                    <div className="gallery-wrapper">
                                        <div className="gallery-item-wrapper flex-neat-wireframe-listview">
                                            <button onClick={openLightbox4} className="image-button" type="button">
                                                <NeatWireframeListView />
                                                <Caption caption="wireframe list view" />
                                            </button>
                                        </div>
                                        <div className="gallery-item-wrapper flex-neat-wireframe-login">
                                            <button onClick={openLightbox5} className="image-button" type="button">
                                                <NeatWireframeLogin />
                                                <Caption caption="wireframe login" />
                                            </button>
                                        </div>
                                        <div className="gallery-item-wrapper flex-neat-wireframe-mobile">
                                            <button onClick={openLightbox6} className="image-button" type="button">
                                                <NeatWireframeMobile />
                                                <Caption caption="wireframe collection" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </span>
                            <span className="gallery">
                                <div className="gallery-outer-wrapper second-gallery-row">
                                    <div className="gallery-wrapper">
                                        <div className="gallery-item-wrapper flex-neat-grid">
                                            <button onClick={openLightbox7} className="image-button" type="button">
                                                <NeatGrid />
                                                <Caption caption="grid" />
                                            </button>
                                        </div>
                                        <div className="gallery-item-wrapper flex-neat-listview">
                                            <button onClick={openLightbox8} className="image-button" type="button">
                                                <NeatListView />
                                                <Caption caption="list view" />
                                            </button>
                                        </div>
                                        <div className="gallery-item-wrapper flex-neat-mobile">
                                            <button onClick={openLightbox9} className="image-button" type="button">
                                                <NeatMobile />
                                                <Caption caption="mobile" />
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
                            <p>Enabling users to save and recall quickly was the focal point of our efforts. Users could drop any link into the tool and it would either pull the relevant image or take a screenshot of the webpage to be used as the primary image that users could refer back to in their collection. We also made returning to content extremely simple with everything from videos, music and full webpages all opening within an overlay so users never had to leave their collections to interact with content.</p>
                            <span className="gallery">
                                <div className="gallery-outer-wrapper second-gallery-row">
                                    <div className="gallery-wrapper">
                                        <div className="gallery-item-wrapper">
                                            <button onClick={openLightbox10} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredTen(true)} onMouseLeave={() => setIsHoveredTen(false)}>
                                                <NeatAddLink />
                                                <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredTen | videoExpanded & imageNumber === 10 ? <Player ytid="Royezt5RYpw" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox10}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </button>
                                            <Caption caption="add link to collection" />
                                        </div>
                                        <div className="gallery-item-wrapper">
                                            <button onClick={openLightbox11} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredEleven(true)} onMouseLeave={() => setIsHoveredEleven(false)}>
                                                <NeatEmbed />
                                                <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredEleven | videoExpanded & imageNumber === 11 ? <Player ytid="HW5FpK13uzg" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox11}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </button>
                                            <Caption caption="embed rich media" />
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
                        <div className="case-end-links">
                            <Link to="/ourluubeginning/" className="case-item">
                                <div className="case-popup"><Popup text="Case Study: OurLuuBeginning" imgsrc="OLBPopup" /></div>
                                <p><span className="case-arrow previous"><CaseArrowIcon /></span>+OurLuuBeginning</p>
                            </Link>
                            <Link to="/openrecord/" className="case-item next">
                                <div className="case-popup"><Popup text="Case Study: OpenRecord" imgsrc="OpenRecordPopup" /></div>
                                <p>+OpenRecord<span className="case-arrow"><CaseArrowIcon /></span></p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Neat