import { Link } from "gatsby";
import React from "react";
import "./about.scss";
import Lightbox from "./lightboxAbout"
import Headshot from "./images/Headshot";
import AboutAnchors from "./anchorsAbout";
import { setImageNumber, setImageGallery, lightboxOpen, useGlobalState } from '../../state';

const About = () => {
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(1);

    function openLightbox1() { setImageNumber(1); lightboxOpen(); }

    return (
        <div className="template-content">
            <Lightbox currentImage={imageNumber} />
            <AboutAnchors />
            <h1 id="ryanluu">Ryan Luu - Personal Site</h1>
            <div className="template-section row">
                <div className="template-text-block two-column">
                    <h2 id="about">About</h2>
                    <p>Laughing, learning, and loving. By day, I solve problems as a Senior PM at The Washington Post and at night I create projects with cool people. Currently residing in DC with my fiancée and playing basketball 🏀 whenever I get the chance.</p>
                </div>
                <div className="about-pic-box">
                    <div className="about-pic" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                        <Headshot />
                    </div>
                    {/* <h5 className="caption">Hi, I'm Ryan <span role="img" aria-label="wave" className="caption-emoji">👋</span></h5> */}
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block two-column full-on-phone">
                    <h2 id="product">Product</h2>
                    <p>Product management is a special combo of leadership and coordination. I get to be involved with projects from the first day of planning all the way through multiple iterations.</p>
                    <ul className="listtype-casestudy" >
                        <li><p><Link to="/washingtonpost/">+Washington Post</Link></p></li>
                        <li><p><Link to="/adhoc">+Ad Hoc</Link></p></li>
                        <li><p><Link to="/vumble/">+Vumble</Link></p></li>
                    </ul>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <h2 id="development">Development</h2>
                    <p>When I'm not leading product teams, I'm hacking on digital projects with friends or building experiences for cool companies.</p>
                    <ul className="listtype-casestudy" >
                        <li><p><Link to="/openrecord/">+OpenRecord</Link></p></li>
                        <li><p><Link to="/neat/">+Neat</Link></p></li>
                        <li><p><Link to="/OurLuuBeginning/">+OurLuuBeginning</Link></p></li>
                        <li><p><Link to="/fastrope/">+Fastrope Labs</Link></p></li>
                        <li><p><Link to="/humblevc/">+Humble VC</Link></p></li>
                    </ul>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <h2 id="lets-talk">Let's talk</h2>
                    <ul className="listtype-casestudy" >
                        <li><a href="mailto:rluu34@gmail.com"><p>Email</p></a></li>
                        <li><a href="https://linkedin.com/in/ryanluu"><p>LinkedIn</p></a></li>
                        <li><a href="https://twitter.com/rtluu"><p>Twitter</p></a></li>
                        <li><a href="https://github.com/rtluu"><p>Github</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About