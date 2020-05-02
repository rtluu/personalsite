import React from "react";
import "../../styles/anchors.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <ul className={`anchor-set ${value ? "menu-open" : ""}`}>
            <li className="anchor lv1"><AnchorLink offset='40' href="#ourluubeginning"><h6 className="anchor-text">OurLuuBeginning</h6></AnchorLink></li>
            {/* <li className="anchor lv2"><AnchorLink offset='40' href="#objective"><h6 className="anchor-text">Objective</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='40' href="#requirements"><h6 className="anchor-text">Requirements</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='40' href="#process"><h6 className="anchor-text">Process</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='40' href="#design"><h6 className="anchor-text">Design</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='40' href="#development"><h6 className="anchor-text">Development</h6></AnchorLink></li>
            <li className="anchor lv2"><AnchorLink offset='40' href="#reflection"><h6 className="anchor-text">Reflection</h6></AnchorLink></li> */}
        </ul>
    )
}

export default Anchors