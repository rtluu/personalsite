import React from "react";
import "../../styles/anchors.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <ul className={`anchor-set ${value ? "menu-open" : ""}`}>
            <li className="anchor lv1"><AnchorLink offset='80' href="#ryanluu"><h6 className="anchor-text">Ryan Luu</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#about"><h6 className="anchor-text">About</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#product"><h6 className="anchor-text">Product</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#development"><h6 className="anchor-text">Development</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='80' href="#lets-talk"><h6 className="anchor-text">Let's talk</h6></AnchorLink></li>
        </ul>
    )
}

export default Anchors