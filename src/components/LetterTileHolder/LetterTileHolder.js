import React from "react";
import { useSelector } from "react-redux";
import { LetterTile, SyllableTile } from "components";
import {
  AnimalNameHolder,
  RowHolder,
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
                  <div 
                    key={idx + letter}
                    className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5"
                  >
                    {letter.split("").map((l, idx) => (
                      <LetterTile
                        key={idx + l}
                        letter={l}
                        sounds={props.sounds}
                      />
                    ))}
                  </div>
                );
              });
            })
          ) : (
            <div className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5">
              <SyllableTile
                value={props.value}
                syllableTiles={props.syllables}
                syllableSounds={props.syllableSounds}
              />
            </div>
          )}
        </RowHolder>
      ) : (
        <RowHolder>
          {props.isSpelled ? (
            props.tiles[language].map((tile, idx) => {
              return (
                <div 
                  key={idx + tile}
                  className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5"
                >
                  {tile.split("").map((t, idx) => (
                    <LetterTile
                      key={idx + t}
                      letter={t}
                      sounds={props.sounds}
                    />
                  ))}
                </div>
              );
            })
          ) : (
            <div className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5">
              <SyllableTile
                value={props.value}
                syllableTiles={props.syllables}
                syllableSounds={props.syllableSounds}
              />
            </div>
          )}
        </RowHolder>
      )}
    </AnimalNameHolder>
  );
}
