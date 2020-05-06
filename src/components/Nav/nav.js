import React, { useState, useEffect } from "react";
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
    const [scrolled, setScrolled] = useState(false);

    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState(
        typeof window === "undefined" || !window.document ? 0 : document.body.getBoundingClientRect()
    );
    const [scrollY, setScrollY] = useState(bodyOffset.top);

    const listener = e => {
        setBodyOffset(typeof window === "undefined" || !window.document ? 0 : document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setLastScrollTop(-bodyOffset.top);
        if (bodyOffset.y < -147) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    });

    return (
        <nav className={`nav ${value ? "open" : ""}`}>
            <button className="spacer" onClick={() => update(!value)} />
            <div className={`nav-inner ${scrolled ? "scrolled" : ""}`}>
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

            </div>
            <div className={`menu-holder ${value ? "open" : ""}`}>
                <Menu />
            </div>
        </nav >
    )
}


export default Nav