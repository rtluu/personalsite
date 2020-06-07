import React from "react";
import PropTypes from "prop-types";
import "../styles/index.scss";
import "../styles/template.scss";
import Nav from "./Nav/nav";
import Footer from "./Footer/footer";
import Menu from "./Menu/menu";
import Info from "./Info/info";
import Lightbox from "./Lightbox/lightbox";
import { useGlobalState } from '../state';

const Layout = ({ children }) => {
  const [value] = useGlobalState('menuActive');
  const [lightMode] = useGlobalState('lightMode');
  const [lightboxActive] = useGlobalState('lightboxActive');

  return (
    <div className={`layout ${value ? "menu-open" : ""} ${lightMode ? "light-mode" : ""}`}>
      <Menu />
      <main className="main-container">
        <Nav />
        <div className={`template ${value ? "menu-open" : ""}`}>
          {children}
        </div>
        <Footer />
      </main>
      <Info />
      <Lightbox />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
