import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderHolder, StyledLink, SiteTitle } from "./Header.styles";
import {
    faPaw
  } from "@fortawesome/free-solid-svg-icons";

const Header = ({ handleModal }) => {  
  return (
    <HeaderHolder>
      <div className="header">
        <div className="header-title-holder">
          <SiteTitle>
            <StyledLink to="/">
              <h1 className="titles">Aby Zebra</h1>
            </StyledLink>
          </SiteTitle>
          {/* MENU ICON - NEEDS WORK!!! */}
          <div className="header-item">
            <FontAwesomeIcon
              icon={faPaw}
              className="header-brand"
              onClick={() => handleModal()}
            />
          </div>
        </div>
      </div>
    </HeaderHolder>
  );
};

export default Header;
