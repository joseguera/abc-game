import React, { useState } from "react";
import {
  SpellingCard,
  CardUtils,
  FactorButtons,
  FactorUnitAnimations,
  SlideShow,
} from "components";
import {
  CardHolder,
  CardLetter,
  PlayingCard,
  XCloserHolder,
  XCloser,
  UnitHolder,
  ImageHolder,
  NameHolder,
} from "./CardDetail.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CardDetail({
  list,
  category,
  sounds,
  syllableSounds,
  handleLike,
  handleOpenClose,
  ...props
}) {
  const [isDestructOpen, setIsDestructOpen] = useState(false);
  const [audio, setAudio] = useState(new Audio());
  const [button, setButton] = useState(1);
  const [value, setValue] = useState(1);

  /* finds the index of the object in "list" array being passed down as props
  and provides it to "item" object */

  const itemIndex = (item) => {
    return item.id === props.match.params.id;
  };

  let item = list[list.findIndex(itemIndex)];

  const xSectionCloser = () => {
    const clicked = isDestructOpen;
    setIsDestructOpen(!clicked);
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

  const destructComponents = {
    science: (
      <SpellingCard
        item={item}
        sounds={sounds}
        syllableSounds={syllableSounds}
        value={item.value}
        xSectionCloser={() => xSectionCloser()}
      />
    ),
    arts: <SlideShow xSectionCloser={() => xSectionCloser()} />,
    math: (
      <FactorButtons
        item={item}
        factorSplit={factorSplit}
        xSectionCloser={() => xSectionCloser()}
      />
    ),
  };

  const openDestruct = (category) => {
    return destructComponents[category];
  }

  return (
    <CardHolder>
      <CardLetter key={item.id}>
        <PlayingCard>
          <XCloserHolder>
            <UnitHolder>
              {item.value}
            </UnitHolder>
            <Link to={`/${category}`}>
              <XCloser
                onClick={() => handleOpenClose(item.id, category, list, audio)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </XCloser>
            </Link>
          </XCloserHolder>
          <ImageHolder>
            {/* ///// SCIENCE & ARTS Image Logic ///// */}
            {(category === "science" || category === "arts") && (
              <img
                className={item.horizontal ? "horizontal" : "vertical"}
                src={item.image}
                alt={item.name}
              />
            )}
            {/* ///// MATH Image Logic ///// */}
            {category === "math" && (
              <FactorUnitAnimations
                unitNumber={item.value}
                button={button}
                value={value}
              />
            )}
          </ImageHolder>
          <NameHolder>
            {/* ///// SCIENCE & ARTS Card Title Logic ///// */}
            {isDestructOpen ? (
              openDestruct(category)
            ) : (
              <CardUtils
                list={list}
                item={item}
                getAudio={getAudio}
                xSectionCloser={xSectionCloser}
                handleLike={handleLike}
                id={item.id}
                category={category}
                name={item.name}
                nameSound={item.nameSound}
                funFacts={item.funFacts}
                isLiked={item.isLiked}
              />
            )}
          </NameHolder>
        </PlayingCard>
      </CardLetter>
    </CardHolder>
  );
}
