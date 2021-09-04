import React, { useState } from "react";
import { Link } from "gatsby";
import JournalAnchors from "../01JournalDaily/anchorsJournalDaily";
import MindPrism from "../01JournalDaily/images/MindPrism";
import TreasureMap from "../01JournalDaily/images/TreasureMap";
import TinyGains from "../01JournalDaily/images/TinyGains";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import Map from "./images/Map";
import DeskCali from "./images/DeskCali";
import DeskChicago from "./images/DeskChicago";
import DeskMiami from "./images/DeskMiami";
import Posture from "./images/Posture";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import Caption from "../../components/Caption/caption";
import Popup from "../../components/Popup/popup";
import { setImageNumber, setImageGallery, useGlobalState } from '../../state';


const WorkRemote = () => {
    //Lightbox - Journal
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(3);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }

    //Collapse - Journal
    const [planCollapsed, setPlanCollapsed] = useState(false);
    const [frictionCollapsed, setFrictionCollapsed] = useState(false);
    const [journeyCollapsed, setJourneyCollapsed] = useState(false);
    const [takeawayCollapsed, setTakeawayCollapsed] = useState(false);

    return (
        <div className="template-content">
            {/* <JournalAnchors /> */}
            <h1 id="remotework">Strategies for Remote Life</h1>
            <div className="template-section">
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p>COVID changed the way we work. Remote became essential and we all adapted to video calls and Slack for collaborating. That said, our inability to be together untied us from the office and unlocked a freedom to travel.</p>
                    </div>
                    <div className="template-text-body side-by-side">
                        <div className="template-text-body multi-p">
                            <p className="first-p">So at the start of the year, my wife and I took advantage of this new found flexibility and embarked on a 6 month road trip across the country. We visited 6 of the largest cities in the US staying in Airbnbs for a month at a time and picked up some helpful tricks for working remotely that I’ll dive into in this post.</p>                    
                            <div className="inline-pic-box">
                                <Map />
                                <Caption caption="our cross-country route" />
                            </div>
                            <p>I’ve broken down the tips into 3 areas:</p>                
                            <ol className="listtype-numbered" >
                                <li><p>Planning your travel</p></li>
                                <li><p>Remote friendly accommodations</p></li>
                                <li><p>Remote life ≠ vacation</p></li>
                            </ol>
                        </div>
                        <div className={`side-pic-box inline section hide-mobile`}>
                            <div className="side-pic" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                                <Map />
                                <Caption caption="our cross-country route" />
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>

            {/* Planning */}
            <div className="template-section">
                <div className={`template-text-block ${planCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setPlanCollapsed(!planCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="plan">1. Planning your travel</h2>
                    </div>
                    <div className="template-text-body">
                        <p>There are a lot of questions at the outset. Where do you want to go? For how long? How will you’ll get there? Your answers should stem from your priorities. Maybe you love hiking and want to spend time in the mountains. Or maybe you’re a beach bum and want to soak up the sun. Anything is possible, as long as you can maintain your company’s working hours and a strong wifi connection.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Another important thing to plan around is your method of transportation. My assumption is you’ll either be flying or driving; each one has it’s pros and cons. Planes are great for traveling long distances quickly, but you can only bring what fits in your suitcase. Cars are great for packing and flexibility, but take more effort/time to transition between destinations.</p>
                    </div>
                    <div className="template-text-body">
                        <p>My wife and I chose the car route because it allowed us to bring things to support the remote work lifestyle such a desk, a folding office chair, and a monitor set up. Here is the desk setup that I brought in the car and set up in different Airbnbs.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-remote-desk-cali">
                                        <button className="image-button" type="button">
                                            <DeskCali />
                                        </button>
                                        <Caption caption="cali setup" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-remote-desk-chicago">
                                        <button  className="image-button" type="button">
                                            <DeskChicago />
                                        </button>
                                        <Caption caption="chicago setup" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-remote-desk-miami">
                                        <button className="image-button" type="button">
                                            <DeskMiami />
                                        </button>
                                        <Caption caption="miami setup" />
                                    </div>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="template-text-body">
                        <p>Having a car also gave us the freedom to explore each city to the fullest after work and on the weekends, without having to worry about public transit or Ubering everywhere. If you do choose to fly, it might be worth renting a car at your destination, especially in places that don’t have great public transit.</p>
                    </div>
                    <div className="template-text-body">
                        <p>But at the end of the day, your travel plans will depend on your priorities and circumstances. Just remember, where ever you go, you’ll need to create the time and space to get work done. And the best work gets done when you have remote friendly accommodations.</p>
                    </div>
                </div>
            </div>

            {/* When friction is low, habits are easy */}
            <div className="template-section">
                <div className={`template-text-block ${frictionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setFrictionCollapsed(!frictionCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="friction">2. Remote friendly accommodations</h2>
                    </div>
                    <div className="template-text-body">
                        <p>After figuring out where you’re going and how you’ll get there, the next big question is - what type of accommodations will you need? This will vary greatly based on your plan, but with remote work there are some baselines for maintaining productivity such as strong wifi, a work setup, and reasonably quiet conditions. Also, depending on your length of stay, you may have to orchestrate the basic day to day aspects of life like grocery shopping, doing laundry, cooking, etc.</p>
                    </div>
                    <div className="template-text-body">
                        <p>In our process of finding accommodations, we came up with a list of non-negotiables and nice to haves. Here is a simplified version:</p>
                    </div>
                    <div className="template-text-body">
                        <table>
                            <tr className="top-table-row">
                                <td><i>Non-negotiables</i></td>
                                <td><i>Nice to haves</i></td>
                            </tr>
                            <tr>
                                <td>Bedroom separate from the living area</td>
                                <td>Dedicated parking</td>
                            </tr>
                            <tr>
                                <td>Full kitchen</td>
                                <td>Washer/Dryer</td>
                            </tr>
                            <tr>
                                <td>Wifi</td>
                                <td>Dishwasher</td>
                            </tr>
                            <tr>
                                <td>Private bathroom</td>
                                <td>TV</td>
                            </tr>
                            <tr>
                                <td>AC/Heat</td>
                                <td>Hot Tub (haha)</td>
                            </tr>
                        </table>
                    </div>
                    <div className="template-text-body">
                        <p>Because we were planning to stay in each city for a month at a time, we were looking for apartments rather than hotels. We found the most cost effective approach was renting month long Airbnbs in each city.</p>
                    </div>
                    <div className="template-text-body">
                        <div className="quote-box">
                            <p className="quote"><b><u>PRO TIP</u></b><i>: When you stay at an Airbnb for 4 weeks or more, Airbnb goes from charging a daily rate to a monthly rate with large discounts.</i></p>
                        </div>
                    </div>
                    <div className="template-text-body">
                        <p>Airbnb’s filters are quite dynamic, allowing you to pinpoint accommodations that encompass all of your essentials. But do keep in mind that the price you see in the list of results doesn’t include cleaning and service fees.</p>
                    </div>
                    <div className="template-text-body side-by-side">
                            <p>If I could recommend one thing for your remote work experience it’s to find a way to elevate your computer screen. It helps you avoid straining your neck/back, makes you look more polished on video calls and contributes to a more productive work day.</p>
                            <div className={`side-pic-box inline section`}>
                                <div className="side-pic" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                                    <Posture />
                                    <Caption caption="posture comparison" />
                                </div>
                            </div>
                        </div>
                    <div className="template-text-body">
                        <p>And now that you’ve figured out what type of accommodations you’ll be staying in, you’re ready to start packing for your remote work journey.</p>
                    </div>
                </div>
            </div>

            {/* It's the journey AND the destination */}
            <div className="template-section">
                <div className={`template-text-block ${journeyCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setJourneyCollapsed(!journeyCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="journey">3. It’s the journey AND the destination</h2>
                    </div>
                    <div className="template-text-body side-by-side">
                        <p>When you look at life, there are three perspectives you can take: reflecting on the past, living in the present or planning for the future. There are varying opinions about which frame of time to focus on, but I’m not going to go into any of that. They are all important. I’m going to focus on how journaling serves as the ideal medium for creating balance across these different perspectives of time.</p>
                        <div className={`side-pic-box inline section ${journeyCollapsed ? "hide" : ""}`}>
                            <div className="side-pic" onClick={openLightbox2} onKeyDown={openLightbox2} key={2} type="button">
                                <TreasureMap />
                            </div>
                        </div>
                    </div>
                    <div className="template-text-body">
                        <p><span className="bold underline">Past</span> - Keeping a record of each day makes it easy to reflect on moments of the past. What did I do last Wednesday? Do you remember that time we visited the Hirshhorn Museum for your birthday? Each memory is saved in reverse chronological order allowing me to jump back and reminisce on my experiences and mindset at any point in time. It’s as close to being able to time travel as you can get.</p>
                    </div>
                    <div className="template-text-body">
                        <p><span className="bold underline">Present</span> - Journaling forces me to acknowledge my thoughts each day. What’s happening in my life? How am I feeling? Am I being productive? These questions focus my attention on the present and push me to live in the now. It’s helped me build my awareness of the current moment and embrace the agency I have over my life.</p>
                    </div>
                    <div className="template-text-body">
                        <p><span className="bold underline">Future</span> - A destination provides direction; a target to compel you forward. Taking time to envision my future and set goals enables me to identify what steps to take on my journey. I use my journal as a way to lay out my objectives and hold myself accountable as I work toward my ambitions.</p>
                    </div>
                    <div className="template-text-body">
                        <p>My journal is a time machine, serving as as a portal to the past, grounding me in the present and bringing clarity to where I’m headed.</p>
                    </div>
                </div>
            </div>

            {/* Takeaway */}
            <div className="template-section">
                <div className={`template-text-block ${takeawayCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setTakeawayCollapsed(!takeawayCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="takeaway">Takeaway</h2>
                    </div>
                    <div className="template-text-body">
                        <p>If you’re looking to try journaling out for yourself, I encourage you to go for it! Start small and look for ways to make it easy in your daily flow. If you have any questions about journaling or have your own tips to share - hit me up on twitter @rtluu.</p>
                    </div>
                    <div className="template-text-body side-by-side">
                        <p><i>Extra Note:</i><br />One more note on habits. Good habits breed better habits and their value compounds over time. After I started journaling daily, it led me to pick up other positive habits such as intermittent fasting and an at-home workout routine. Start small and watch the investment in yourself grow across the different facets of your life!</p>
                        <div className={`side-pic-box inline section ${takeawayCollapsed ? "hide" : ""}`}>
                            <div className="side-pic" onClick={openLightbox3} onKeyDown={openLightbox3} key={3} type="button">
                                <TinyGains />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkRemote