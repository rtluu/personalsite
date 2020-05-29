import React from 'react';
import { setImageNumber, useGlobalState } from '../../state';
import Player from "../../components/Player/player";
import HeroVumble from "./images/HeroVumble";
import VumbleYouTube from "./images/VumbleYouTube";
import VumblePowerpointPrototype from "./images/VumblePowerpointPrototype";
import VumbleBetaBuild from "./images/VumbleBetaBuild";
import VumbleInstantPlayback from "./images/VumbleInstantPlayback";
import VumbleRedditResearch from "./images/VumbleRedditResearch";
import VumbleRedditTV from "./images/VumbleRedditTV";
import VumbleRedditInfused from "./images/VumbleRedditInfused";
import VumbleMobilePrototype from "./images/VumbleMobilePrototype";
import VumbleHoverFeature from "./images/VumbleHoverFeature";
import VumbleAsyncComments from "./images/VumbleAsyncComments";
import VumbleArrowsAutoplay from "./images/VumbleArrowsAutoplay";
import VumbleClipPost from "./images/VumbleClipPost";
import VumbleV2 from "./images/VumbleV2";

const LightboxImagesVumble = (props) => {
    const [imageNumber] = useGlobalState('imageNumber');
    const [videoExpanded] = useGlobalState('videoExpanded');
    return (
        <div className={`lightbox-image-wrapper ${imageNumber === 1 | imageNumber === 3 | imageNumber === 4 | imageNumber === 5 | imageNumber === 6 | imageNumber === 8 | imageNumber === 9 | imageNumber === 10 | imageNumber === 11 | imageNumber === 12 | imageNumber === 13 | imageNumber === 14 ? "video-wrapper" : ""}`}>
            {imageNumber === 1 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><HeroVumble /><Player ytid="oeSBy4Hksns" /></div> : null}
            {imageNumber === 2 && (<VumbleYouTube />)}
            {imageNumber === 3 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumblePowerpointPrototype /><Player ytid="w3MviB2DxrU" /></div> : null}
            {imageNumber === 4 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleBetaBuild /><Player ytid="W30MgciYZ1U" /></div> : null}
            {imageNumber === 5 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleInstantPlayback /><Player ytid="1avDDfHt6Tg" /></div> : null}
            {imageNumber === 6 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleRedditResearch /><Player ytid="rzJSss3aMW0" /></div> : null}
            {imageNumber === 7 && (<VumbleRedditTV />)}
            {imageNumber === 8 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleRedditInfused /><Player ytid="qJqZRtZ7Ees" /></div> : null}
            {imageNumber === 9 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleMobilePrototype /><Player ytid="YNHtCqzv0TA" /></div> : null}
            {imageNumber === 10 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleHoverFeature /><Player ytid="qJqZRtZ7Ees" /></div> : null}
            {imageNumber === 11 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleAsyncComments /><Player ytid="nd_Uv7FC2JM" /></div> : null}
            {imageNumber === 12 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleArrowsAutoplay /><Player ytid="2RnP4mm_YaI" /></div> : null}
            {imageNumber === 13 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleClipPost /><Player ytid="PS0_u8hZxuw" /></div> : null}
            {imageNumber === 14 && !videoExpanded ? <div className="media-box"><div className="loading-spinner" /><VumbleV2 /><Player ytid="l1dk6Fsi0kE" /></div> : null}
        </div>
    );
}

export default LightboxImagesVumble