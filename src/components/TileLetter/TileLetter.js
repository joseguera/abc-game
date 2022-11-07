import React from "react";
import { LetterTile, Dash } from "./TileLetter.styles";

const TileLetter = (props) => {
  const letters = props.letter.toUpperCase();
  const playAudio = () => {
    new Audio(props.sounds[letters]).play();
  };
  return (
    (props.letter !== "-") ? (
      <LetterTile onClick={playAudio}>{props.letter}</LetterTile>
    ) : (
      <Dash>{props.letter}</Dash>
    )

  )
};

export default TileLetter;
