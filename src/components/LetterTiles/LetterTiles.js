import React from "react";
import TileLetter from "../TileLetter";

export default class LetterTiles extends React.Component {
  state = {
    letterTiles: this.props.animalName
  };

  render() {
    const { letterTiles } = this.state;

    const tiles = letterTiles.split("");

    return (
      <div className="animalName-holder">
        <div className="tile-row">
          {tiles.map((tile, idx) => (
            <TileLetter key={idx} letter={tile} />
          ))}
        </div>
      </div>
    );
  }
}