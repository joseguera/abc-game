import React from "react";
import { LetterTile, SyllableTile } from "components";
import {
  AnimalNameHolder,
  RowHolder,
  TileRow,
  Test
} from "./LetterTileHolder.styles";

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
            {(this.props.isSpelled) ? (
              tiles.map((tile) => {
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
              letterTiles.map((tile) => {
                return tile.map((syllable, idx) => {
                  return (
                    <TileRow key={idx}>
                      {syllable.split("-").map((l, idx) => (
                          <SyllableTile
                            key={idx}
                            letter={l}
                            // sounds={this.props.sounds}
                          />
                      ))}
                    </TileRow>
                  );
                })
              })
            )}
          </RowHolder>
        ) : (
          <RowHolder>
            {(this.props.isSpelled) ? (
              tiles.map((tile, idx) => {
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
              letterTiles.map((tile, idx) => {
                return (
                  <TileRow key={idx}>
                    {tile.split("-").map((t, idx) => (
                      <SyllableTile
                        key={idx}
                        letter={t}
                        // sounds={this.props.sounds}
                      />
                    ))}
                  </TileRow>
                );
              })
            )}
            
          </RowHolder>
        )}
      </AnimalNameHolder>
    );
  }
}
