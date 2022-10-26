import React from "react";
import { StyledLetter, Letter, IconHolder, AnimalIcon } from "./AlphabetLetter.styles";

const AlphabetLetter = (props) => {
 
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
        style={{
          width: props.alpha.horizontal && "100%",
          height: !props.alpha.horizontal && "100%" 
        }}
          alt="none" />
      </IconHolder>
    </StyledLetter>
  );
};

export default AlphabetLetter;