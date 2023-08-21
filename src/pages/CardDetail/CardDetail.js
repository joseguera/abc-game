import React, { useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
  XCloserLink,
} from "./CardDetail.styles";

export default function CardDetail({
  list,
  sounds,
  syllableSounds,
  handleLike,
  handleOpenClose
}) {
  const [isDestructOpen, setIsDestructOpen] = useState(false);
  const [audio, setAudio] = useState(new Audio());
  const [button, setButton] = useState(1);
  const [value, setValue] = useState(1);

  /* finds the index of the object in "list" array being passed down as props
  and provides it to "item" object */
  let { id, category } = useParams();

  ///////////// FIX THIS //////////////////////////

  const { animals, instruments, numbers } = useOutletContext();

  const currList = { animals, instruments, numbers }

  
  const findItem = () => {
    let currentItem;
    let currentList;
    if (category === "science") {
      currentItem = currList['animals'].findIndex(item => item.id === id);
      currentList = currList['animals'][currentItem];
    } 
    if (category === "arts") {
      currentItem = currList['instruments'].findIndex(item => item.id === id);
      currentList = currList['instruments'][currentItem];
    } 
    if (category === "math") {
      currentItem = currList['numbers'].findIndex(item => item.id === id);
      currentList = currList['numbers'][currentItem];
    }
    return currentList;
  }

  let item = findItem(); 


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
    <div
      className="flex justify-center pt-5 w-11/12 lg:w-2/4"
    >
      <div key={item.id} className={`flex flex-col items-center ${item.background} border-8 border-[#fff8dc] w-full h-full rounded-2xl p-2.5 lg:p-3.5`} >
        <div className="flex flex-col items-center lg:justify-between lg:flex-row lg:w-full lg:gap-20">
          <div className="flex flex-row justify-between items-center w-full lg:flex-col-reverse lg:items-start lg:gap-96 lg:w-fit lg:h-full">
            <div className="text-3xl lg:text-6xl">{item.value}</div>
            <div 
              className="text-3xl lg:text-5xl"
              onClick={() => handleOpenClose(item.id, item.category, list, audio)}
            >
              <Link className="decoration-none hover:text-[#4d8080]" to={`/${item.category}`}>
                &#x2715;
              </Link>
            </div>
          </div>
          <div className="w-full h-134 flex justify-center items-center lg:w-132">
            {/* ///// SCIENCE & ARTS Image Logic ///// */}
            {(item.category === "science" || item.category === "arts") && (
              <img
                src={item.image}
                alt={item.name}
              />
            )}
            {/* ///// MATH Image Logic ///// */}
            {item.category === "math" && (
              <FactorUnitAnimations
                image={item.image}
                unitNumber={item.value}
                button={button}
                value={value}
              />
            )}
          </div>
          <div
            className="flex flex-row h-48 gap-4 justify-center items-center lg:w-1/3"
          >
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
          </div>
        </div>
      </div>
    </div>
  );
}
