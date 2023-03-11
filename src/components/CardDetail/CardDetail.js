import React, { useState } from "react";
import {
  SpellingCard,
  CardUtils,
  FactorButtons,
  FactorUnitAnimations,
} from "components";
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

export default function CardDetail(props) {
  /////// IMPROVEMENT NOTE ///////
  /*
    If user clicks on the animalImage => "The alligator says [alligator sound]"
  */

  const [isSpellingOpen, setIsSpellingOpen] = useState(false);
  const [audio, setAudio] = useState(new Audio());
  const item = props.list[props.match.params.id];
  const [button, setButton] = useState(1);
  const [value, setValue] = useState(1);

  const handleOpenClose = () => {
    const clicked = isSpellingOpen;
    setIsSpellingOpen(!clicked);
    audio.volume = 0;
  };

  // gets passed down to FactButton component to raise the audio file to this component's state
  const getAudio = (audio) => {
    setAudio(audio);
  };

  const factorSplit = (button, value) => {
    setButton(button);
    setValue(value);
  };

  // useEffect(() => {

  // })

  return (
    <CardHolder>
      <CardLetter key={item.id}>
        <PlayingCard>
          <XCloserHolder>
            <DestructButton>
              {/* <FontAwesomeIcon icon={faMap} /> */}
              {item.value}
            </DestructButton>
            <Link to={`/${props.category}`}>
              <XCloser onClick={() => props.handleOpenClose(item, audio)}>
                <FontAwesomeIcon icon={faXmark} />
              </XCloser>
            </Link>
          </XCloserHolder>
          <ImageHolder>
            {/* ///// SCIENCE & ARTS Image Logic ///// */}
            {(props.category === "science" || props.category === "arts") && (
              <img
                className={item.horizontal ? "horizontal" : "vertical"}
                src={item.animalImage}
                alt={item.name}
              />
            )}
            {/* ///// MATH Image Logic ///// */}
            {props.category === "math" && (
              <FactorUnitAnimations
                unitNumber={item.id}
                button={button}
                value={value}
              />
            )}
          </ImageHolder>
          <NameHolder>
            {/* ///// SCIENCE & ARTS Card Title Logic ///// */}
            {(props.category === "science" || props.category === "arts") &&
              (isSpellingOpen ? (
                <SpellingCard
                  list={props.list}
                  sounds={props.sounds}
                  syllableSounds={props.syllableSounds}
                  value={item.value}
                  handleOpenClose={() => handleOpenClose()}
                />
              ) : (
                <CardUtils
                  list={props.list}
                  getAudio={getAudio}
                  handleOpenClose={handleOpenClose}
                  handleLike={props.handleLike}
                  id={item.id}
                  category={props.category}
                  name={item.name}
                  animalNameSound={item.animalNameSound}
                  animalFacts={item.animalFacts}
                  isLiked={item.isLiked}
                />
              ))}
            {/* ///// MATH Card Title Logic ///// */}
            {props.category === "math" && (
              <FactorButtons item={item} factorSplit={factorSplit} />
            )}
          </NameHolder>
        </PlayingCard>
      </CardLetter>
    </CardHolder>
  );
}
