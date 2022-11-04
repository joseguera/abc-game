import React from "react";
import TileLetter from "../TileLetter";

export default class LetterTiles extends React.Component {
  state = {
    letterTiles: this.props.animalName,
  };

  render() {
    const { letterTiles } = this.state;

    // const mongooseTiles = letterTiles.split(" ");

    const tiles = letterTiles.join("-");

    return (
      <div className="animalName-holder">
          {/* {letterTiles === "Yellow Mongoose" ? (
            <div className="tile-column">
              <div className="tile-direction">
                {mongooseTiles[0].split("").map((tile, idx) => (
                  <TileLetter key={idx} letter={tile} />
                ))}
              </div>
              <div className="tile-direction">
                {mongooseTiles[1].split("").map((tile, idx) => (
                  <TileLetter key={idx} letter={tile} />
                ))}
              </div>
            </div>
          ) : ( */}
            <div className="tile-row">
              {tiles.split("").map((tile, idx) => <TileLetter key={idx} letter={tile} />)}
            </div>
          {/* )} */}
      </div>
    );
  }
}
