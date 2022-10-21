import React from "react";
import { StyledLetter, Letter, IconHolder, AnimalIcon } from "./AlphabetLetter.styles";

const AlphabetLetter = (props) => {
  const number = props.idNumber;

  console.log(number)


  return (
    <StyledLetter
      onClick={() => props.handleOpenClose(props.letter)}
      // onDoubleClick={() => props.handleButtonCheck(props.letter)}
      className="alphabet-letter"
    >
      <Letter>
        {props.letter}
      </Letter>
      <IconHolder>
        <AnimalIcon src={props.alpha.animalImage} alt="none" />
      </IconHolder>
    </StyledLetter>
  );
};

export default AlphabetLetter;