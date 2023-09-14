import React from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "./MenuModal.styles";

export default function MenuModal({ menuModal }) {
  return (
    <dialog ref={menuModal} autoFocus method="dialog">
      <div>
        <Link className="no-underline text-inherit hover:text-[#ff6347]" to="/" onClick={() => menuModal.current.close()}>
          <MenuItem>Home</MenuItem>
        </Link>
        <Link className="no-underline text-inherit hover:text-[#ff6347]" to="/about" onClick={() => menuModal.current.close()}>
          <MenuItem>About</MenuItem>
        </Link>
        <Link className="no-underline text-inherit hover:text-[#ff6347]" to="/aby-store" onClick={() => menuModal.current.close()}>
          <MenuItem>Aby's Store</MenuItem>
        </Link>
        <Link
          className="no-underline text-inherit hover:text-[#ff6347]"
          to="/my-favorites"
          onClick={() => menuModal.current.close()}
        >
          <MenuItem>My Favorites</MenuItem>
        </Link>
        <Link className="no-underline text-inherit hover:text-[#ff6347]" to="/contact" onClick={() => menuModal.current.close()}>
          <MenuItem>Contact</MenuItem>
        </Link>
        <MenuItem>
          <span className="close-modal" onClick={() => menuModal.current.close()}>&#x2715;</span>
        </MenuItem>
      </div>
    </dialog>
  );
}
