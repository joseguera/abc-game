import React from "react";
import { useSelector } from "react-redux";
import { Tile, Dash } from "./SyllableTile.styles";

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
          <div key={idx + syl} className="flex flex-row">
            <Tile onClick={() => playAudio(syl)}>{syl}</Tile>
            <Dash>-</Dash>
          </div>
        ) : (
          <Tile key={idx + syl} onClick={() => playAudio(syl)}>{syl}</Tile>
        );
      })
    ) : idx !== last ? (
      <div key={syllable + idx} className="flex flex-row">
        <Tile onClick={() => playAudio(syllable)}>{syllable}</Tile>
        <Dash>-</Dash>
      </div>
    ) : (
      <Tile key={idx + syllable} onClick={() => playAudio(syllable)}>{syllable}</Tile>
    );
  });
};