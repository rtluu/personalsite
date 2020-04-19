import { Link } from "gatsby";
import React from "react";
import Headshot from "./images/Headshot";
import "./about.scss";
import { useGlobalState } from '../../state';

const About = () => {
    const [value] = useGlobalState('menuActive');
    return (
        <div className="template-content">
            <h1>Ryan Luu - Personal Site</h1>
            <div className="template-section row">
                <div className="template-text-block">
                    <p className="bold-italic">A little about me:</p>
                    <p><span role="img" aria-label="live">🏡</span> Live in DC</p>
                    <p><span role="img" aria-label="work">💼</span> Senior PM @<span className={`washpost ${value ? "menu-open" : ""}`} /></p>
                    <p><span role="img" aria-label="build">💻</span> Design and code for fun</p>
                    <p><span role="img" aria-label="wedding">💍</span> Engaged to K</p>
                    <p><span role="img" aria-label="college">🐢</span> UMD Alum</p>
                    <p><span role="img" aria-label="basketball">🏀</span> Ball is life</p>
                </div>
                <div className="about-pic-box">
                    <div className="about-pic">
                        <Headshot />
                    </div>
                    <h6 className="caption">Hi, I'm Ryan <span role="img" aria-label="wave" className="caption-emoji">👋</span></h6>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <p className="bold-italic">Product:</p>
                    <p><Link to="/washingtonpost/">+Washington Post</Link></p>
                    <p><Link to="/adhoc">+Ad Hoc</Link></p>
                    <p><Link to="/vumble/">+Vumble</Link></p>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <p className="bold-italic">Projects:</p>
                    <p><Link to="/openrecord/">+OpenRecord</Link></p>
                    <p><Link to="/neat/">+Neat</Link></p>
                    <p><Link to="/OurLuuBeginning/">+OurLuuBeginning</Link></p>
                    <p><Link to="/fastrope/">+Fastrope Labs</Link></p>
                    <p><Link to="/humblevc/">+Humble VC</Link></p>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-block">
                    <p className="bold-italic">Let's connect</p>
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