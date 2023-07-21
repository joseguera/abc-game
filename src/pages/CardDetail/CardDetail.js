import React, { useState } from "react";
import { db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";
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
  XCloserLink,
  UnitHolder,
  ImageHolder,
  NameHolder,
  AnimalImage
} from "./CardDetail.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
  
  const itemIndex = list.findIndex(animal => animal.id === props.match.params.id);
  // const itemIndex = list.findIndex(animal => animal.key === props.match.params.id);

  let item = list[itemIndex];  

  console.log(item)

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
  };

  return (
    <CardHolder>
      <CardLetter key={item.id}>
        <PlayingCard>
          <XCloserHolder>
            <UnitHolder>{item.value}</UnitHolder>
            {/* <UnitHolder>{value}</UnitHolder> */}
            <XCloser
              onClick={() => handleOpenClose(item.id, category, list, audio)}
            >
              <XCloserLink to={`/${category}`}>
                {/* <FontAwesomeIcon icon={faXmark} /> */}
                &#x2715;
              </XCloserLink>
            </XCloser>
          </XCloserHolder>
          <ImageHolder>
            {/* ///// SCIENCE & ARTS Image Logic ///// */}
            {(category === "science" || category === "arts") && (
              <AnimalImage
                src={item.image}
                alt={item.name}
                // alt={item.name.en}
              />
            )}
            {/* ///// MATH Image Logic ///// */}
            {category === "math" && (
              <FactorUnitAnimations
                image={item.image}
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
                // name={item.name.en}
                nameSound={item.nameSound}
                soundEffect={item.soundEffect}
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
