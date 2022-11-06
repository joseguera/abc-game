import React from "react";
import { LetterTile } from "./TileLetter.styles";

const TileLetter = (props) => {
  return <LetterTile>{props.letter}</LetterTile>;
};

export default TileLetter;