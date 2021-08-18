import React from "react";
import "./Toolbar.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <div className="LogoToolbar">
        <Logo />
      </div>
      <nav className="DesktopOnly">
        <NavigationItems isAuthenticated={props.isAuthenticated} />
      </nav>
    </header>
  );
};

export default toolbar;
