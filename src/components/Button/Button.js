import React from "react";
import { StyledLetter, Letter, IconHolder, AnimalIcon } from "./Button.styles";

export default function Button(props) {
 
  return (
    <StyledLetter
      onClick={() => props.handleOpenClose(props.alpha)}
      className="alphabet-letter"
    >
      <Letter>
        {props.alpha.value}
      </Letter>
      <IconHolder>
        <AnimalIcon src={props.alpha.animalImage}
          className={(props.alpha.horizontal) ? "horizontal" : "vertical"}
          alt="none" 
        />
      </IconHolder>
    </StyledLetter>
  );
};