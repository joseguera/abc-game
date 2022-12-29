import React, { useState } from "react";
import { SpellingCard, NameButton, FactButton } from "components";
import {
  CardHolder,
  CardLetter,
  PlayingCard,
  XCloserHolder,
  XCloser,
  DestructButton,
  ImageHolder,
  NameHolder,
  Utils,
  NameTitle,
  Name,
  Icon,
  IconHolder,
  IconHeartLiked,
  IconHeartNotLiked,
} from "./CardDetail.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpellCheck,
  faXmark,
  faQuestion,
  faHeart,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

export default function CardDetail(props) {
  /////// IMPROVEMENT NOTE ///////
  /*
    If user clicks on the animalName => Animal Fact will play
    If user clicks on the animalImage => "The alligator says [alligator sound]"
  */

  const [isSpellingOpen, setIsSpellingOpen] = useState(false);
  const [audio, setAudio] = useState();


  const handleOpenClose = () => {
    const clicked = isSpellingOpen;
    setIsSpellingOpen(!clicked);
    audio.volume = 0;
  };

  // gets passed down to FactButton component to raise the audio file to this component's state
  const getAudio = (audio) => {
    setAudio(audio);
  }

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
                  style={{
                    width: animal.horizontal && "100%",
                    height: !animal.horizontal && "100%",
                  }}
                  src={animal.animalImage}
                  alt={animal.animalName}
                />
              </ImageHolder>
              <NameHolder>
                {isSpellingOpen ? (
                  <SpellingCard
                    animal={animal}
                    sounds={props.sounds}
                    handleOpenClose={() => handleOpenClose()}
                  />
                ) : (
                  <Utils>
                    <NameTitle>
                      <div>
                        <Name
                          style={{
                            lineHeight:
                              (animal.animalName === "Yellow Mongoose" ||
                                animal.animalName === "Vervet Monkey") &&
                              "35px",
                          }}
                        >
                          {animal.animalName}
                        </Name>
                      </div>
                      <Icon onClick={() => handleOpenClose()}>
                        <FontAwesomeIcon icon={faSpellCheck} />
                      </Icon>
                    </NameTitle>
                    <IconHolder>
                      <NameButton
                        animalName={animal.animalName}
                        animalNameSound={animal.animalNameSound}
                      />
                      <FactButton
                        animalName={animal.animalName}
                        animalNameSound={animal.animalNameSound}
                        animalFacts={animal.animalFacts}
                        getAudio={getAudio}
                      />
                      {animal.isLiked ? (
                        <IconHeartLiked onClick={() => handleLike(animal.id)}>
                          <FontAwesomeIcon icon={faHeart} />
                        </IconHeartLiked>
                      ) : (
                        <IconHeartNotLiked
                          onClick={() => handleLike(animal.id)}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </IconHeartNotLiked>
                      )}
                    </IconHolder>
                  </Utils>
                )}
              </NameHolder>
            </PlayingCard>
          </CardLetter>
        ))}
    </CardHolder>
  );
}
