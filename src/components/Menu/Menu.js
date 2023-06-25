import React from "react";
import { ModalBackground, MenuHolder, MenuItem, StyledLink } from "./Menu.styles";

export default function Menu({ openMenu }) {

  return (
    <>
      <ModalBackground onClick={() => openMenu()}/>
      <MenuHolder>
        <div className="show">
          <StyledLink to="/" onClick={() => openMenu()}>
            <MenuItem >Home</MenuItem>
          </StyledLink>
          <StyledLink to="/about" onClick={() => openMenu()}>
            <MenuItem>About</MenuItem>
          </StyledLink>
          <StyledLink to="/aby-store" onClick={() => openMenu()}>
            <MenuItem>Aby's Store</MenuItem>
          </StyledLink>
          <StyledLink to="/my-favorites" onClick={() => openMenu()}>
            <MenuItem>My Favorites</MenuItem>
          </StyledLink>
          <StyledLink to="/contact" onClick={() => openMenu()}>
            <MenuItem>Contact</MenuItem>
          </StyledLink>
        </div>
      </MenuHolder>
    </>
  );
}
