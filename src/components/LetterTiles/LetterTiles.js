import React from "react";
import TileLetter from "../TileLetter";

export default class LetterTiles extends React.Component {
  state = {
    letterTiles: this.props.syllables,
  };

  render() {
    const { letterTiles } = this.state;
    const { animalName } = this.props;
    const tiles = letterTiles;


    return (
      <div className="animalName-holder">
        { animalName === "Yellow Mongoose" || animalName === "Vervet Monkey" ? (
          <div className="row-holder">
            {tiles.map((tile) => {
              return tile.map((letter, idx) => {
                return (
                  <div className="tile-row" key={idx}>
                    {letter.split("").map((l, idx) => (
                      <TileLetter key={idx} letter={l} />
                    ))}
                  </div>
                );
              });
            })}
          </div>
        ) : (
          <div className="row-holder">
            {tiles.map((tile, idx) => {
              return (
                <div className="tile-row" key={idx}>
                  {tile.split("").map((tile, idx) => (
                    <TileLetter key={idx} letter={tile} />
                  ))}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
