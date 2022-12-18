import React from "react";
import { LetterTile, SyllableTile } from "components";
import {
  AnimalNameHolder,
  RowHolder,
  TileRow,
} from "./LetterTileHolder.styles";

export default class LetterTileHolder extends React.Component {
  state = {
    letterTiles: this.props.tiles,
    syllableTiles: this.props.syllables,
  };

  render() {
    const { letterTiles } = this.state;
    const { syllableTiles } = this.state;
    const { animalName } = this.props;

    return (
      <AnimalNameHolder>
        {animalName === "Yellow Mongoose" || animalName === "Vervet Monkey" ? (
          <RowHolder>
            {this.props.isSpelled ? (
              letterTiles.map((tile) => {
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
              })
            ) : (
              <TileRow>
                <SyllableTile syllableTiles={syllableTiles} animalName={animalName} />
              </TileRow>
            )}
          </RowHolder>
        ) : (
          <RowHolder>
            {this.props.isSpelled ? (
              letterTiles.map((tile, idx) => {
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
              })
            ) : (
              <TileRow>
                <SyllableTile syllableTiles={syllableTiles} />
              </TileRow>
            )}
          </RowHolder>
        )}
      </AnimalNameHolder>
    );
  }
}
