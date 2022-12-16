import React from "react";
import { Tile, Dash } from "./SyllableTile.styles";

const SyllableTile = (props) => {
  const letters = props.letter.toUpperCase();
  const playAudio = () => {
    new Audio(props.sounds[letters]).play();
  };
  return (
    (props.letter !== "-") ? (
      <Tile onClick={playAudio}>{props.letter}</Tile>
    ) : (
      <Dash>{props.letter}</Dash>
    )

  )
};

export default SyllableTile;
