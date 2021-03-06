import React, { useState } from "react";
import { Link } from "gatsby";
import ReactPlayer from 'react-player';
import HeroVumble from "./images/HeroVumble";
import VumbleYouTube from "./images/VumbleYouTube";
import VumblePowerpointPrototype from "./images/VumblePowerpointPrototype";
import VumbleBetaBuild from "./images/VumbleBetaBuild";
import VumbleInstantPlayback from "./images/VumbleInstantPlayback";
import VumbleRedditResearch from "./images/VumbleRedditResearch";
import VumbleRedditTV from "./images/VumbleRedditTV";
import VumbleRedditInfused from "./images/VumbleRedditInfused";
import VumbleMobilePrototype from "./images/VumbleMobilePrototype";
import VumbleHoverFeature from "./images/VumbleHoverFeature";
import VumbleAsyncComments from "./images/VumbleAsyncComments";
import VumbleArrowsAutoplay from "./images/VumbleArrowsAutoplay";
import VumbleClipPost from "./images/VumbleClipPost";
import VumbleV2 from "./images/VumbleV2";
import VumbleAnchors from "./anchorsVumble";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import PlayIcon from "../../icons/play-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import Caption from "../../components/Caption/caption";
import Player from "../../components/Player/player";
import { setImageNumber, setImageGallery, setVideoExpanded, useGlobalState } from '../../state';

const Vumble = () => {
    //Lightbox
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(14);
    function openLightbox1() { setImageNumber(1); update(!value); setVideoExpanded(true); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); setVideoExpanded(true); }
    function openLightbox4() { setImageNumber(4); update(!value); setVideoExpanded(true); }
    function openLightbox5() { setImageNumber(5); update(!value); setVideoExpanded(true); }
    function openLightbox6() { setImageNumber(6); update(!value); setVideoExpanded(true); }
    function openLightbox7() { setImageNumber(7); update(!value); }
    function openLightbox8() { setImageNumber(8); update(!value); setVideoExpanded(true); }
    function openLightbox9() { setImageNumber(9); update(!value); setVideoExpanded(true); }
    function openLightbox10() { setImageNumber(10); update(!value); setVideoExpanded(true); }
    function openLightbox11() { setImageNumber(11); update(!value); setVideoExpanded(true); }
    function openLightbox12() { setImageNumber(12); update(!value); setVideoExpanded(true); }
    function openLightbox13() { setImageNumber(13); update(!value); setVideoExpanded(true); }
    function openLightbox14() { setImageNumber(14); update(!value); setVideoExpanded(true); }

    //Video
    const [isHoveredThree, setIsHoveredThree] = React.useState();
    const [isHoveredFour, setIsHoveredFour] = React.useState();
    const [isHoveredFive, setIsHoveredFive] = React.useState();
    const [isHoveredSix, setIsHoveredSix] = React.useState();
    const [isHoveredEight, setIsHoveredEight] = React.useState();
    const [isHoveredNine, setIsHoveredNine] = React.useState();
    const [isHoveredTen, setIsHoveredTen] = React.useState();
    const [isHoveredEleven, setIsHoveredEleven] = React.useState();
    const [isHoveredTwelve, setIsHoveredTwelve] = React.useState();
    const [isHoveredThirteen, setIsHoveredThirteen] = React.useState();
    const [isHoveredFourteen, setIsHoveredFourteen] = React.useState();
    const [videoExpanded] = useGlobalState('videoExpanded');

    //Collapse
    const [backgroundCollapsed, setBackgroundCollapsed] = useState(false);
    const [problemCollapsed, setProblemCollapsed] = useState(false);
    const [questionCollapsed, setQuestionCollapsed] = useState(false);
    const [hypothesisCollapsed, setHypothesisCollapsed] = useState(false);
    const [researchCollapsed, setResearchCollapsed] = useState(false);
    const [solutionCollapsed, setSolutionCollapsed] = useState(false);
    const [designCollapsed, setDesignCollapsed] = useState(false);
    const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    const [reflectionCollapsed, setReflectionCollapsed] = useState(false);
    const [currentCollapsed, setCurrentCollapsed] = useState(false);

    return (
        <div className="template-content">
            <VumbleAnchors />
            <h1 id="openrecord">Vumble</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button video-button" type="button">
                        <HeroVumble />
                        <div className={`video vert-vumble-hero ${videoExpanded ? "video-expanded" : "video-hero"}`}>
                            {!value | imageNumber === 1 ? <Player ytid="oeSBy4Hksns" /> : null}
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
                        <p><span className="bold-italic">Idea: </span>Online Video Leaderboard</p>
                        <p><span className="bold-italic">Role: </span>Founder, Product, Frontend, Business</p>
                        <p><span className="bold-italic">Team: </span>Diego Quispe, Brendan Luu, Osebo Akhigbe</p>
                        <p><span className="bold-italic">Tools: </span>Javascript, HTML, SCSS, Sketch, Framer</p>
                        <p><span className="bold-italic">Timeline: </span>2013—2016</p>
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
                        <p>It started when my brother Brendan, expressed his frustration trying to identify which videos were worth watching on YouTube. This was back in 2012 when YouTube's videos had tiny, static thumbnails and a lot of the time the thumbnail didn’t come from the video at all.</p>
                    </div>
                </div>
                <div className={`side-pic-box section ${backgroundCollapsed ? "hide" : ""}`}>
                    <div className="side-pic" onClick={openLightbox2} onKeyDown={openLightbox2} key={2} type="button">
                        <VumbleYouTube />
                        <Caption caption="youtube 2012" />
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
                        <p>Brendan wanted a way to make sure a video was worth his time before he committed his attention to it, to avoid wasting time on content he didn’t care about.</p>
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
                        <p>How could we create a faster way to identify if a video is worth watching?</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${hypothesisCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setHypothesisCollapsed(!hypothesisCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="hypothesis">Hypothesis</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Our hypothesis was short previews would help viewers get a quick taste of what a video is about to help them decide if they wanted to watch the full thing. At that point, we knew nothing about code, so we built a powerpoint prototype as a proof of concept. That powerpoint helped us find Diego to lead develop and we were off to the races.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper">
                                        <button onClick={openLightbox3} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredThree(true)} onMouseLeave={() => setIsHoveredThree(false)}>
                                            <div className="video-inner">
                                                <VumblePowerpointPrototype />
                                                <div className={`video vert-vumble-powerpoint-prototype ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredThree | videoExpanded & imageNumber === 3 ? <Player ytid="w3MviB2DxrU" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox3}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="powerpoint prototype" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block two-column ${researchCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setResearchCollapsed(!researchCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="research">Research</h2>
                    </div>
                    <div className="template-text-body">
                        <p>The original idea was to clip 6 seconds out of longer videos and use them as previews for the full clip. We built a beta and shared it with our friends. We led us to identify a major friction within the experience. Being interrupted right at the climatic part of a clip and prompted to make a decision about whether or not to watch the full clip was disruptive.</p>
                    </div>
                    <div className={`side-pic-box section ${researchCollapsed ? "hide" : ""} ${videoExpanded ? "side-video-expanded" : ""}`}>
                        <div className="side-pic">
                            <span className="gallery">
                                <div className="gallery-outer-wrapper">
                                    <div className="gallery-wrapper">
                                        <div className="gallery-item-wrapper video-wrapper">
                                            <button onClick={openLightbox4} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredFour(true)} onMouseLeave={() => setIsHoveredFour(false)}>
                                                <div className="video-inner">
                                                    <VumbleBetaBuild />
                                                    <div className={`video vert-vumble-beta-build ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                        {isHoveredFour | videoExpanded & imageNumber === 4 ? <Player ytid="W30MgciYZ1U" /> : null}
                                                        {!videoExpanded && <div className="video-engage-instructions">
                                                            <span className="play-button" onClick={openLightbox4}>
                                                                <PlayIcon />
                                                            </span>
                                                            <div className="loading-spinner" />
                                                        </div>}
                                                    </div>
                                                </div>
                                            </button>
                                            <Caption caption="first beta build" />
                                        </div>

                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`template-text-block ${researchCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-body">
                        <p>This learning pushed us to find ways to make the experience less interruptive and after some experimentation, we started using mouse hover to initiate playback. This interaction pattern allows users to preview a clip before fully committing - and if it does intrigue them, they can click and the video will open without disrupting playback. <span className="italic">(Videos on this site work like this. Try it out!)</span></p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper">
                                        <button onClick={openLightbox5} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredFive(true)} onMouseLeave={() => setIsHoveredFive(false)}>
                                            <div className="video-inner">
                                                <VumbleInstantPlayback />
                                                <div className={`video vert-vumble-instant-playback ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredFive | videoExpanded & imageNumber === 5 ? <Player ytid="1avDDfHt6Tg" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox5}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="instant playback" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block two-column ${solutionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setSolutionCollapsed(!solutionCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="solution">Solution approach</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Now that we had a unique value proposition, we needed a community that would benefit from a faster video discovery. We identified Reddit as an ideal opportunity to bring our video viewing experience to scale. There were thousands of people sharing YouTube videos in subreddits, but at that point the viewing experience on Reddit was less than optimal.</p>
                    </div>
                    <div className={`side-pic-box section ${solutionCollapsed ? "hide" : ""} ${videoExpanded ? "side-video-expanded" : ""}`}>
                        <div className="side-pic">
                            <span className="gallery">
                                <div className="gallery-outer-wrapper">
                                    <div className="gallery-wrapper">
                                        <div className="gallery-item-wrapper video-wrapper">
                                            <button onClick={openLightbox6} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredSix(true)} onMouseLeave={() => setIsHoveredSix(false)}>
                                                <div className="video-inner">
                                                    <VumbleRedditResearch />
                                                    <div className={`video vert-vumble-reddit-research ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                        {isHoveredSix | videoExpanded & imageNumber === 6 ? <Player ytid="rzJSss3aMW0" /> : null}
                                                        {!videoExpanded && <div className="video-engage-instructions">
                                                            <span className="play-button" onClick={openLightbox6}>
                                                                <PlayIcon />
                                                            </span>
                                                            <div className="loading-spinner" />
                                                        </div>}
                                                    </div>
                                                </div>
                                            </button>
                                            <Caption caption="reddit research" />
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={`template-text-block two-column ${solutionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-body two-column">
                        <p>Soon after we identified Reddit as the ideal community to target, Reddit announced that it was shutting down its own internal video service - RedditTV. This was the perfect opportunity for us, leaving a gap for those video focused Reddit users. We leveraged that moment to <a className="hover-underine" href="https://www.reddit.com/r/Entrepreneur/comments/3savcn/we_revamped_reddittv_and_its_just_the_beginning/?utm_source=share&utm_medium=web2x">launch</a> Vumble so we could begin collect feedback from Reddit users.</p>
                    </div>
                    <div className={`side-pic-box section ${solutionCollapsed ? "hide" : ""}`}>
                        <div className="gallery-item-wrapper">
                            <button onClick={openLightbox7} className="image-button" type="button">
                                <VumbleRedditTV />
                            </button>
                            <Caption caption="reddit tv shutdown" />
                        </div>
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
                        <p>Stemming from our vision of providing the fastest discovery experience, we focused on making everything about Vumble instant. The top video plays immediately and every subsequent video is triggered on hover for web or when they scroll into view on mobile. And clicking on a video will expand it with the comments from Reddit.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper flex-vumble-reddit-infused">
                                        <button onClick={openLightbox8} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredEight(true)} onMouseLeave={() => setIsHoveredEight(false)}>
                                            <div className="video-inner">
                                                <VumbleRedditInfused />
                                                <div className={`video vert-vumble-reddit-infused ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredEight | videoExpanded & imageNumber === 8 ? <Player ytid="qJqZRtZ7Ees" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox6}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="reddit infused vumble" />
                                    </div>
                                    <div className="gallery-item-wrapper video-wrapper flex-vumble-mobile-prototype">
                                        <button onClick={openLightbox9} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredNine(true)} onMouseLeave={() => setIsHoveredNine(false)}>
                                            <div className="video-inner">
                                                <VumbleMobilePrototype />
                                                <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredNine | videoExpanded & imageNumber === 9 ? <Player ytid="YNHtCqzv0TA" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox9}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="mobile prototype" />
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
                        <h2 id="features">Development</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Understanding your user and their desires is vital in creating a valuable product. We focused on the Reddit community and soliciting their feedback allowed us to simplify video interaction while providing the key info from the Reddit post for a full experience.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper flex-vumble-hover-feature">
                                        <button onClick={openLightbox10} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredTen(true)} onMouseLeave={() => setIsHoveredTen(false)}>
                                            <div className="video-inner">
                                                <VumbleHoverFeature />
                                                <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredTen | videoExpanded & imageNumber === 10 ? <Player ytid="1HO9F9TEhW4" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox10}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="hover to play" />
                                    </div>
                                    <div className="gallery-item-wrapper video-wrapper flex-vumble-async-comments">
                                        <button onClick={openLightbox11} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredEleven(true)} onMouseLeave={() => setIsHoveredEleven(false)}>
                                            <div className="video-inner">
                                                <VumbleAsyncComments />
                                                <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredEleven | videoExpanded & imageNumber === 11 ? <Player ytid="nd_Uv7FC2JM" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox11}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="async comments" />
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper flex-vumble-arrows-autoplay">
                                        <button onClick={openLightbox12} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredTwelve(true)} onMouseLeave={() => setIsHoveredTwelve(false)}>
                                            <div className="video-inner">
                                                <VumbleArrowsAutoplay />
                                                <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredTwelve | videoExpanded & imageNumber === 12 ? <Player ytid="2RnP4mm_YaI" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox12}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="left/right arrows" />
                                    </div>
                                    <div className="gallery-item-wrapper video-wrapper flex-vumble-clip-post">
                                        <button onClick={openLightbox13} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredThirteen(true)} onMouseLeave={() => setIsHoveredThirteen(false)}>
                                            <div className="video-inner">
                                                <VumbleClipPost />
                                                <div className={`video vert-vumble-clip-post ${videoExpanded ? "video-expanded " : "video-small "}`}>
                                                    {isHoveredThirteen | videoExpanded & imageNumber === 13 ? <Player ytid="PS0_u8hZxuw" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox13}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="trim and post to subreddits" />
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
                        <p>My experience building Vumble defined the course of my professional career. It helped me identify my passion for leading product development and was the impetus for learning to code.</p>
                    </div>
                    <div className="template-text-body">
                        <p>In the process of starting a business, participating in a startup accelerator and connecting with users - I had the opportunity to collaborate with some amazing people that continue to impact my life. I want to thank my teammates, mentors and supporters who believed in me.</p>
                    </div>
                    <div className="template-text-body">
                        <p>---</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${currentCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setCurrentCollapsed(!currentCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="current">Vumble in 2020</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Back in 2017, Vumble’s original codebase fell out of date and stopped working. At that point I had a full time job and didn’t have the time to maintain it. At the end of 2019, I decided to rebuild a lightweight version in React. Check it out at  <a href="https://vumble.com">vumble.com</a>.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper video-wrapper">
                                        <button onClick={openLightbox14} className="image-button video-button" type="button" onMouseEnter={() => setIsHoveredFourteen(true)} onMouseLeave={() => setIsHoveredFourteen(false)}>
                                            <div className="video-inner">
                                                <VumbleV2 />
                                                <div className={`video ${videoExpanded ? "video-expanded" : "video-small"}`}>
                                                    {isHoveredFourteen | videoExpanded & imageNumber === 14 ? <Player ytid="l1dk6Fsi0kE" /> : null}
                                                    {!videoExpanded && <div className="video-engage-instructions">
                                                        <span className="play-button" onClick={openLightbox14}>
                                                            <PlayIcon />
                                                        </span>
                                                        <div className="loading-spinner" />
                                                    </div>}
                                                </div>
                                            </div>
                                        </button>
                                        <Caption caption="vumble v2" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <div className="case-end-links">
                        <Link to="/openrecord/" className="case-item">
                            <div className="case-popup"><Popup text="Case Study: OpenRecord" imgsrc="OpenRecordPopup" /></div>
                            <span className="case-arrow previous"><CaseArrowIcon /></span>
                            <p>+OpenRecord</p>
                        </Link>
                        <Link to="/adhoc/" className="case-item next">
                            <div className="case-popup"><Popup text="Case Study: AdHoc" imgsrc="AdHocPopup" /></div>
                            <span className="case-arrow"><CaseArrowIcon /></span>
                            <p>+AdHoc</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Vumble