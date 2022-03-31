import "./index.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="siteFooter">
            <p>Copyright © 2022 by William Ellison. • <NavLink className="navLink" to="/colophon">Colophon</NavLink></p>
        </footer>
    );
}

export default Footer;