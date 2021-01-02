import React, { useState } from "react";
import { Link } from "gatsby";
import MindPrism from "./images/MindPrism";
import ArrowIcon from "../../icons/arrow-icon.inline.svg";
import CaseArrowIcon from "../../icons/case-arrow-icon.inline.svg";
import Caption from "../../components/Caption/caption";
import Popup from "../../components/Popup/popup";
import { setImageNumber, setImageGallery, useGlobalState } from '../../state';


const JournalDaily = () => {
    //Lightbox - Humble
    const [value, update] = useGlobalState('lightboxActive');
    const [imageNumber] = useGlobalState('imageNumber');
    setImageGallery(6);
    function openLightbox1() { setImageNumber(1); update(!value); }
    function openLightbox2() { setImageNumber(2); update(!value); }
    function openLightbox3() { setImageNumber(3); update(!value); }

    //Collapse - Journal
    const [writeCollapsed, setWriteCollapsed] = useState(false);
    const [frictionCollapsed, setFrictionCollapsed] = useState(false);

    return (
        <div className="template-content">
            {/* <JournalAnchors /> */}
            <h1 id="journal">3 Learnings from Journaling Daily in 2020</h1>
            <div className="template-section">
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p>What a wild year it’s been. 2020 was such a mess, but I picked up a new habit at the end of 2019 that helped me keep my head on straight. I decided to start using Dropbox Paper to capture my daily thoughts and experiences though 2020. It took some getting used to at first, but became a valuable habit.</p>
                    </div>
                    <div className="template-text-body">
                        <p>Here are 3 things I’ve learned from documenting the past year of my life that I’m going to break down to help you get started with journaling, should you want to try it yourself.</p>
                        <ol className="listtype-numbered" >
                            <li><p>Write something</p></li>
                            <li><p>When friction is low, habits are easy</p></li>
                            <li><p>It’s the journey AND the destination</p></li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Write Something */}
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
                            <div className="side-pic" onClick={openLightbox2} onKeyDown={openLightbox2} key={2} type="button">
                                <MindPrism />
                            </div>
                        </div>
                    </div>
                    <div className="template-text-body">
                        <p>This goes a step further with a video or audio recordings. I cherish coming across a funny clip of a friend dancing like a goofball or listening to an insightful audio recording from a deep conversation. The richer the media, the richer the recall - and the combo of text, visuals and sound is the best of all.</p>
                    </div>
                </div>
            </div>

            {/* Write Something */}
            <div className="template-section">
                <div className={`template-text-block ${frictionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setWriteCollapsed(!frictionCollapsed)}>
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



            {/* <div className="template-section">
                <div className="template-text-body">
                    <Link to="/fastropelabs/" className="case-item">
                        <div className="case-popup"><Popup text="Case Study: Fastrope Labs" imgsrc="FastropePopup" /></div>
                        <span className="case-arrow"><CaseArrowIcon /></span>
                        <p>+Fastrope Labs</p>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default JournalDaily