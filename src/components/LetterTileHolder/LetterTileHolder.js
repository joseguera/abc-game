import React from "react";
import { useSelector } from "react-redux";
import { LetterTile, SyllableTile } from "components";
import {
  AnimalNameHolder,
  RowHolder,
  TileRow,
} from "./LetterTileHolder.styles";

export default function LetterTileHolder(props) {
  const language = useSelector((state) => state.language.value);

  return (
    <AnimalNameHolder>
      {props.name[language].length > 10 ? (
        <RowHolder>
          {props.isSpelled ? (
            props.tiles[language].map((tile) => {
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
            props.tiles[language].map((tile, idx) => {
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
