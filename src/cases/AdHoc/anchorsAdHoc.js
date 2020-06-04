import React from "react";
import "../../styles/anchors.scss";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useGlobalState } from '../../state';

const Anchors = () => {
    const [value] = useGlobalState('menuActive');

    return (
        <div className={`anchor-set ${value ? "menu-open" : ""}`}>
            <ul>
                <li className="anchor lv1"><AnchorLink offset='140' href="#adhoc"><h6 className="anchor-text">AdHoc</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#background"><h6 className="anchor-text">Background</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#problem"><h6 className="anchor-text">Problem</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#question"><h6 className="anchor-text">Question</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#objective"><h6 className="anchor-text">Objective</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#research"><h6 className="anchor-text">Research</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#solution"><h6 className="anchor-text">Solution approach</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#results"><h6 className="anchor-text">Results</h6></AnchorLink></li>
                <li className="anchor lv2"><AnchorLink offset='80' href="#reflection"><h6 className="anchor-text">Reflection</h6></AnchorLink></li>
            </ul>
        </div>
    )
}

export default Anchors