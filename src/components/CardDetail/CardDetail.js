import React, { useState } from "react";
import { SpellingCard, CardUtils } from "components";
import {
  CardHolder,
  CardLetter,
  PlayingCard,
  XCloserHolder,
  XCloser,
  DestructButton,
  ImageHolder,
  NameHolder,
} from "./CardDetail.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faQuestion, faMap } from "@fortawesome/free-solid-svg-icons";

export default function CardDetail(props) {
  /////// IMPROVEMENT NOTE ///////
  /*
    If user clicks on the animalImage => "The alligator says [alligator sound]"
  */

  const [isSpellingOpen, setIsSpellingOpen] = useState(false);
  const [audio, setAudio] = useState(new Audio());

  const handleOpenClose = () => {
    const clicked = isSpellingOpen;
    setIsSpellingOpen(!clicked);
    audio.volume = 0;
  };

  // gets passed down to FactButton component to raise the audio file to this component's state
  const getAudio = (audio) => {
    setAudio(audio);
  };

  const handleLike = (id) => {
    props.handleLike(id);
  };

  return (
    <CardHolder>
      {props.alphabet
        .filter((letter) => letter.clicked)
        .map((animal) => (
          <CardLetter key={animal.id}>
            <PlayingCard>
              <XCloserHolder>
                <DestructButton>
                  <FontAwesomeIcon icon={faMap} />
                </DestructButton>
                <XCloser onClick={() => props.handleOpenClose(animal, audio)}>
                  <FontAwesomeIcon icon={faXmark} />
                </XCloser>
              </XCloserHolder>
              <ImageHolder>
                <img
                  className={animal.horizontal ? "horizontal" : "vertical"}
                  src={animal.animalImage}
                  alt={animal.name}
                />
              </ImageHolder>
              <NameHolder>
                {isSpellingOpen ? (
                  <SpellingCard
                    animal={animal}
                    sounds={props.sounds}
                    syllableSounds={props.syllableSounds}
                    value={animal.value}
                    handleOpenClose={() => handleOpenClose()}
                  />
                ) : (
                  <CardUtils
                    getAudio={getAudio}
                    handleOpenClose={handleOpenClose}
                    handleLike={handleLike}
                    id={animal.id}
                    name={animal.name}
                    animalNameSound={animal.animalNameSound}
                    animalFacts={animal.animalFacts}
                    isLiked={animal.isLiked}
                  />
                )}
              </NameHolder>
            </PlayingCard>
          </CardLetter>
        ))}
    </CardHolder>
  );
}
