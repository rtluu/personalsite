import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from 'react-player';
import "./player.scss";

const Player = (props) => {
    const [isReady, setIsReady] = React.useState();

    function setReady() {
        setIsReady(true);
    }

    return (
        <div className={`player-container ${isReady ? "ready" : ""}`}>
            <div className="player-holder">
                <div className="player-inner">
                    <ReactPlayer
                        url={'https://youtu.be/' + props.ytid}
                        controls={true}
                        onStart={setReady}
                        loop={true}
                        volume={0}
                        muted={true}
                        playsinline={true}
                        playing={true}
                        rel={0}
                    />
                </div>
            </div>
        </div>
    )

}

export default Player