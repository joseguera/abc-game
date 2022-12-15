import React from "react";
import {
  AnimalNameHolder,
  RowHolder,
  TileRow,
} from "./LetterTileHolder.styles";
import { LetterTile } from "components";

export default class LetterTileHolder extends React.Component {
  state = {
    letterTiles: this.props.syllables,
  };

  render() {
    const { letterTiles } = this.state;
    const { animalName } = this.props;
    const tiles = letterTiles;

    return (
      <AnimalNameHolder>
        {animalName === "Yellow Mongoose" || animalName === "Vervet Monkey" ? (
          <RowHolder>
            {tiles.map((tile) => {
              return tile.map((letter, idx) => {
                return (
                  <TileRow key={idx}>
                    {letter.split("").map((l, idx) => (
                      <LetterTile
                        key={idx}
                        letter={l}
                        sounds={this.props.sounds}
                      />
                    ))}
                  </TileRow>
                );
              });
            })}
          </RowHolder>
        ) : (
          <RowHolder>
            {tiles.map((tile, idx) => {
              return (
                <TileRow key={idx}>
                  {tile.split("").map((t, idx) => (
                    <LetterTile
                      key={idx}
                      letter={t}
                      sounds={this.props.sounds}
                    />
                  ))}
                </TileRow>
              );
            })}
          </RowHolder>
        )}
      </AnimalNameHolder>
    );
  }
}
