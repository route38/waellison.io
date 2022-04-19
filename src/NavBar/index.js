import React from "react";
import "./index.css";

const NavBar = () => {
    return (
        <div id="navBar">
            <nav>
                <div id='navBarBrand'>
                    <a className="navLink" title="Україні Слава!" href="/">
                        William Ellison
                    </a>
                </div>
                <div id='navBarBody'>
                    <menu id="topLevelNavMenu">
                        <li>
                            <a className="navLink" href="#resume">
                                Résumé
                            </a>
                        </li>
                        <li>
                            <a className="navLink" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                    </menu>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;