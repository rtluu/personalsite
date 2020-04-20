import React from "react";
import "../../styles/anchors.scss";

import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <ul className={`anchor-set ${value ? "menu-open" : ""}`}>
            <li className="anchor lv1"><a href="#ryanluu"><h6 className="anchor-text">Ryan Luu</h6></a></li>
            <li className="anchor lv3"><a href="#about"><h6 className="anchor-text">About</h6></a></li>
            <li className="anchor lv3"><a href="#product"><h6 className="anchor-text">Product</h6></a></li>
            <li className="anchor lv3"><a href="#projects"><h6 className="anchor-text">Projects</h6></a></li>
            <li className="anchor lv3"><a href="#connect"><h6 className="anchor-text">Connect</h6></a></li>
        </ul>
    )
}

export default Anchors