import React, { useState } from "react";


import ArrowIcon from "../../icons/arrow-icon.inline.svg";


const WashingtonPost = () => {
   

    //Collapse
    const [backgroundCollapsed, setBackgroundCollapsed] = useState(false);
    const [problemCollapsed, setProblemCollapsed] = useState(false);
    const [questionCollapsed, setQuestionCollapsed] = useState(false);
    const [objectiveCollapsed, setObjectiveCollapsed] = useState(false);
    const [researchCollapsed, setResearchCollapsed] = useState(false);
    
    return (
        <div className="template-content">
            <h1 id="washingtonpost">Washington Post</h1>
            <div className="template-section">
                <div className="hero">
                   
                </div>
                <div className="template-text-block">
                    <div className="template-text-body">
                        <p><span className="bold-italic">Role: </span>Director of Product, Group PM, Principal PM, Senior PM</p>
                        <p><span className="bold-italic">Tools: </span>Confluence, Jira, Slides, Google Analytics, Amazon Polly, Microsoft Azure</p>
                        <p><span className="bold-italic">Timeline: </span>2019-2023</p>
                    </div>
                </div>
            </div>

            <div className="template-section">
                <div className={`template-text-block ${backgroundCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setBackgroundCollapsed(!backgroundCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="background">Background</h2>
                    </div>
                    <div className="template-text-body">
                        <p>I started at the Post in 2019 as a Senior PM of Audio / Video. Over the following four years, I went on to lead the product group responsible for the Post’s publishing tools and content experience. There were many product stories from my time at the Post, but for this case study I’ll focus on one that I’m particularly proud of - creating audio versions of articles.</p>
                    </div>
                </div>
            </div>

            <div className="template-section">
                <div className={`template-text-block ${problemCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setProblemCollapsed(!problemCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="problem">Problem</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Reading takes a lot of time and mental effort. It requires your full attention. Our readers enjoy our content, but there is only a limited amount of time each day where they could dedicate their attention to reading.</p>
                    </div>
                </div>
            </div>

            <div className="template-section">
                <div className={`template-text-block ${questionCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setQuestionCollapsed(!questionCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="question">Questions</h2>
                    </div>
                    <div className="template-text-body">
                        <p>What if we created audio versions of Post articles, would people listen? And further, what would reader think about the automated voices? Would they retain peoples’ attention?</p>
                    </div>
                </div>
            </div>

            <div className="template-section">
                <div className={`template-text-block ${objectiveCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setObjectiveCollapsed(!objectiveCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="question">Objective</h2>
                    </div>
                    <div className="template-text-body">
                        <p>Unlock more subscriber “reading” time by making stories available in audio by driving a habit of listening where users can enjoy stories while doing other things.</p>
                    </div>
                </div>
            </div>
            
            <div className="template-section">
                <div className={`template-text-block ${researchCollapsed ? "collapsed" : ""}`}>
                    <div className="template-text-header" onClick={() => setResearchCollapsed(!researchCollapsed)}>
                        <button className="collapse-expand"><ArrowIcon /></button>
                        <h2 id="research">Research</h2>
                    </div>
                    <div className="template-text-body">
                        <p>To test our hypothesis, we conducted a qualitative research study evaluating voice quality between human voices and high quality automated voices. We ran this comparative survey between two groups a group of individuals; a set of Post subscribers and a group of general news readers. We found that while the human voices were still preferred, the delta between the human voice and the automated voice was very small giving us confidence that the automated voices would still deliver value especially as they improved over time. We also did a ton of secondary research studying competitive offerings and understanding the value and shortcomings.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WashingtonPost