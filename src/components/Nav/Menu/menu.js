import React from "react";
import { useLocation } from "@reach/router"
import { Link } from "gatsby";
import "./menu.scss";
import HomeIcon from "../../../icons/home-icon.inline.svg";
import DocIcon from "../../../icons/doc-icon.inline.svg";
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
            <ul className="menu-option-set">
                <h4 className="bold">Product</h4>
                <li className={location.pathname === "/washingtonpost/" && ('active')}>
                    <Link to="/washingtonpost/"><DocIcon /><h5>Washington Post</h5></Link>
                </li>
                <li className={location.pathname === "/adhoc/" && ('active')}>
                    <Link to="/adhoc/"><DocIcon /><h5>Ad Hoc</h5></Link>
                </li>
                <li className={location.pathname === "/vumble/" && ('active')}>
                    <Link to="/vumble/"><DocIcon /><h5>Vumble</h5></Link>
                </li>
            </ul>
            <ul className="menu-option-set">
                <h4 className="bold">Development</h4>
                <li className={location.pathname === "/openrecord/" && ('active')}>
                    <Link to="/openrecord/"><DocIcon /><h5>OpenRecord</h5></Link>
                </li>
                <li className={location.pathname === "/neat/" && ('active')}>
                    <Link to="/neat/"><DocIcon /><h5>Neat</h5></Link>
                </li>
                <li className={location.pathname === "/ourluubeginning/" && ('active')}>
                    <Link to="/ourluubeginning/"><DocIcon /><h5>OurLuuBeginning</h5></Link>
                </li>
                <li className={location.pathname === "/fastrope/" && ('active')}>
                    <Link to="/fastrope/"><DocIcon /><h5>Fastrope Labs</h5></Link>
                </li>
                <li className={location.pathname === "/humblevc/" && ('active')}>
                    <Link to="/humblevc/"><DocIcon /><h5>Humble VC</h5></Link>
                </li>
            </ul>
        </div>
    )
}





export default Menu