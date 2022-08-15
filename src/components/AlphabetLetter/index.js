import React from "react";
import { StyledLetter } from "./AlphabetLetter.styles";

const AlphabetLetter = (props) => {
  return (
    <StyledLetter
      onClick={() => props.handleOpenClose(props.letter)}
      // onDoubleClick={() => props.handleButtonCheck(props.letter)}
      className="alphabet-letter"
    >
      {props.letter.value}
    </StyledLetter>
  );
};

export default AlphabetLetter;
