import React, { useState } from "react";
import "./index.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navs = [
    {
      tab: "Comics",
      link: "/comics",
    },
    {
      tab: "Favorites",
      link: "/favorites",
    },
    // {
    //   tab: "Teams",
    // },
    // {
    //   tab: "Venues",
    // },
    // {
    //   tab: "Schedule",
    // },
    // {
    //   tab: "PTW",
    // },
    {
      tab: "Blog",
      link: "/blogs",
    },
  ];
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar_container">
      <div className="navbar_content">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <li className="navbar_menu">
          {navs.map((nav, index) => (
            // return {nav.tab}</div>;
            <div className="tabs active">
              <Link to={nav.link} key={index}>
                {nav.tab}
              </Link>
            </div>
          ))}
        </li>
        <div className="login">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
