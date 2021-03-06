import React from "react";
import "../../styles/anchors.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <ul className={`anchor-set ${value ? "menu-open" : ""}`}>
            <li className="anchor lv1"><AnchorLink offset='140' href="#vumble"><h6 className="anchor-text">Vumble</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#background"><h6 className="anchor-text">Background</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#problem"><h6 className="anchor-text">Problem</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#question"><h6 className="anchor-text">Question</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#hypothesis"><h6 className="anchor-text">Hypothesis</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#research"><h6 className="anchor-text">Research</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#solution"><h6 className="anchor-text">Solution</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#design"><h6 className="anchor-text">Design</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#development"><h6 className="anchor-text">Development</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#reflection"><h6 className="anchor-text">Reflection</h6></AnchorLink></li>
        </ul>
    )
}

export default Anchors
