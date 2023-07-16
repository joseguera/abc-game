import React from "react";
import { ModalBackground, MenuHolder, MenuItem, StyledLink } from "./Menu.styles";

export default function Menu({ menuModal }) {

  return (
    <dialog ref={menuModal} autoFocus method="dialog">
      <MenuHolder>
        <div>
          <StyledLink to="/" onClick={() => menuModal.current.close()}>
            <MenuItem >Home</MenuItem>
          </StyledLink>
          <StyledLink to="/about" onClick={() => menuModal.current.close()}>
            <MenuItem>About</MenuItem>
          </StyledLink>
          <StyledLink to="/aby-store" onClick={() => menuModal.current.close()}>
            <MenuItem>Aby's Store</MenuItem>
          </StyledLink>
          <StyledLink to="/my-favorites" onClick={() => menuModal.current.close()}>
            <MenuItem>My Favorites</MenuItem>
          </StyledLink>
          <StyledLink to="/contact" onClick={() => menuModal.current.close()}>
            <MenuItem>Contact</MenuItem>
          </StyledLink>
        </div>
      </MenuHolder>
    </dialog>
  );
}
