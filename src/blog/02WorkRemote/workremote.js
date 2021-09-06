import React, { useState } from "react";
import { Link } from "gatsby";
import WorkRemoteAnchors from "../02WorkRemote/anchorsWorkRemote";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import Map from "./images/Map";
import DeskCali from "./images/DeskCali";
import DeskChicago from "./images/DeskChicago";
import DeskMiami from "./images/DeskMiami";
import Posture from "./images/Posture";
import Packing from "./images/Packing";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import Caption from "../../components/Caption/caption";
import Popup from "../../components/Popup/popup";
import { setImageNumber, setImageGallery, useGlobalState } from '../../state';


const WorkRemote = () => {
    //Lightbox - Journal
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(6);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }
    function openLightbox4() { setImageNumber(4); update(!value); }
    function openLightbox5() { setImageNumber(5); update(!value); }
    function openLightbox6() { setImageNumber(6); update(!value); }

    //Collapse - Journal
    const [planCollapsed, setPlanCollapsed] = useState(false);
    const [accommodationsCollapsed, setAccommodationsCollapsed] = useState(false);
    const [vacationCollapsed, setVacationCollapsed] = useState(false);
    const [takeawayCollapsed, setTakeawayCollapsed] = useState(false);

    return (
        <div className="template-content">
            <WorkRemoteAnchors />
            <h1 id="remotework">Strategies for Remote Life</h1>
            <div className="template-section">
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p>COVID changed the way we work. Remote became essential and we all adapted to video calls and Slack for collaborating. That said, our inability to be together untied us from the office and unlocked a freedom to travel.</p>
                    </div>
                    <div className="template-text-body side-by-side">
                        <div className="template-text-body multi-p">
                            <p className="first-p">So at the start of the year, my wife and I took advantage of this new found flexibility and embarked on a 6 month road trip across the country. We visited 6 of the largest cities in the US staying in Airbnbs for a month at a time and picked up some helpful tricks for working remotely that I’ll dive into in this post.</p>                    
                            <div className="inline-pic-box" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
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

            {/* 1. Planning your travel */}
            <div className="template-section">
                <div className={`template-text-block ${planCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setPlanCollapsed(!planCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="planning">1. Planning your travel</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Remote life is a blast. If you have the flexibility to work remotely, I urge you to go for it! With good planning, you’ll be able to find an approach that works well for you. Just remember to maintain a balance between work and play so you can continue to deliver results while on the road.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Another important thing to plan around is your method of transportation. My assumption is you’ll either be flying or driving; each one has it’s pros and cons. Planes are great for traveling long distances quickly, but you can only bring what fits in your suitcase. Cars are great for packing and flexibility, but take more effort/time to transition between destinations.</p>
                    </div>
                    <div className="template-text-body">
                        <p>My wife and I chose the car route because it allowed us to bring things to support the remote work lifestyle such a desk, a folding office chair, and a monitor set up. Here is the desk setup that I brought in the car and set up in different Airbnbs.</p>
                        <span className="gallery">
                            <div className="gallery-outer-wrapper">
                                <div className="gallery-wrapper">
                                    <div className="gallery-item-wrapper flex-remote-desk-cali" onClick={openLightbox2} onKeyDown={openLightbox2} key={2} type="button">
                                        <button className="image-button" type="button">
                                            <DeskCali />
                                        </button>
                                        <Caption caption="cali setup" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-remote-desk-chicago" onClick={openLightbox3} onKeyDown={openLightbox3} key={3} type="button">
                                        <button  className="image-button" type="button">
                                            <DeskChicago />
                                        </button>
                                        <Caption caption="chicago setup" />
                                    </div>
                                    <div className="gallery-item-wrapper flex-remote-desk-miami" onClick={openLightbox4} onKeyDown={openLightbox4} key={4} type="button">
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

            {/* 2. Remote friendly accommodations */}
            <div className="template-section">
                <div className={`template-text-block ${accommodationsCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setAccommodationsCollapsed(!accommodationsCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="accommodations">2. Remote friendly accommodations</h2>
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
                                <div className="side-pic" onClick={openLightbox5} onKeyDown={openLightbox5} key={5} type="button">
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
                <div className={`template-text-block ${vacationCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setVacationCollapsed(!vacationCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="not-vacation">3. Remote life ≠ vacation</h2>
                    </div>
                    <div className="template-text-body">
                        <p>During remote work, it’s all too easy to fall into the vacation mindset. Novel places trick our brains into thinking, “It’s break time!” Now, I’m not saying it’s bad to enjoy your travels, I encourage you too, but there is a balance to find between having fun while being remote and remaining productive. How do you reach that equilibrium?</p>
                    </div>
                    <div className="template-text-body">
                        <p>One technique I leveraged throughout my travels was maintaining routines. For me, I’m a big fan of my morning routine. After I wake up, I brush my teeth, drink water and start an at home workout routine while listening to audio books. This set of activities wakes me up and gets me into a rhythm as I start my day.</p>
                    </div>
                    <div className="template-text-body">
                        <p>There are other routines that have been helpful like cooking, journaling and sharing gratitude with my wife - all things that keep me grounded no matter where I am.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Your routine is unique to you, but whatever that looks like, do your best to keep up with those habits while working remotely.</p>
                    </div>
                    <div className="template-text-body">
                        <p>A few tricks to make remote work sustainable:</p>
                        <ol className="listtype-numbered" >
                            <li><p><u>At home workouts</u> - I’d recommend <a className="hover-underine" href="https://www.youtube.com/channel/UCK9JEqf7LBBx3tkrPx2xvbQ">BullyJuice</a> and <a className="hover-underine" href="https://www.youtube.com/channel/UCpQ34afVgk8cRQBjSJ1xuJQ">MadFit</a> because they both have bodyweight and dumbbell exercises that you can do anywhere.</p></li>
                            <li><p><u>Cooking meals</u> - A great way to eat healthy and save money. Choose lodging with a full kitchen, some may even come stocked with basic ingredients to make this even easier.</p></li>
                            <li><p><u>Bring some basics</u> - Depending on your travel situation, bringing a set of things you're bound to need is very helpful. We took advantage of having a car and brought a filtered water pitcher, a Keurig, crock pot, yoga mats, and all were extremely useful.</p></li>
                        </ol>
                    </div>
                    <div className="template-text-body full-img" onClick={openLightbox6} onKeyDown={openLightbox6} key={6} type="button">
                        <Packing />
                        <Caption className="full-img" caption="packing for our transition between denver & chicago" />
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
                        <p>Remote life is a blast. If you have the flexibility to work remotely, I urge you to go for it! With good planning, you’ll be able to find an approach that works well for you. Just remember to maintain a balance between work and play so you can continue to deliver results while on the road.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkRemote