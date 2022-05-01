import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  return (
    <div id="navBar">
      <nav>
        <div id="navBarBrand">
          <a className="navLink" title="Україні Слава!" href="/">
            William Ellison
          </a>
        </div>
        <div id="navBarBody">
          <menu id="topLevelNavMenu">
            <li>
              <a className="navLink neverGonnaGiveYouUp" href="//waellison.blog">
                Blog
              </a>
            </li>
            <li>
                <Link className="navLink neverGonnaLetYouDown" to="/resume">Résumé</Link>
            </li>
            <li>
                <Link className="navLink neverGonnaRunAroundAndDesertYou" to="/portfolio">Portfolio</Link>
            </li>
          </menu>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
