import React from "react";
import { Tile, Dash } from "./SyllableTile.styles";

const SyllableTile = (props) => {
  // const letters = props.syllable.toUpperCase();
  // const playAudio = () => {
  //   new Audio(props.sounds[letters]).play();
  // };

  console.log(props.index);

  return (
    props.syllable.length > 0 &&
    (props.index === 0 ? (
      <>
        <Tile>{props.syllable}</Tile>
        <Dash>-</Dash>
      </>
    ) : (
      <Tile>{props.syllable}</Tile>
    ))
  );
};

export default SyllableTile;
