import React from "react";
import { useLocation } from "@reach/router"
import { Link, useStaticQuery, graphql } from "gatsby";
import "./menu.scss";
import FolderIcon from "../../icons/folder-icon.inline.svg";
import HomeIcon from "../../icons/home-icon.inline.svg";
import PaperIcon from "../../icons/paper-icon.inline.svg";
import Tooltip from "../Tooltip/tooltip";

import { useGlobalState } from '../../state';

const Menu = () => {
    const location = useLocation();
    const [value, update] = useGlobalState('menuActive');

    const data = useStaticQuery(graphql`
        query {
            allNavigationJson {
                nodes {
                    title
                    items {
                        title
                        path
                        status
                    }
                }
            }
        }
    `)

    const folders = data.allNavigationJson.nodes

    function closeMenu() {
        if (window.innerWidth < 905) {
            update(false);
        }
    }

    return (
        <div className={`menu ${value ? "open" : ""}`}>
            <div className="menu-header">
                <Link to="/" >
                    <button className="icon home" onClick={closeMenu}>
                        <HomeIcon />
                        <Tooltip text='Back to home' class='home-tip left-point' />
                    </button>
                </Link>
            </div>
            {folders.map(folder => (
                <div className="folder-group" key={folder.title}>
                    <div className="folder-title">
                        <FolderIcon />
                        <h4 className="bold">{folder.title}</h4>
                    </div>
                    <ul className="folder-list">
                        {folder.items.map(item => (
                            item.status === "coming-soon" ? (
                                <li
                                    key={item.path}
                                    className={location.pathname === item.path ? "active" : ""}
                                    onClick={closeMenu}
                                >
                                    <span className="paper-icon wapo"><PaperIcon /></span>
                                    <h5>{item.title}<span className="italic space-left">(coming soon)</span></h5>
                                </li>
                            ) : (
                                <Link to={item.path} key={item.path}>
                                    <li
                                        className={location.pathname === item.path ? "active" : ""}
                                        onClick={closeMenu}
                                    >
                                        <span className="paper-icon"><PaperIcon /></span>
                                        <h5>{item.title}</h5>
                                    </li>
                                </Link>
                            )
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Menu
