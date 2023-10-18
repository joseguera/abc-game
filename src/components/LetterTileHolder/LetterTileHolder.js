import React from "react";
import { useSelector } from "react-redux";
import { LetterTile, SyllableTile } from "components";

export default function LetterTileHolder({ name, isSpelled, tiles, value, syllables, alphabetLetterSounds }) {
  const language = useSelector((state) => state.language.value);

  return (
    <div
      className="flex justify-center items-center flex-col gap-x-4 w-full"
    >
      {name[language].length > 10 ? (
        <div>
          {isSpelled ? (
            tiles[language].map((tile) => {
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
                        letterSound={alphabetLetterSounds[language]}
                      />
                    ))}
                  </div>
                );
              });
            })
          ) : (
            <div className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5">
              <SyllableTile
                value={value}
                syllables={syllables}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          {isSpelled ? (
            tiles[language].map((tile, idx) => {
              return (
                <div 
                  key={idx + tile}
                  className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5"
                >
                  {tile.split("").map((t, idx) => (
                    <LetterTile
                      key={idx + t}
                      letter={t}
                      letterSound={alphabetLetterSounds[language]}
                    />
                  ))}
                </div>
              );
            })
          ) : (
            <div className="flex justify-center flex-row flex-wrap gap-0.5 mb-0.5">
              <SyllableTile
                value={value}
                syllables={syllables}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
