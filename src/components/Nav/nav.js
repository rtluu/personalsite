import React from "react";
import { useLocation } from "@reach/router"
import { Link } from "gatsby";
import "./nav.scss";
import BackIcon from "../../icons/back-icon.inline.svg";
import SidebarIcon from "../../icons/sidebar-icon.inline.svg";
import Menu from "./Menu/menu";
import Tooltip from "../Tooltip/tooltip";

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
                                <Tooltip text='Back to previous page' class='back-tip' />
                            </button>
                        </Link>
                    )}


                    <button className='icon sidebar' onClick={() => update(!value)}>
                        <SidebarIcon />
                        <Tooltip text={`${value ? "Close" : "Open"} folder view`} class='folder-tip' />
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