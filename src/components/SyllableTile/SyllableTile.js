import React from "react";
import { Tile, Dash } from "./SyllableTile.styles";

const SyllableTile = (props) => {
  const letters = props.letter.toUpperCase();
  const playAudio = () => {
    new Audio(props.sounds[letters]).play();
  };
  return (
    (props.syllables === " ") ? (
      <Dash>-</Dash>
      ) : (
        <Tile onClick={playAudio}>{props.letter}</Tile>
    )

  )
};

export default SyllableTile;
