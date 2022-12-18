import React from "react";
import { Tile, Syllable, Dash } from "./SyllableTile.styles";

const SyllableTile = (props) => {
  // const letters = props.syllable.toUpperCase();
  // const playAudio = () => {
  //   new Audio(props.sounds[letters]).play();
  // };

  const last = props.syllableTiles.length - 1;

  return props.syllableTiles.map((syllable, idx) => {
    return props.animalName === "Vervet Monkey" ||
      props.animalName === "Yellow Mongoose" ? (
      syllable.map((syl, idx) => {
        return idx === 0 ? (
          <Syllable key={idx}>
            <Tile>{syl}</Tile>
            <Dash>-</Dash>
          </Syllable>
        ) : (
          <>
            <Tile key={idx}>{syl}</Tile>
          </>
        );
      })
    ) : idx === last ? (
      <Tile key={idx}>{syllable}</Tile>
    ) : (
      <Syllable key={idx}>
        <Tile>{syllable}</Tile>
        <Dash>-</Dash>
      </Syllable>
    );
  });
};

export default SyllableTile;
