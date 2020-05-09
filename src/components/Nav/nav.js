import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router"
import { Link } from "gatsby";
import "./nav.scss";
import BackIcon from "../../icons/back-icon.inline.svg";
import SidebarIcon from "../../icons/sidebar-icon.inline.svg";
import LinkIcon from "../../icons/link-icon.inline.svg";
import LightModeIcon from "../../icons/light-mode-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { useGlobalState } from '../../state';

const Nav = () => {
    const location = useLocation();
    const [value, update] = useGlobalState('menuActive');

    const [pageName, setPageName] = useState('Ryan Luu');
    const [anchorNav, setAnchorNav] = useState('#ryanluu');
    const [pageLink, setPageLink] = useState('https://www.ryanluu.com');
    const [copied, setCopied] = useState(false);
    const [toastShow, setToastShow] = useState(false);


    useEffect(() => {
        if (location.pathname === "/") {
            setPageName('Ryan Luu');
            setAnchorNav('#ryanluu');
            setPageLink('https://www.ryanluu.com');
        } else if (location.pathname === "/ourluubeginning/") {
            setPageName('OurLuuBeginning');
            setAnchorNav('#ourluubeginning');
            setPageLink('https://www.ryanluu.com/ourluubeginning');
        } else if (location.pathname === "/fastropelabs/") {
            setPageName('Fastrope Labs');
            setAnchorNav('#fastrope');
            setPageLink('https://www.ryanluu.com/fastrope');
        } else if (location.pathname === "/humblevc/") {
            setPageName('Humble Venture Capital');
            setAnchorNav('#humblevc');
            setPageLink('https://www.ryanluu.com/humblevc');
        }
    }, [])

    useEffect(() => {
        const timer = window.setInterval(() => {
            setToastShow(false);
        }, 2000);
        return () => {
            window.clearInterval(timer);
        };

    }, [toastShow])

    return (
        <nav className={`nav ${value ? "open" : ""}`}>
            <div className="nav-inner-box left">
                <div className={`button-box ${location.pathname === "/" ? "home" : ""}`}>
                    {location.pathname !== "/" && (
                        <Link to="/">
                            <button className="icon back-arrow" onClick={() => window.history.back()}>
                                <BackIcon />
                                <Tooltip text='Back to previous page' class='back-tip left-point' />
                            </button>
                        </Link>
                    )}
                    <button className='icon sidebar' onClick={() => update(!value)}>
                        <SidebarIcon />
                        <Tooltip text={`${value ? "Close" : "Open"} folder view`} class='folder-tip left-point' />
                    </button>
                </div>
            </div>
            <div className="nav-inner-box center">
                <div className="nav-link-box">
                    <AnchorLink offset='140' href={anchorNav} ><h6 className="nav-anchor">{pageName}</h6></AnchorLink>
                    <Link to="/"><h6 className="nav-link">Personal Site</h6></Link>
                </div>
            </div>
            <div className="nav-inner-box right">
                <div className="button-box">
                    <CopyToClipboard text={pageLink} onCopy={(pageLink, setPageLink)} >
                        <button className="icon back-arrow" onClick={() => setToastShow(!toastShow)}>
                            <LinkIcon />
                            <Tooltip text='Copy link' class='link-tip up-point' />
                        </button>
                    </CopyToClipboard>

                    <button className='icon sidebar'>
                        <LightModeIcon />
                        <Tooltip text='Enter light mode' class='light-mode-tip right-point' />
                    </button>
                </div>
                <div className={`toast-box ${toastShow ? "show" : "hide"}`}>
                    <h4>Link copied</h4>
                </div>
            </div>
        </nav >
    )
}


export default Nav