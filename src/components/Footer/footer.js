import React from "react";
import { Link } from "gatsby";
import "./footer.scss";
import WebIcon from "../../icons/web-icon.inline.svg";
import Social from "../Social/social"

const Footer = () => (
    <footer className="footer">
        <div className="footer-inner left">
            <Social />
        </div>
        <div className="footer-inner center">
            <Link to="/">
                <h6 className="copyright">© {new Date().getFullYear()} RL</h6>
            </Link>
        </div>
    </footer>
)

export default Footer