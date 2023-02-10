import React from "react";
import HomeIcons from "./Navbar-Components/HomeIcons";
import InstagramSearchBar from "./Navbar-Components/InstagramSearchBar";
import RightIcons from "./Navbar-Components/RightIcons";

const NavBar = () => (
  <header className="headerBar">
    <div className="headerBarSize">
      <HomeIcons />
      <InstagramSearchBar />
      <RightIcons />
    </div>
  </header>
);
export default NavBar;
