import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div id="navBar">
            <nav>
                <div>
                    <NavLink className="homepageLink" to="/">
                        William Ellison
                    </NavLink>
                </div>
                <div>
                    <menu>
                        <li>
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/resume">
                                Résumé
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/portfolio">
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