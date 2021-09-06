import React from "react";
import "../../styles/anchors.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <div className={`anchor-set ${value ? "menu-open" : ""}`}>
            <ul>
                <li className="anchor lv1"><AnchorLink offset='140' href="#remotework"><h6 className="anchor-text">Remote Work</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#planning"><h6 className="anchor-text">Planning</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#accommodations"><h6 className="anchor-text">Accommodations</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#not-vacation"><h6 className="anchor-text">Remote ≠ Vacation</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#takeaway"><h6 className="anchor-text">Takeaway</h6></AnchorLink></li>
            </ul>
        </div>
    )
}

export default Anchors