import React from "react";
import { HomeBody, ButtonMatrix, NavButton, StyledLink } from "./Home.styles";

export default function Home(props) {
  return (
    <HomeBody>
      <h2>Welcome to Aby Zebra</h2>
      <ButtonMatrix>
        <StyledLink to="/science">
          <NavButton>Science</NavButton>
        </StyledLink>
        <NavButton>Technology</NavButton>
        <NavButton>Engineering</NavButton>
        <StyledLink to="/arts">
          <NavButton>Arts</NavButton>
        </StyledLink>
        <StyledLink to="/math">
          <NavButton>Math</NavButton>
        </StyledLink>
      </ButtonMatrix>
    </HomeBody>
  );
}
