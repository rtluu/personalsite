import React from "react";
import { Link } from "gatsby";
import "./menu.scss";

const Menu = () => (
    <div className="menu">
        <div className="menu-header">
            <Link to="/"><h3 className="menu-heading"><span role="img" aria-label="head" className="emoji-head">🧔🏻</span> Ryan Luu</h3></Link>
        </div>
        <ul className="menu-option-set">
            <p className="bold-italic">Product:</p>
            <p><Link to="/washingtonpost/">+Washington Post</Link></p>
            <p><Link to="/adhoc">+Ad Hoc</Link></p>
            <p><Link to="/vumble/">+Vumble</Link></p>
        </ul>
        <ul className="menu-option-set">
            <p className="bold-italic">Projects:</p>
            <p><Link to="/openrecord/">+OpenRecord</Link></p>
            <p><Link to="/neat/">+Neat</Link></p>
            <p><Link to="/OurLuuBeginning/">+OurLuuBeginning</Link></p>
            <p><Link to="/fastrope/">+Fastrope Labs</Link></p>
            <p><Link to="/humblevc/">+Humble VC</Link></p>
        </ul>
    </div>
)

export default Menu