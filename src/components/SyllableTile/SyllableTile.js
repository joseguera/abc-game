import React from "react";
import { useSelector } from "react-redux";
import { Tile, Syllable, Dash } from "./SyllableTile.styles";

export default function SyllableTile(props) {

  const language = useSelector((state) => state.language.value);
  const playAudio = (syl) => {
    const syllable = syl.toLowerCase();
    new Audio(props.syllableSounds[props.value][syllable]).play();
  };


  const last = props.syllableTiles[language].length - 1;

  return props.syllableTiles[language].map((syllable, idx) => {
    return Array.isArray(syllable) ? (
      syllable.map((syl, idx) => {
        return idx === 0 ? (
          <Syllable key={idx + syl}>
            <Tile onClick={() => playAudio(syl)}>{syl}</Tile>
            <Dash>-</Dash>
          </Syllable>
        ) : (
          <Tile key={idx + syl} onClick={() => playAudio(syl)}>{syl}</Tile>
        );
      })
    ) : idx !== last ? (
      <Syllable key={syllable + idx}>
        <Tile onClick={() => playAudio(syllable)}>{syllable}</Tile>
        <Dash>-</Dash>
      </Syllable>
    ) : (
      <Tile key={idx + syllable} onClick={() => playAudio(syllable)}>{syllable}</Tile>
    );
  });
};