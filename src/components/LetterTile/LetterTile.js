import React from "react";
import { Tile, Dash } from "./LetterTile.styles";

const LetterTile = (props) => {
  const letters = props.letter.toUpperCase();
  const playAudio = () => {
    new Audio(props.sounds[letters]).play();
  };
  return props.letter !== "-" ? (
    <Tile onClick={playAudio}>{props.letter}</Tile>
  ) : (
    <div style={{ border: "none" }}>{props.letter}</div>
  );
};

export default LetterTile;
