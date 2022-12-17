import React from "react";
import { Tile, Dash } from "./SyllableTile.styles";

const SyllableTile = (props) => {
  const letters = props.syllable.toUpperCase();
  const playAudio = () => {
    new Audio(props.sounds[letters]).play();
  };

  console.log(props.syllable, props.index);
  return (
    
    props.syllable.length > 0 && (

      (props.index === 1 || props.index === 2 || props.syllable === "goose") ? (
        <Tile onClick={playAudio}>{props.syllable}</Tile>
      ) : (
        (props.index === 0 || props.index === 1) && (
          <>
            <Tile onClick={playAudio}>{props.syllable}</Tile>
            <Dash>-</Dash>
          </>
        )
      )
    )
  );
};

export default SyllableTile;
