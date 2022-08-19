import React from "react";
import TileLetter from "../TileLetter";

export default class LetterTiles extends React.Component {
  state = {
    letterTiles: this.props.animalName
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.letterTiles !== prevState.letterTiles) {
  //     this.setTiles();
  //   }
  // }

  // componentDidMount() {
  //   this.setTiles();
  // }

  render() {
    const { letterTiles } = this.state;

    const tiles = letterTiles.split("");

    // console.log(letterTiles)
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
