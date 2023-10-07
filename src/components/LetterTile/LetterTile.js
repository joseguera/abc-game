import React from "react";
import { Tile, Dash } from "./LetterTile.styles";

export default function LetterTile({ letter, letterSound }) {
  const letters = letter.toUpperCase();
  const playAudio = () => {
    new Audio(letterSound[letters]).play();
  };
  return letter !== "-" ? (
    <Tile onClick={playAudio}>{letter}</Tile>
  ) : (
    <Dash>-</Dash>
  );
}
