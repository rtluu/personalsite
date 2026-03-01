import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
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

    const data = useStaticQuery(graphql`
        query {
            allSiteJson {
                nodes {
                    name
                    headline
                    shortHeadline
                    bio
                    email
                    speakingText
                }
            }
            allNavigationJson {
                nodes {
                    section
                    items { title path status popupText popupImage homeLabel }
                }
            }
        }
    `)

    const site = data.allSiteJson.nodes[0]
    const nodes = data.allNavigationJson.nodes
    const getSection = s => nodes.find(n => n.section === s)?.items || []
    const writingItems = getSection("writing")
    const productItems = getSection("product")
    const devItems     = getSection("development")

    return (
        <div className="template-content">
            <AboutAnchors />
            <div className="template-section row">
                <div className="home-headline">
                    <div className="headline headline-length">
                        <h1 id="ryanluu">{site.name}</h1>
                        <h4 className="full-headline"><b>{site.headline}</b></h4>
                        <h4 className="short-headline"><b>{site.shortHeadline}</b></h4>
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
                    <div className="template-text-body text-intro">
                        <p>{site.bio}</p>
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
                        <p>{site.speakingText} — <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
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
                        <ul className="listtype-casestudy">
                            {writingItems.map(item => (
                                <li key={item.path}>
                                    <Link to={item.path} className="case-item">
                                        <div className="case-popup">
                                            <Popup text={item.popupText} imgsrc={item.popupImage} />
                                        </div>
                                        <p>{item.homeLabel}</p>
                                    </Link>
                                </li>
                            ))}
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
                        <ul className="listtype-casestudy">
                            {productItems.map(item => (
                                item.status === "coming-soon" ? (
                                    <li key={item.path} className="link-coming-soon">
                                        <p>{item.homeLabel} <span className="italic">(coming soon)</span></p>
                                    </li>
                                ) : (
                                    <li key={item.path}>
                                        <Link to={item.path} className="case-item">
                                            <div className="case-popup">
                                                <Popup text={item.popupText} imgsrc={item.popupImage} />
                                            </div>
                                            <p>{item.homeLabel}</p>
                                        </Link>
                                    </li>
                                )
                            ))}
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
                        <ul className="listtype-casestudy">
                            {devItems.map(item => (
                                <li key={item.path}>
                                    <Link to={item.path} className="case-item">
                                        <div className="case-popup">
                                            <Popup text={item.popupText} imgsrc={item.popupImage} />
                                        </div>
                                        <p>{item.homeLabel}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
