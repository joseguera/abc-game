import React from "react";
import { Link } from "react-router-dom";
import {
  ButtonMatrix,
  NavButton
} from "./Home.styles";

export default function Home(props) {
  return (
    <>
      <h2>Welcome to Aby Zebra</h2>
      <ButtonMatrix>
        <Link to="/science">
          <NavButton>Science</NavButton>
        </Link>
        <NavButton>Technology</NavButton>
        <NavButton>Engineering</NavButton>
        <NavButton>Arts</NavButton>
        <NavButton>Math</NavButton>
      </ButtonMatrix>
    </>
  );
}
