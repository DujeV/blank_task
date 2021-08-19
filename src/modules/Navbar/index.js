import React, { useState } from "react";
import "./index.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

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
    },
  ];

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar_container">
      <div className="navbar_content">
        <div className="logo">LOGO</div>
        <li className="navbar_menu">
          {navs.map((nav) => {
            return <div className="tabs active">{nav.tab}</div>;
          })}
        </li>
        <div className="login">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
