import React, { useState } from "react";
import { Link } from "gatsby";
import Lightbox from "./lightboxOurLuuBeginning"
import HeroOLB from "./images/HeroOLB";
import OLBAccommodations from "./images/OLBAccommodations";
import OLBExpanded from "./images/OLBExpanded";
import OLBFooter from "./images/OLBFooter";
import OLBGrid from "./images/OLBGrid";
import OLBSchedule from "./images/OLBSchedule";
import OLBAnchors from "./anchorsOurLuuBeginning";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import Popup from "../../components/Popup/popup";
import { setImageNumber, setImageGallery, useGlobalState } from '../../state';


const Fastrope = () => {
    //Lightbox - About
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(6);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); }
    function openLightbox6() { setImageNumber(6); update(!value); }

    //Collapse - OurLuuBeginning
    const [objectiveCollapsed, setObjectiveCollapsed] = useState(false);
    const [requirementsCollapsed, setRequirementsCollapsed] = useState(false);
    // const [processCollapsed, setProcessCollapsed] = useState(false);
    // const [developmentCollapsed, setDevelopmentCollapsed] = useState(false);
    // const [reflectionCollapsed, setReflectionCollapsed] = useState(false);

    return (
        <div className="template-content">
            <Lightbox currentImage={imageNumber} />
            <OLBAnchors />
            <h1 id="ourluubeginning">OurLuuBeginning</h1>
            <div className="template-section">
                <div className="hero">
                    <button onClick={openLightbox1} key={1} className="image-button" type="button">
                        <HeroOLB />
                    </button>
                </div>
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p><span className="bold-italic">Client: </span>OurLuuBeginning</p>
                        <p><span className="bold-italic">Role: </span>Design, Frontend</p>
                        <p><span className="bold-italic">Tools: </span>Figma, React, Styled Components</p>
                        <p><span className="bold-italic">Timeline: </span>2019</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${objectiveCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setObjectiveCollapsed(!objectiveCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="objective">Objective</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Create a wedding website to inform guests about our wedding details and document our marriage journey. </p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className={`template-text-block ${requirementsCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setRequirementsCollapsed(!requirementsCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="requirements">Requirements</h2>
                    </div>
                    <div className="template-text-body">
                        <ul className="listtype-bullet listindent1" >
                            <li><span className="bullet">&bull;</span><p>Guests can access all the relevant wedding info </p></li>
                            <li><span className="bullet">&bull;</span><p>Ability to fully customize the UI and add pages for capturing the wedding after it’s over</p></li>
                            <li><span className="bullet">&bull;</span><p>Pages to include: Homepage, Schedule, Accommodations, Registry, Wedding Party, Photos, Proposal</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className="template-section">
                <div className={`template-text-block ${processCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setProcessCollapsed(!processCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="process">Process</h2>
                    </div>
                    <div className="template-text-body">
                        <ol className="listtype-numbered" >
                            <li><p>Client interview and requirements gathering</p></li>
                            <li><p>Design synthesis and technical discovery</p></li>
                            <li><p>Develop, deploy, feedback, adjust</p></li>
                            <li><p>Final delivery and asset transfer</p></li>
                        </ol>
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
                        <p>The focus for my development was creating a snappy, efficient site while meeting the design requirements laid out by the Fastrope design team. I made it a point to build the components in a modular format for reusability and ease in adjustment.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper ">
                                        <button onClick={openLightbox2} className="image-button" type="button">
                                            <FastropeTeam />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox3} className="image-button" type="button">
                                            <FastropeContact />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </span>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper second-gallery-row">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper ">
                                        <button onClick={openLightbox4} className="image-button" type="button">
                                            <FastropeServices />
                                        </button>
                                    </div>
                                    <div className="gallery-item-wrapper">
                                        <button onClick={openLightbox5} className="image-button" type="button">
                                            <FastropePortfolio />
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
                        <p>Working with the Fastrope team was very smooth, with a clear vision for what they wanted to build along with a stellar team that was easy to communicate with. Working on this project gave me another opportunity to refine my development in React and control the full development pipeline from first commit through deployment.</p>
                    </div>
                </div>
            </div>
            <div className="template-section">
                <div className="template-text-body">
                    <Link to="/humblevc/" className="case-item">
                        <div className="case-popup"><Popup text="Case Study: Humble Venture Capital" imgsrc="HumblePopup" /></div>
                        <p><span className="case-arrow previous"><CaseArrowIcon /></span>+Humble Venture Capital</p>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default Fastrope