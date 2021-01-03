import React from "react";
import "../../styles/anchors.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <div className={`anchor-set ${value ? "menu-open" : ""}`}>
            <ul>
                <li className="anchor lv1"><AnchorLink offset='140' href="#journaldaily"><h6 className="anchor-text">Journal Daily</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#write"><h6 className="anchor-text">Write</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#friction"><h6 className="anchor-text">Friction</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#journey"><h6 className="anchor-text">Journey</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#takeaway"><h6 className="anchor-text">Takeaway</h6></AnchorLink></li>
            </ul>
        </div>
    )
}

export default Anchors