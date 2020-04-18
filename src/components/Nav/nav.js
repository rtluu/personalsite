import React, { useState } from "react";
import { Link } from "gatsby";
import "./nav.scss";
import HomeIcon from "./home-icon.inline.svg";
import SidebarIcon from "./sidebar-icon.inline.svg";
import FolderIcon from "./folder-icon.inline.svg";
import Menu from "./Menu/menu";

import { menuSwitch, useGlobalState } from '../../state';

const Nav = () => {
    const [value, update] = useGlobalState('menuActive');

    return (
        <nav className={`nav ${value ? "open" : ""}`}>
            <div className="spacer" onClick={() => update(!value)} />
            <div className="nav-inner">
                <div className="button-box">
                    <Link to="/">
                        <button className="icon home">
                            <HomeIcon />
                        </button>
                    </Link>
                    <button className='icon sidebar' onClick={() => update(!value)}>
                        <SidebarIcon />
                    </button>
                </div>
                <div className="menu-holder">
                    {value &&
                        <Menu />
                    }
                </div>
            </div>
        </nav>
    )
}


export default Nav