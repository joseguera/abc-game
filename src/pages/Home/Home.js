import React from "react";
import { HomeBody, ButtonMatrix, NavButton, StyledLink } from "./Home.styles";

export default function Home(props) {

  return (
    <HomeBody>
      <h2>Welcome to Aby Zebra</h2>
      <ButtonMatrix>
        <StyledLink to="/science">
          <div class="btn-3d-1">Science</div>
        </StyledLink>
        <div class="btn-3d-1">Technology</div>
        <div class="btn-3d-1">Engineering</div>
        <StyledLink to="/arts">
          <div class="btn-3d-1">Arts</div>
        </StyledLink>
        <StyledLink to="/math">
          <div class="btn-3d-1">Math</div>
        </StyledLink>
      </ButtonMatrix>
    </HomeBody>
  );
}
