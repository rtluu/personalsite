import React from "react";
import "../../styles/anchors.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <ul className={`anchor-set ${value ? "menu-open" : ""}`}>
            <li className="anchor lv1"><AnchorLink offset='140' href="#fastrope"><h6 className="anchor-text">Fastrope Labs</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#objective"><h6 className="anchor-text">Objective</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#requirements"><h6 className="anchor-text">Requirements</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#process"><h6 className="anchor-text">Process</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#development"><h6 className="anchor-text">Development</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#reflection"><h6 className="anchor-text">Reflection</h6></AnchorLink></li>
        </ul>
    )
}

export default Anchors