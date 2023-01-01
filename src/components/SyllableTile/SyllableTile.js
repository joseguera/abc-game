import React from "react";
import { Tile, Syllable, Dash } from "./SyllableTile.styles";

const SyllableTile = (props) => {
  // const letters = props.syllable.toUpperCase();
  // const playAudio = () => {
  //   new Audio(props.sounds[letters]).play();
  // };

  const last = props.syllableTiles.length - 1;
  const rand = Math.random();

  return props.syllableTiles.map((syllable, idx) => {
    return Array.isArray(syllable) ? 
    (
      syllable.map((syl, idx) => {
        return idx === 0 ? (
          <Syllable key={idx+syl}>
            <Tile>{syl}</Tile>
            <Dash>-</Dash>
          </Syllable>
        ) : (
          <>
            <Tile key={idx+syl}>{syl}</Tile>
          </>
        );
      })
    ) : idx === last ? (
      <Tile key={idx+syllable+"last"}>{syllable}</Tile>
    ) : (
      <Syllable key={idx+syllable}>
        <Tile>{syllable}</Tile>
        <Dash>-</Dash>
      </Syllable>
    );
  });
};

export default SyllableTile;
