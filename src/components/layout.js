import React from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import "../styles/template.scss";
import Nav from "./Nav/nav";
import Lightbox from "./Lightbox/lightbox"
import { useGlobalState } from '../state';

const Layout = ({ children }) => {
  const [value] = useGlobalState('menuActive');

  return (
    <div className="layout">
      <Nav />
      <main className="main-container">
        <div className={`template ${value ? "menu-open" : ""}`}>
          {children}
        </div>
      </main>
      <Lightbox />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
