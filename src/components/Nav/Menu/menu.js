import React from "react";
import { useLocation } from "@reach/router"
import { Link } from "gatsby";
import "./menu.scss";
import FolderIcon from "../../../icons/folder-icon.inline.svg";
import HomeIcon from "../../../icons/home-icon.inline.svg";
import PaperIcon from "../../../icons/paper-icon.inline.svg";
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
                    <Link to="/washingtonpost/">
                        <li className={location.pathname === "/washingtonpost/" && ('active')}>
                            <PaperIcon />
                            <h5>Washington Post</h5>
                        </li>
                    </Link>
                    <Link to="/adhoc/">
                        <li className={location.pathname === "/adhoc/" && ('active')}>
                            <PaperIcon />
                            <h5>Ad Hoc</h5>
                        </li>
                    </Link>
                    <Link to="/vumble/">
                        <li className={location.pathname === "/vumble/" && ('active')}>
                            <PaperIcon />
                            <h5>Vumble</h5>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className="folder-group">
                <div className="folder-title">
                    <FolderIcon />
                    <h4 className="bold">Development</h4>
                </div>
                <ul className="folder-list">
                    <Link to="/openrecord/">
                        <li className={location.pathname === "/openrecord/" && ('active')}>
                            <PaperIcon />
                            <h5>OpenRecord</h5>
                        </li>
                    </Link>
                    <Link to="/neat/">
                        <li className={location.pathname === "/neat/" && ('active')}>
                            <PaperIcon />
                            <h5>Neat</h5>
                        </li>
                    </Link>
                    <Link to="/ourluubeginning/">
                        <li className={location.pathname === "/ourluubeginning/" && ('active')}>
                            <PaperIcon />
                            <h5>OurLuuBeginning</h5>
                        </li>
                    </Link>
                    <Link to="/fastropelabs/">
                        <li className={location.pathname === "/fastropelabs/" && ('active')}>
                            <PaperIcon />
                            <h5>Fastrope Labs</h5>
                        </li>
                    </Link>
                    <Link to="/humblevc/">
                        <li className={location.pathname === "/humblevc/" && ('active')}>
                            <PaperIcon />
                            <h5>Humble VC</h5>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}





export default Menu