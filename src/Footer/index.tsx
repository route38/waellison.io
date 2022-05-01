import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  return (
    <footer id="siteFooter">
      <div className="meta">
        <p>Copyright © 2022 by William Ellison.</p>
      </div>
      <div className="socialBox">
        <a href="//github.com/waellison" className="socialBtn githubLink">
            <FontAwesomeIcon icon={brands("github-alt")} />
        </a>
        <a href="//linkedin.com/in/tnwae" className="socialBtn linkedinLink">
            <FontAwesomeIcon icon={brands("linkedin-in")}/>
        </a>
        <a href="//twitter.com/waedotpy" className="socialBtn twitterLink">
            <FontAwesomeIcon icon={brands("twitter")}/>
        </a>
        <a href="//instagram.com/nobettershoulder" className="socialBtn instaLink">
            <FontAwesomeIcon icon={brands("instagram")}/>
        </a>
        <a href="mailto:waellison@gmail.com" className="socialBtn emailLink">
            <FontAwesomeIcon icon={solid("envelope")}/>
        </a>
        <a href="//waellison.blog" className="socialBtn blogLink">
            <FontAwesomeIcon icon={solid("globe-americas")}/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
