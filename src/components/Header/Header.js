import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import "./header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="header-left">CRITR.</div>
      <div className="header-right">
        <div className="convert-text">Convert From Text</div>
        <div className="menu-icon">
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
