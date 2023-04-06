import React from "react";
import { LetterTile, SyllableTile } from "components";
import {
  AnimalNameHolder,
  RowHolder,
  TileRow,
} from "./LetterTileHolder.styles";

export default function LetterTileHolder(props) {
  console.log(props.name.eng)
  return (
    <AnimalNameHolder>
      {props.name.eng.length > 10 ? (
        <RowHolder>
          {props.isSpelled ? (
            props.tiles.map((tile) => {
              return tile.map((letter, idx) => {
                return (
                  <TileRow key={idx + letter}>
                    {letter.split("").map((l, idx) => (
                      <LetterTile
                        key={idx + l}
                        letter={l}
                        sounds={props.sounds}
                      />
                    ))}
                  </TileRow>
                );
              });
            })
          ) : (
            <TileRow>
              <SyllableTile
                value={props.value}
                syllableTiles={props.syllables}
                syllableSounds={props.syllableSounds}
              />
            </TileRow>
          )}
        </RowHolder>
      ) : (
        <RowHolder>
          {props.isSpelled ? (
            props.tiles.map((tile, idx) => {
              return (
                <TileRow key={idx + tile}>
                  {tile.split("").map((t, idx) => (
                    <LetterTile
                      key={idx + t}
                      letter={t}
                      sounds={props.sounds}
                    />
                  ))}
                </TileRow>
              );
            })
          ) : (
            <TileRow>
              <SyllableTile
                value={props.value}
                syllableTiles={props.syllables}
                syllableSounds={props.syllableSounds}
              />
            </TileRow>
          )}
        </RowHolder>
      )}
    </AnimalNameHolder>
  );
}
