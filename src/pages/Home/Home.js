import React from "react";
import { HomeBody, ButtonMatrix, NavButton, StyledLink } from "./Home.styles";

export default function Home(props) {

  return (
    <HomeBody>
      <h2>Welcome to Aby Zebra</h2>
      <ButtonMatrix>
        <StyledLink to="/science">
          <div className="btn-3d-1">Science</div>
        </StyledLink>
        <div className="btn-3d-1">Technology</div>
        <div className="btn-3d-1">Engineering</div>
        <StyledLink to="/arts">
          <div className="btn-3d-1">Arts</div>
        </StyledLink>
        <StyledLink to="/math">
          <div className="btn-3d-1">Math</div>
        </StyledLink>
      </ButtonMatrix>
    </HomeBody>
  );
}
