import { Link } from "gatsby";
import React from "react";
import "./about.scss";
import Lightbox from "./lightboxAbout"
import Headshot from "./images/Headshot";
import AboutAnchors from "./anchorsAbout";
import { setImageNumber, setImageGallery, lightboxOpen, useGlobalState } from '../../state';

const About = () => {
    const [value] = useGlobalState('menuActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(1);

    function openLightbox1() { setImageNumber(1); lightboxOpen(); }

    return (
        <div className="template-content">
            <Lightbox currentImage={imageNumber} />
            <AboutAnchors />
            <h1 id="ryanluu">Ryan Luu - Personal Site</h1>
            <div className="template-section row">
                <div className="template-text-block">
                    <p id="about" className="bold-italic">About:</p>
                    <p><span role="img" aria-label="live">🏡</span> Live in DC</p>
                    <p><span role="img" aria-label="work">💼</span> Senior PM @<span className={`washpost ${value ? "menu-open" : ""}`} /></p>
                    <p><span role="img" aria-label="build">💻</span> Design & code for fun</p>
                    <p><span role="img" aria-label="wedding">💍</span> Engaged to K</p>
                    <p><span role="img" aria-label="college">🐢</span> UMD Alum</p>
                    <p><span role="img" aria-label="basketball">🏀</span> Ball is life</p>
                </div>
                <div className="about-pic-box">
                    <div className="about-pic" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                        <Headshot />
                    </div>
                    <h5 className="caption">Hi, I'm Ryan <span role="img" aria-label="wave" className="caption-emoji">👋</span></h5>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <p id="product" className="bold-italic">Product:</p>
                    <p><Link to="/washingtonpost/">+Washington Post</Link></p>
                    <p><Link to="/adhoc">+Ad Hoc</Link></p>
                    <p><Link to="/vumble/">+Vumble</Link></p>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <p id="projects" className="bold-italic">Projects:</p>
                    <p><Link to="/openrecord/">+OpenRecord</Link></p>
                    <p><Link to="/neat/">+Neat</Link></p>
                    <p><Link to="/OurLuuBeginning/">+OurLuuBeginning</Link></p>
                    <p><Link to="/fastrope/">+Fastrope Labs</Link></p>
                    <p><Link to="/humblevc/">+Humble VC</Link></p>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <p id="connect" className="bold-italic">Connect:</p>
                    <ul>
                        <li><a href="mailto:rluu34@gmail.com"><p>Email</p></a></li>
                        <li><a href="https://linkedin.com/in/ryanluu"><p>LinkedIn</p></a></li>
                        <li><a href="https://twitter.com/rtluu"><p>Twitter</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About