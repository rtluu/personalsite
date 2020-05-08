import React from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import "../styles/template.scss";
import Nav from "./Nav/nav";
import Menu from "./Menu/menu";
import { useGlobalState } from '../state';

const Layout = ({ children }) => {
  const [value] = useGlobalState('menuActive');

  return (
    <div className={`layout ${value ? "menu-open" : ""}`}>
      <Menu />
      <main className="main-container">
        <Nav />
        <div className={`template ${value ? "menu-open" : ""}`}>
          {children}
        </div>
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
