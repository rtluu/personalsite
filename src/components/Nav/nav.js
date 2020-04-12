import { Link } from "gatsby";
import React, { useState } from "react";
import "./nav.scss";
import HomeIcon from "./home-icon.inline.svg";
import SidebarIcon from "./sidebar-icon.inline.svg";
import BackIcon from "./back-icon.inline.svg";
import FolderIcon from "./folder-icon.inline.svg";

const Nav = () => {
    const [menuActive, setMenuState] = useState(false);

    return (
        <nav className={`nav ${menuActive ? "open" : ""}`}>
            <div className="spacer" onClick={() => setMenuState(!menuActive)} />
            <div className="nav-inner">
                <div className="button-box">
                    <Link to="/">
                        <button className="icon home">
                            <HomeIcon />
                        </button>
                    </Link>
                    <button className='icon sidebar' onClick={() => setMenuState(!menuActive)}>
                        <SidebarIcon />
                    </button>
                </div>
                <div className="menu-holder">
                    {menuActive &&
                        <div className="menu">
                            <div className="menu-header">
                                <FolderIcon />
                                <h3 className="menu-heading">Personal Site</h3>
                            </div>
                            <ul className="menu-options">
                                <p><Link to="/washingtonpost/">+Washington Post</Link></p>
                                <p><Link to="/adhoc">+Ad Hoc</Link></p>
                                <p><Link to="/vumble/">+Vumble</Link></p>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}


export default Nav