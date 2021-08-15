import React, { useState } from "react";
import { Link } from "gatsby";
import JournalAnchors from "../01JournalDaily/anchorsJournalDaily";
import MindPrism from "../01JournalDaily/images/MindPrism";
import TreasureMap from "../01JournalDaily/images/TreasureMap";
import TinyGains from "../01JournalDaily/images/TinyGains";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import Caption from "../../components/Caption/caption";
import Popup from "../../components/Popup/popup";
import { setImageNumber, setImageGallery, useGlobalState } from '../../state';


const JournalDaily = () => {
    //Lightbox - Journal
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(3);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }

    //Collapse - Journal
    const [writeCollapsed, setWriteCollapsed] = useState(false);
    const [frictionCollapsed, setFrictionCollapsed] = useState(false);
    const [journeyCollapsed, setJourneyCollapsed] = useState(false);
    const [takeawayCollapsed, setTakeawayCollapsed] = useState(false);

    return (
        <div className="template-content">
            {/* <JournalAnchors /> */}
            <h1 id="journaldaily">Work Remote Tips & Tricks</h1>
            <div className="template-section">
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p>During COVID, my wife and I decided to take advantage of my ability to work remotely by embarking on a 6 month, 6 city road trip across the US. It was the most transformative experience of my life. In this post, I’ll share a few things I learned that might help if you’re considering doing something similar or just looking at working remotely in general.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Before we go further, I’d like to clarify one thing right from the get go. Working remotely is not vacation. Vacation is an extended period of leisure spent away from home. Living remotely is forgoing a conventional home and working while traveling. Later in this post, I’ll dive into some techniques I used to establish boundaries for work and play that kept me on track during my journey.</p>                    
                    </div>
                </div>
            </div>

            <span className="divider"/>

            {/* Planning */}
            <div className="template-section">
                <div className={`template-text-block ${writeCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setWriteCollapsed(!writeCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="write">1. Write Something</h2>
                    </div>
                    <div className="template-text-body">
                        <p>There is only one rule. “<i>Write something for every day.</i>" 1 word, 1 pic, 1 link, 1 video…. something. ‘For’ is actually a key word in that last sentence. It’s not about writing something down on the exact day that it happened, but rather writing down something for each day. There are days when I may miss writing something down and that’s totally fine. I’ll just go back the next day and fill in whatever happened. I live a dynamic life and instead of being overly stringent about journaling every day, I journal when it works best for me.</p>
                    </div>
                    <div className="template-text-body side-by-side">
                        <p>The true importance is that I reflect on each day, and capture something to cement that moment in time. I’ve learned that the saying “a picture is worth a thousand words” is true in the context of journaling. It’s amazing how much of a day I can remember from one image. That one cue unlocks a slew of surrounding memories. It could be anything. A screenshot, selfie, food pic, or even a random snap with no posing at all: the imagery provides context that helps me recollect the deeper details of any particular experience.</p>
                        <div className={`side-pic-box inline section ${writeCollapsed ? "hide" : ""}`}>
                            <div className="side-pic" onClick={openLightbox1} onKeyDown={openLightbox1} key={1} type="button">
                                <MindPrism />
                            </div>
                        </div>
                    </div>
                    <div className="template-text-body">
                        <p>This goes a step further with a video or audio recordings. I cherish coming across a funny clip of a friend dancing like a goofball or listening to an insightful audio recording from a deep conversation. The richer the media, the richer the recall - and the combo of text, visuals and sound is the best of all.</p>
                    </div>
                </div>
            </div>

            {/* When friction is low, habits are easy */}
            <div className="template-section">
                <div className={`template-text-block ${frictionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setFrictionCollapsed(!frictionCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="friction">2. When friction is low, habits are easy</h2>
                    </div>
                    <div className="template-text-body">
                        <p>I recently read a book called, “Atomic Habits” by James Clear that explains the techniques for building good habits. One of the messages that stuck with me from the book was, “When friction is low, habits are easy.” So true.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Here’s an example. Say there are two people who want to create a new habit of running everyday. One has a treadmill at home and the other runs on a treadmill at the gym. Each goes through a set of steps before they can start running.</p>
                    </div>
                    <div className="template-text-body">
                        <table>
                            <tr className="top-table-row">
                                <td></td>
                                <td><i>Run at home</i></td>
                                <td><i>Run at gym</i></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Put on running clothes</td>
                                <td>Put on running clothes</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Start treadmill</td>
                                <td>Get in car</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Start running</td>
                                <td>Drive to gym</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td></td>
                                <td>Put gymbag in locker</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td></td>
                                <td>Wait for open treadmill</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td></td>
                                <td>Start treadmill</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td></td>
                                <td>Start running</td>
                            </tr>
                        </table>
                    </div>
                    <div className="template-text-body">
                        <p>The person running at the gym has to take over twice as many steps to start running. Now it’s not impossible for the person at the gym to create a daily running habit, but those extra steps require additional time and effort making it more difficult to stay consistent. The same principle applies to journaling. The easier to start, the easier to stay consistent.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Ease of use is why I decided to use Dropbox Paper for my digital journal. Paper is available on my phone, tablet, and computer; making it easy to capture what I’m doing no matter where my day takes me. Paper’s integration with Dropbox is another key element. I use Dropbox for my file management making it simple for me to add files into my Paper doc; and they elegantly embed as photos, videos, urls etc.</p>
                    </div>
                    <div className="template-text-body">
                        <p>While the Dropbox ecosystem works well for me, I encourage you to choose whatever system that has the least friction for your daily routine.</p>
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

export default JournalDaily