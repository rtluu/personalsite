import { Link } from "gatsby";
import React, { useState } from "react";
import "./about.scss";
import Lightbox from "./lightboxAbout"
import Headshot from "./images/Headshot";
import AboutAnchors from "./anchorsAbout";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import Popup from "../Popup/popup";
import { setImageNumber, setImageGallery, lightboxOpen, useGlobalState } from '../../state';

const About = () => {
    //Lightbox - About
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(1);
    function openLightbox1() { setImageNumber(1); lightboxOpen(); }

    //Collapse - About
    const [aboutCollapsed, setAboutCollapsed] = useState(false);
    const [productCollapsed, setProductCollapsed] = useState(false);
    const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    const [connectCollapsed, setConnectCollapsed] = useState(false);

    return (
        <div className="template-content">
            <Lightbox currentImage={imageNumber} />
            <AboutAnchors />
            <h1 id="ryanluu">Ryan Luu - Personal Site</h1>
            <div className="template-section row">
                <div className={`template-text-block two-column ${aboutCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setAboutCollapsed(!aboutCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="about">About</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Laughing, learning, and loving. By day, I solve problems as a Senior PM at The Washington Post and at night I create projects with cool people. Currently residing in DC with my fiancée and playing basketball 🏀 whenever I get the chance.</p>
                    </div>
                </div>
                <div className={`about-pic-box ${aboutCollapsed ? "hide" : ""}`}>
                    <div className="about-pic" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                        <Headshot />
                    </div>
                    {/* <h5 className="caption">Hi, I'm Ryan <span role="img" aria-label="wave" className="caption-emoji">👋</span></h5> */}
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block full-on-phone ${!aboutCollapsed ? "two-column" : ""} ${productCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setProductCollapsed(!productCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="product">Product</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Product management is a special combo of leadership and coordination. I get to be involved with projects from the first day of planning all the way through multiple iterations.</p>
                        <ul className="listtype-casestudy" >
                            <li><p><Link to="/washingtonpost/">+Washington Post</Link></p></li>
                            <li><p><Link to="/adhoc">+Ad Hoc</Link></p></li>
                            <li><p><Link to="/vumble/">+Vumble</Link></p></li>
                        </ul>
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
                        <p>When I'm not leading product teams, I'm hacking on digital projects with friends or building experiences for cool companies.</p>
                        <ul className="listtype-casestudy" >
                            <li><p><Link to="/openrecord/">+OpenRecord</Link></p></li>
                            <li><p><Link to="/neat/">+Neat</Link></p></li>
                            <li><p><Link to="/OurLuuBeginning/">+OurLuuBeginning</Link></p></li>
                            <li><p><Link to="/fastrope/">+Fastrope Labs</Link></p></li>
                            <li>
                                <Link to="/humblevc/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: Humble Venture Capital" /></div>
                                    <p>+Humble VC</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${connectCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setConnectCollapsed(!connectCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="lets-talk">Let's talk</h2>
                    </div>
                    <div className="template-text-body">
                        <ul className="listtype-casestudy" >
                            <li><a href="mailto:rluu34@gmail.com"><p>Email</p></a></li>
                            <li><a href="https://linkedin.com/in/ryanluu"><p>LinkedIn</p></a></li>
                            <li><a href="https://twitter.com/rtluu"><p>Twitter</p></a></li>
                            <li><a href="https://github.com/rtluu"><p>Github</p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About