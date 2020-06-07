import React from "react";
import "./footer.scss";
import WebIcon from "../../icons/web-icon.inline.svg";
import Social from "../Social/social"

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner left">
            <Social />
        </div>
        <div className="footer-inner center">
            <h6 className="copyright">© {new Date().getFullYear()} RL</h6>
        </div>
    </footer>
)

export default Footer