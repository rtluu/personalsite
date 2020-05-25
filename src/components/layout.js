import React from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import "../styles/template.scss";
import Nav from "./Nav/nav";
import Menu from "./Menu/menu";
import Info from "./Info/info";
import { useGlobalState } from '../state';

const Layout = ({ children }) => {
  const [value] = useGlobalState('menuActive');
  const [lightMode] = useGlobalState('lightMode');
  const [lightboxActive] = useGlobalState('lightboxActive');

  return (
    <div className={`layout ${value ? "menu-open" : ""} ${lightMode ? "light-mode" : ""} ${lightboxActive ? "style=overflow: hidden;" : ''}`}>
      <Menu />
      <main className="main-container">
        <Nav />
        <div className={`template ${value ? "menu-open" : ""}`}>
          {children}
        </div>
      </main>
      <Info />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
