import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import tabs from "../../const/index";

const Navbar = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const [click, setClick] = useState(false);

  // *Hamburger bar*
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="navbar_container">
      <div className="navbar_content">
        <div className="logo">
          <Link to="/">LOGO</Link>
        </div>
        <li className="navbar_menu">
          {tabs.map((tab, index) => {
            return (
              <Link
                to={tab.path}
                className={tab.name === currentTab ? "tabs active" : "tabs"}
                key={index}
                onClick={() => setCurrentTab(tab.name)}
              >
                {tab.name}
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
