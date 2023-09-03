import React from "react";
import { useSelector } from "react-redux";
import {
  NameButton,
  SoundEffectButton,
  FactButton,
  LikeButton,
} from "components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

export default function CardUtils({
  name,
  nameSound,
  soundEffect,
  funFacts,
  getAudio,
  id,
  category,
  handleLike,
  xSectionCloser,
  isLiked,
  list,
}) {

  const language = useSelector((state) => state.language.value);
  return (
    <div
      className="flex flex-col gap-5 justify-center items-stretch w-full"
    >
      <div
        className="flex justify-center items-center flex-row gap-3.5"
      >
        <NameButton name={name[language]} nameSound={nameSound} category={category} />
        <div
          className="cursor-pointer text-lg text-[#2f4f4f] flex items-center hover:text-[#4d8080]" 
          onClick={() => xSectionCloser()}
        >
          <button>
            <FontAwesomeIcon icon={faShapes} />
          </button>
        </div>
      </div>
      <div className="flex justify-around">
        <SoundEffectButton
          soundEffect={soundEffect}
          getAudio={getAudio}
          category={category}
        />
        <FactButton
          name={name[language]}
          nameSound={nameSound}
          funFacts={funFacts}
          getAudio={getAudio}
        />
        <LikeButton
          handleLike={handleLike}
          isLiked={isLiked}
          id={id}
          category={category}
          list={list}
        />
      </div>
    </div>
  );
}
