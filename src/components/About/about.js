import React, { useState } from "react";
import { Link } from "gatsby";
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
    const [writingCollapsed, setWritingCollapsed] = useState(false);

    return (
        <div className="template-content">
            <AboutAnchors />
            <div className="template-section row">
                <div className="home-headline">
                    <div className="headline headline-length">
                        <h1 id="ryanluu">Ryan Luu</h1>
                        <h4 className="full-headline"><b>Product Leader | Speaker | Mentor</b></h4>
                        <h4 className="short-headline"><b>PM | Speaker | Mentor</b></h4>
                    </div>
                    <div className="side-pic-box headshot-top">
                        <div className="side-pic about" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                            <Headshot />
                        </div>
                    </div>
                </div>
            </div>
            <div className="template-section row">
                <div className={`template-text-block two-column ${aboutCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setAboutCollapsed(!aboutCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="about">About</h2>
                    </div>
                    <div className="template-text-body">
                        {/* <p>Sharing stories of the product leaders, designers, and engineers behind the products that shape our world.</p>
                        <br></br> */}
                        <p>Currently, Director of Product at The Washington Post. Living in LA 🌴</p>
                    </div>
                </div>
                <div className={`side-pic-box headshot-side ${aboutCollapsed ? "hide" : ""}`}>
                    <div className="about-pic" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                        <Headshot />
                    </div>
                </div>
            </div>

            <div className="template-section">
                <div className={`template-text-block ${connectCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setConnectCollapsed(!connectCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="lets-talk">Speaking</h2>
                    </div>
                    <div className="template-text-body">
                        <p>I'm always eager to share knowledge and insights with others through speaking engagements such as conferences and podcasts. Let's collaborate to inspire, educate, and engage audiences everywhere - <a href="mailto:rytluu@gmail.com">rytluu@gmail.com</a>.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${writingCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setWritingCollapsed(!writingCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="writing">Writing</h2>
                    </div>
                    <div className="template-text-body">
                        <ul className="listtype-casestudy" >
                            <li>
                                <Link to="/journaldaily/" className="case-item">
                                    <div className="case-popup"><Popup text="Blog Post: Journal Daily" imgsrc="JournalPopup" /></div>
                                    <p>+Learnings From Journaling Daily</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/remotework/" className="case-item">
                                    <div className="case-popup"><Popup text="Blog Post: Remote Work" imgsrc="RemotePopup" /></div>
                                    <p>+Strategies For Remote Life</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="template-section">
                <div className={`template-text-block ${productCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setProductCollapsed(!productCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="product">Product Management</h2>
                    </div>
                    <div className="template-text-body">
                        <ul className="listtype-casestudy" >
                            <li className="link-coming-soon"><p>+Washington Post <span className="italic">(coming soon)</span></p></li>
                            <li>
                                <Link to="/adhoc/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: AdHoc" imgsrc="AdHocPopup" /></div>
                                    <p>+AdHoc</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/vumble/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: Vumble" imgsrc="VumblePopup" /></div>
                                    <p>+Vumble</p>
                                </Link>
                            </li>
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
                        <ul className="listtype-casestudy" >
                            <li>
                                <Link to="/openrecord/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: OpenRecord" imgsrc="OpenRecordPopup" /></div>
                                    <p>+OpenRecord</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/neat/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: Neat" imgsrc="NeatPopup" /></div>
                                    <p>+Neat</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/ourluubeginning/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: OurLuuBeginning" imgsrc="OLBPopup" /></div>
                                    <p>+OurLuuBeginning</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/fastropelabs/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: Fastrope Labs" imgsrc="FastropePopup" /></div>
                                    <p>+Fastrope Labs</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/humblevc/" className="case-item">
                                    <div className="case-popup"><Popup text="Case Study: Humble Venture Capital" imgsrc="HumblePopup" /></div>
                                    <p>+Humble VC</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            
        </div >
    )
}

export default About