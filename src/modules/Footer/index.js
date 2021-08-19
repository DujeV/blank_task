import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h1>MARVEL API</h1>
        <p>Find your favorite Marvel character</p>
        <ul className="socials">
          <li>
            <Link to="/404">
              <FacebookIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/404">
              <TwitterIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/404">
              <InstagramIcon className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/404">
              <LanguageIcon className="icon" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; Ivan Kalinić & Duje Vidović. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
