import React from "react";
import { MenuItem, StyledLink } from "./MenuModal.styles";

export default function MenuModal({ menuModal }) {
  return (
    <dialog ref={menuModal} autoFocus method="dialog">
      <div>
        <StyledLink to="/" onClick={() => menuModal.current.close()}>
          <MenuItem>Home</MenuItem>
        </StyledLink>
        <StyledLink to="/about" onClick={() => menuModal.current.close()}>
          <MenuItem>About</MenuItem>
        </StyledLink>
        <StyledLink to="/aby-store" onClick={() => menuModal.current.close()}>
          <MenuItem>Aby's Store</MenuItem>
        </StyledLink>
        <StyledLink
          to="/my-favorites"
          onClick={() => menuModal.current.close()}
        >
          <MenuItem>My Favorites</MenuItem>
        </StyledLink>
        <StyledLink to="/contact" onClick={() => menuModal.current.close()}>
          <MenuItem>Contact</MenuItem>
        </StyledLink>
        <MenuItem>
          <span className="close-modal" onClick={() => menuModal.current.close()}>&#x2715;</span>
        </MenuItem>
      </div>
    </dialog>
  );
}
