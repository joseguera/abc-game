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
    const { name } = this.props;

    return (
      <AnimalNameHolder>
        {name.eng.length > 10 ? (
          <RowHolder>
            {this.props.isSpelled ? (
              letterTiles.map((tile) => {
                return tile.map((letter, idx) => {
                  return (
                    <TileRow key={idx + letter}>
                      {letter.split("").map((l, idx) => (
                        <LetterTile
                          key={idx + l}
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
                <SyllableTile syllableTiles={syllableTiles} />
              </TileRow>
            )}
          </RowHolder>
        ) : (
          <RowHolder>
            {this.props.isSpelled ? (
              letterTiles.map((tile, idx) => {
                return (
                  <TileRow key={idx + tile}>
                    {tile.split("").map((t, idx) => (
                      <LetterTile
                        key={idx + t}
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
