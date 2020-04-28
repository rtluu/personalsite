import React from "react";
import { useLocation } from "@reach/router"
import { Link } from "gatsby";
import "./menu.scss";
import FolderIcon from "../../../icons/folder-icon.inline.svg";
import HomeIcon from "../../../icons/home-icon.inline.svg";
import Tooltip from "../../Tooltip/tooltip";

const Menu = () => {
    const location = useLocation();

    return (
        <div className="menu">
            <div className="menu-header">
                <Link to="/" >
                    <button className="icon home">
                        <HomeIcon />
                        <Tooltip text='Back to home' class='home-tip' />
                    </button>
                </Link>
            </div>
            <div className="folder-group">
                <div className="folder-title">
                    <FolderIcon />
                    <h4 className="bold">Product</h4>
                </div>
                <ul className="folder-list">
                    <li className={location.pathname === "/washingtonpost/" && ('active')}>
                        <Link to="/washingtonpost/"><h5>Washington Post</h5></Link>
                    </li>
                    <li className={location.pathname === "/adhoc/" && ('active')}>
                        <Link to="/adhoc/"><h5>Ad Hoc</h5></Link>
                    </li>
                    <li className={location.pathname === "/vumble/" && ('active')}>
                        <Link to="/vumble/"><h5>Vumble</h5></Link>
                    </li>
                </ul>
            </div>

            <div className="folder-group">
                <div className="folder-title">
                    <FolderIcon />
                    <h4 className="bold">Development</h4>
                </div>
                <ul className="folder-list">
                    <li className={location.pathname === "/openrecord/" && ('active')}>
                        <Link to="/openrecord/"><h5>OpenRecord</h5></Link>
                    </li>
                    <li className={location.pathname === "/neat/" && ('active')}>
                        <Link to="/neat/"><h5>Neat</h5></Link>
                    </li>
                    <li className={location.pathname === "/ourluubeginning/" && ('active')}>
                        <Link to="/ourluubeginning/"><h5>OurLuuBeginning</h5></Link>
                    </li>
                    <li className={location.pathname === "/fastrope/" && ('active')}>
                        <Link to="/fastropelabs/"><h5>Fastrope Labs</h5></Link>
                    </li>
                    <li className={location.pathname === "/humblevc/" && ('active')}>
                        <Link to="/humblevc/"><h5>Humble VC</h5></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}





export default Menu