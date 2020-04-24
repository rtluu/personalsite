import React from "react";
import { useLocation } from "@reach/router"
import { Link } from "gatsby";
import "./nav.scss";
import "../../styles/tooltip.scss";
import BackIcon from "../../icons/back-icon.inline.svg";
import SidebarIcon from "../../icons/sidebar-icon.inline.svg";
import Menu from "./Menu/menu";

import { useGlobalState } from '../../state';

const Nav = () => {
    const location = useLocation();
    const [value, update] = useGlobalState('menuActive');

    return (
        <nav className={`nav ${value ? "open" : ""}`}>
            <button className="spacer" onClick={() => update(!value)} />
            <div className="nav-inner">
                <div className={`button-box ${location.pathname === "/" ? "home" : ""}`}>
                    {location.pathname !== "/" && (
                        <Link to="/">
                            <button className="icon" onClick={() => window.history.back()}>
                                <BackIcon />
                                <div className="tooltip">
                                    <div className="tooltip-body">
                                        <span className="tooltip-message">Back to home</span>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    )}


                    <button className='icon sidebar' onClick={() => update(!value)}>
                        <SidebarIcon />
                    </button>
                </div>
                <div className={`menu-holder ${value ? "open" : ""}`}>
                    <Menu />
                </div>
            </div>
        </nav >
    )
}


export default Nav