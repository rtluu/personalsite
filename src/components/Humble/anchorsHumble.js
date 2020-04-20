import React from "react";
import "../../styles/anchors.scss";

import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <ul className={`anchor-set ${value ? "menu-open" : ""}`}>
            <li className="anchor lv1"><a href="#humble"><h6 className="anchor-text">Humble</h6></a></li>
            <li className="anchor lv2"><a href="#objective"><h6 className="anchor-text">Objective</h6></a></li>
            <li className="anchor lv2"><a href="#requirements"><h6 className="anchor-text">Requirements</h6></a></li>
            <li className="anchor lv2"><a href="#process"><h6 className="anchor-text">Process</h6></a></li>
            <li className="anchor lv2"><a href="#design"><h6 className="anchor-text">Design</h6></a></li>
            <li className="anchor lv2"><a href="#development"><h6 className="anchor-text">Development</h6></a></li>
            <li className="anchor lv2"><a href="#reflection"><h6 className="anchor-text">Reflection</h6></a></li>
        </ul>
    )
}

export default Anchors