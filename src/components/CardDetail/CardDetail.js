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
import { Link } from "react-router-dom";
import { factorFinder, primeFactorization, removeDuplicates } from "../../zebrAPI" 

export default function CardDetail(props) {
  /////// IMPROVEMENT NOTE ///////
  /*
    If user clicks on the animalImage => "The alligator says [alligator sound]"
  */

  const [isSpellingOpen, setIsSpellingOpen] = useState(false);
  const [audio, setAudio] = useState(new Audio());
  const animal = props.list[props.match.params.id];

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

  const factors = factorFinder(primeFactorization(animal.id));
  const factorButtons = removeDuplicates(factors);



  return (
    <CardHolder>
      <CardLetter key={animal.id}>
        <PlayingCard>
          <XCloserHolder>
            <DestructButton>
              <FontAwesomeIcon icon={faMap} />
            </DestructButton>
            <Link to={`/${props.category}`}>
              <XCloser onClick={() => props.handleOpenClose(animal, audio)}>
                <FontAwesomeIcon icon={faXmark} />
              </XCloser>
            </Link>
          </XCloserHolder>
          <ImageHolder>
            <img
              className={animal.horizontal ? "horizontal" : "vertical"}
              src={animal.animalImage}
              alt={animal.name}
            />
          </ImageHolder>
          <NameHolder>
            {props.category === "science" && (
              isSpellingOpen ? (
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
              )
            )}
            {props.category === "math" && (
              <>
                {factorButtons.map((factor) => {
                  return (
                    <button key={factor} style={{ width : "50px", height : "25px" }}>{factor}</button>
                  )
                })}
              </>
            )}
          </NameHolder>
        </PlayingCard>
      </CardLetter>
    </CardHolder>
  );
}
