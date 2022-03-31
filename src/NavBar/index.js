import "./index.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navBar">
            <nav>
                <div id='navBarBrand'>
                    <NavLink className="navLink" to="/">
                        William Ellison
                    </NavLink>
                </div>
                <div id='navBarBody'>
                    <menu id="topLevelNavMenu">
                        <li>
                            <NavLink className="navLink" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navLink" to="/resume">
                                Résumé
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="navLink" to="/portfolio">
                                Portfolio
                            </NavLink>
                        </li>
                    </menu>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;