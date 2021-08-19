import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import tabs from "../../const/index";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("Comics");
  const [click, setClick] = useState(false);

  // *Hamburger bar*
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar_container">
      <div className="navbar_content">
        <div className="logo">LOGO</div>
        <li className="navbar_menu">
          {tabs.map((tab, index) => {
            return (
              <Link
                to={tab.to}
                className={tab.route === currentTab ? "tabs active" : "tabs"}
                key={index}
                onClick={() => setCurrentTab(tab.route)}
              >
                {tab.route}
              </Link>
            );
          })}
        </li>
        <div className="login">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
