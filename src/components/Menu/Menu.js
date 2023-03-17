import React from "react";
import { MenuHolder, MenuItem } from "./Menu.styles";

export default function Menu({ menuOpen }) {
  return (
    <MenuHolder>
      {menuOpen ? (
          <div className="show">
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Aby's Store</MenuItem>
            <MenuItem>Contact</MenuItem>
          </div>
      ) : (
          <div className="hide"></div>
      )}
    </MenuHolder>
  );
}
