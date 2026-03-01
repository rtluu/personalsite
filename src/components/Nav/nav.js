import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router"
import { Link, useStaticQuery, graphql } from "gatsby";
import "./nav.scss";
import BackIcon from "../../icons/back-icon.inline.svg";
import SidebarIcon from "../../icons/sidebar-icon.inline.svg";
import LinkIcon from "../../icons/link-icon.inline.svg";
import LightModeIcon from "../../icons/light-mode-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BrowserView } from 'react-device-detect';

import { useGlobalState } from '../../state';

const Nav = () => {
    const location = useLocation();
    const [value, update] = useGlobalState('menuActive');
    const [lightMode, setLightMode] = useGlobalState('lightMode');

    const [pageName, setPageName] = useState('Ryan Luu');
    const [anchorNav, setAnchorNav] = useState('#ryanluu');
    const [pageLink, setPageLink] = useState('https://www.ryanluu.com');
    const [homeName, setHomeName] = useState('Personal Site');
    const [copied, setCopied] = useState(false);
    const [toastShow, setToastShow] = useState(false);

    const data = useStaticQuery(graphql`
        query {
            allNavigationJson {
                nodes {
                    items { title path anchorId }
                }
            }
            allSiteJson {
                nodes { siteUrl }
            }
        }
    `)

    // Flatten all nav items into one list for easy lookup
    const allItems = data.allNavigationJson.nodes.flatMap(n => n.items || [])
    const siteUrl = data.allSiteJson.nodes[0]?.siteUrl || 'https://www.ryanluu.com'

    function closeMenu() {
        if (window.innerWidth < 905) {
            update(false);
        }
    }

    useEffect(() => {
        if (location.pathname === "/") {
            setPageName('Ryan Luu');
            setAnchorNav('#ryanluu');
            setPageLink(siteUrl);
            setHomeName('Personal Site');
        } else {
            const currentItem = allItems.find(item => item.path === location.pathname)
            if (currentItem) {
                setPageName(currentItem.title);
                setAnchorNav(`#${currentItem.anchorId}`);
                setPageLink(`${siteUrl}${location.pathname}`);
                setHomeName('Ryan Luu');
            }
        }
    }, [location.pathname])

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
                <div className="button-box">
                    <BrowserView>
                        {location.pathname !== "/" && (
                            <Link to="/">
                                <button className="icon back-arrow" onClick={() => window.history.back()}>
                                    <BackIcon />
                                    <Tooltip text='Back to previous page' class='back-tip left-point' />
                                </button>
                            </Link>
                        )}
                    </BrowserView>
                    <button className='icon sidebar' onClick={() => update(!value)}>
                        <SidebarIcon />
                        <Tooltip text={`${value ? "Close" : "Open"} folder view`} class='folder-tip left-point' />
                    </button>
                </div>
            </div>
            <div className="nav-inner-box center">
                <div className="nav-link-box">
                    <AnchorLink offset='140' href={anchorNav} ><h6 className="nav-anchor">{pageName}</h6></AnchorLink>
                    <Link to="/"><h6 className="nav-link">{homeName}</h6></Link>
                </div>
            </div>
            <div className="nav-inner-box right">
                <div className="button-box">
                    <CopyToClipboard text={pageLink} onCopy={(pageLink, setPageLink)} >
                        <button className="icon copy-link" onClick={() => setToastShow(!toastShow)}>
                            <LinkIcon />
                            <Tooltip text='Copy link' class='link-tip up-point' />
                        </button>
                    </CopyToClipboard>

                    <button className='icon light-mode' onClick={() => setLightMode(!lightMode)}>
                        <LightModeIcon />
                        <Tooltip text={`${lightMode ? "Enter dark mode" : "Enter light mode"}`} class='light-mode-tip right-point' />
                    </button>
                </div>
                <div className={`toast-box ${toastShow ? "show" : "hide"}`}>
                    <h4>Link copied</h4>
                </div>
            </div>

            {/* For closing the menu when it's open at small screen sizes */}
            <div className="menu-close" onClick={() => update(!value)} />
        </nav >
    )
}

export default Nav
